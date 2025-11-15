import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { emailOTP } from "better-auth/plugins";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const auth = betterAuth({
  database: pool,
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    nextCookies(),
    emailOTP({
      otpLength: 6,
      expiresIn: 10 * 60,
      allowedAttempts: 5,
      async sendVerificationOTP({ email, otp, type }) {
        if (type === "sign-in") {
          console.log(`Sending sign-in OTP ${otp} to email: ${email}`);
        } else if (type === "email-verification") {
          console.log(
            `Sending email verification OTP ${otp} to email: ${email}`
          );
          // Store OTP so we can return it to the client for validation
          // In production, you'd send this via email instead
          (global as any).currentOTP = otp;
        } else {
          console.log("Sending otp for password reset");
        }
      },
    }),
  ],
});

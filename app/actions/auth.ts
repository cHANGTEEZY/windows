"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signUpSimpleAction = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const response = await auth.api.signUpEmail({
      body: {
        email,
        password,
        name: email.split("@")[0],
      },
    });

    return { success: true, data: response };
  } catch (error: unknown) {
    console.error("Signup error:", error);

    if (error instanceof Error && error.message.includes("already exists")) {
      return {
        success: false,
        error: "An account with this email already exists",
      };
    }

    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to create account",
    };
  }
};

export const sendOtpEmailVerificationAction = async ({
  email,
}: {
  email: string;
}) => {
  try {
    // Send OTP verification
    await auth.api.sendVerificationOTP({
      body: {
        email,
        type: "email-verification",
      },
    });

    const generatedOTP = (global as any).currentOTP || "";

    //? todo send an email of generated otp to user using email service provider
    console.log("OTP generated and stored:", generatedOTP);

    return { success: true, otp: generatedOTP };
  } catch (error: unknown) {
    console.error("Send OTP error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send OTP",
    };
  }
};

export const signInEmailPasswordAction = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    console.log("Signing in user with email:", email);

    const response = await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    console.log("User signed in successfully");
    return { success: true, data: response };
  } catch (error: unknown) {
    console.error("Sign in error:", error);

    if (error instanceof Error) {
      if (error.message.includes("Invalid email or password")) {
        return {
          success: false,
          error: "Invalid email or password",
        };
      }
    }

    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to sign in",
    };
  }
};

export const signOutAction = async () => {
  await auth.api.signOut({
    headers: await headers(),
  });

  redirect("/signin");
};

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { CircleAlert } from "lucide-react";
import { useState } from "react";
import Error from "@/components/error";
import { StepProps } from "../type";

const SingUpStepTwo = ({
  formData,
  setFormData,
  error,
  handleIncrement,
}: StepProps) => {
  const [value, setValue] = useState("");

  return (
    <div className="grid gap-2">
      <div className="flex  items-center justify-center">
        <InputOTP
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
          value={value}
          onChange={(value) => {
            setValue(value);
            setFormData({ ...formData, otpCode: value });
          }}
          onComplete={handleIncrement}
        >
          <InputOTPGroup className="gap-2 ">
            <InputOTPSlot index={0} className={error && "border-[#e37d80]"} />
            <InputOTPSlot index={1} className={error && "border-[#e37d80]"} />
            <InputOTPSlot index={2} className={error && "border-[#e37d80]"} />
            <InputOTPSeparator />
            <InputOTPSlot index={3} className={error && "border-[#e37d80]"} />
            <InputOTPSlot index={4} className={error && "border-[#e37d80]"} />
            <InputOTPSlot index={5} className={error && "border-[#e37d80]"} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      {error && <Error errorIcon={<CircleAlert />} errorMessage={error} />}
      <button className="text-[#41a0ff] text-sm font-bold hover:underline cursor-pointer mt-5">
        Resend Code
      </button>
    </div>
  );
};

export const StepTwoHeader = ({ email }: { email: string }) => {
  return (
    <div className="space-y-3">
      <div>
        <button
          type="button"
          className="border cursor-pointer border-gray-500 rounded-2xl text-[#adadad] text-xs px-6 py-2 mx-auto flex items-center justify-center h-6"
        >
          {email}
        </button>
      </div>
      <div>
        <h1 className="text-center mb-3 text-white text-2xl">
          Verify your email{" "}
        </h1>
        <p className="text-center text-[#D2D2D2] text-sm">
          Enter the code we sent to your email address.
        </p>
      </div>
    </div>
  );
};

export default SingUpStepTwo;

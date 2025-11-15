"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import microsoftLogo from "@/public/assets/microsoft-logo.svg";
import { Button } from "@/components/ui/button";

import SignUpStepOne, { StepOneHeader } from "../signup/components/StepOne";
import { FormData } from "../signup/type";
import SingUpStepTwo, { StepTwoHeader } from "../signup/components/StepTwo";
import SignUpStepThree, {
  StepThreeHeader,
} from "../signup/components/StepThree";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  sendOtpEmailVerificationAction,
  signUpSimpleAction,
} from "@/app/actions/auth";
import { toast, Toaster } from "sonner";

const SignupForm = () => {
  const [step, setStep] = useState<number>(1);
  const [showBackDialog, setShowBackDialog] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    email: "",
    otpCode: "",
    storedOtpCode: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState<FormData>({
    email: "",
    otpCode: "",
    password: "",
  });

  const handleIncrement = async () => {
    if (step === 1) {
      if (formData.email === "") {
        return setFormErrors({ ...formErrors, email: "Email is required." });
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        return setFormErrors({
          ...formErrors,
          email: "Invalid email address.",
        });
      } else {
        setFormErrors({ ...formErrors, email: "" });
        const result = await sendOtpEmailVerificationAction({
          email: formData.email,
        });

        if (result.success && result.otp) {
          setFormData({ ...formData, storedOtpCode: result.otp });
        } else {
          return setFormErrors({
            ...formErrors,
            email: result.error || "Failed to send OTP",
          });
        }
      }
    }

    if (step === 2) {
      if (formData.otpCode.length < 6) {
        return setFormErrors({ ...formErrors, otpCode: "Invalid OTP code." });
      } else if (!/^\d{6}$/.test(formData.otpCode)) {
        return setFormErrors({
          ...formErrors,
          otpCode: "OTP code must be 6 numbers.",
        });
      } else if (formData.otpCode !== formData.storedOtpCode) {
        return setFormErrors({
          ...formErrors,
          otpCode: "OTP code does not match.",
        });
      } else {
        setFormErrors({ ...formErrors, otpCode: "" });
      }
    }

    if (step === 3) {
      if (
        !formData.password ||
        formData.password.length < 8 ||
        formData.password === ""
      ) {
        return setFormErrors({
          ...formErrors,
          password: "Password must be at least 8 characters.",
        });
      }
      setFormErrors({ ...formErrors, password: "" });
    }

    setStep((prevStep) => prevStep + 1);
  };

  const handleDecrement = () => {
    if (step === 1) return;
    if (step === 3) {
      setShowBackDialog(true);
      return;
    }
    setStep((prevStep) => prevStep - 1);
  };

  const confirmGoBack = () => {
    setFormData({ ...formData, otpCode: "", storedOtpCode: "", password: "" });
    setStep((prevStep) => prevStep - 1);
    setShowBackDialog(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (step < 3) {
      await handleIncrement();
    }
    // If step === 3, sign up the user (without OTP for now)
    else {
      console.log("Creating account...");
      const result = await signUpSimpleAction({
        email: formData.email,
        password: formData.password,
      });

      if (!result.success) {
        console.error("Signup failed:", result.error);
        setFormErrors({
          ...formErrors,
          password: result.error || "Failed to create account",
        });
      } else {
        console.log("account created");
        toast.success("Account created successfully!");
      }
    }
  };

  const renderHeader = () => {
    switch (step) {
      case 1:
        return <StepOneHeader />;
      case 2:
        return <StepTwoHeader email={formData.email} />;
      case 3:
        return <StepThreeHeader />;
      default:
        return null;
    }
  };

  const renderComponent = () => {
    switch (step) {
      case 1:
        return (
          <SignUpStepOne
            formData={formData}
            setFormData={setFormData}
            error={formErrors.email}
          />
        );
      case 2:
        return (
          <SingUpStepTwo
            formData={formData}
            setFormData={setFormData}
            error={formErrors.otpCode}
            handleIncrement={handleIncrement}
          />
        );
      case 3:
        return (
          <SignUpStepThree
            formData={formData}
            setFormData={setFormData}
            error={formErrors.password}
          />
        );
      default:
        setStep(1);
        return null;
    }
  };

  return (
    <>
      <Card className="rounded-lg bg-[#292929] px-5 pt-0 pb-10 shadow-lg  shadow-[#111010] border-none max-w-[450px] w-full">
        <CardHeader>
          <CardTitle className="flex items-center justify-center">
            <div className="w-full">
              <div className="relative  ">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handleDecrement}
                    className="absolute cursor-pointer left-0 top-[50%] transform -translate-y-[50%] "
                  >
                    {" "}
                    <ArrowLeft color="#ADADAD" />
                  </button>
                )}
                <Image
                  src={microsoftLogo}
                  alt="Microsoft Logo"
                  className="w-35 h-34 flex mx-auto"
                />
              </div>
              {renderHeader()}
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="mt-6">
          {renderComponent()}
          {step !== 2 && (
            <Button
              className="w-full font-bold text-md rounded-xs mt-8 bg-[#0F5EA3] cursor-pointer hover:bg-[#0d4e87]  "
              variant={"default"}
              type="submit"
              onClick={handleSubmit}
            >
              {step === 3 ? "Submit" : "Next"}
            </Button>
          )}
        </CardContent>

        {step !== 2 && (
          <CardFooter className="flex items-center justify-center text-white text-sm mt-8">
            Already have an account?{" "}
            <Link href="/signin">
              <span className="text-[#41a0ff] font-medium ml-1 hover:underline cursor-pointer">
                {" "}
                Sign in
              </span>
            </Link>
          </CardFooter>
        )}
      </Card>

      <AlertDialog open={showBackDialog} onOpenChange={setShowBackDialog}>
        <AlertDialogContent className="bg-[#292929] border-none">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-[#9b9b9b]">
              You will need to re-verify your email if you go back.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmGoBack}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default SignupForm;

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
import { ArrowLeft } from "lucide-react";
import SignInStepOne, { StepOneHeader } from "../signin/components/StepOne";
import SignInStepTwo, { StepTwoHeader } from "../signin/components/StepTwo";
import { SignInFormData } from "../signin/type";
import { signInEmailPasswordAction } from "@/app/actions/auth";
import Link from "next/link";

const SigninForm = () => {
  const [step, setStep] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState<SignInFormData>({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState<SignInFormData>({
    email: "",
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
      }
    }

    if (step === 2) {
      if (!formData.password || formData.password.length < 1) {
        return setFormErrors({
          ...formErrors,
          password: "Password is required.",
        });
      }
      setFormErrors({ ...formErrors, password: "" });
    }

    setStep((prevStep) => prevStep + 1);
  };

  const handleDecrement = () => {
    if (step === 1) return;
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (step < 2) {
      await handleIncrement();
    }
    // If step === 2, sign in the user
    else {
      setIsLoading(true);
      console.log("Signing in...");

      const result = await signInEmailPasswordAction({
        email: formData.email,
        password: formData.password,
      });

      if (!result.success) {
        console.error("Sign in failed:", result.error);
        setFormErrors({
          ...formErrors,
          password: result.error || "Failed to sign in",
        });
        setIsLoading(false);
      } else {
        console.log("Signed in successfully!");
        // Redirect to home
        window.location.href = "/";
      }
    }
  };

  const renderHeader = () => {
    switch (step) {
      case 1:
        return <StepOneHeader />;
      case 2:
        return <StepTwoHeader email={formData.email} />;
      default:
        return null;
    }
  };

  const renderComponent = () => {
    switch (step) {
      case 1:
        return (
          <SignInStepOne
            formData={formData}
            setFormData={setFormData}
            error={formErrors.email}
          />
        );
      case 2:
        return (
          <SignInStepTwo
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
    <Card className="rounded-lg bg-[#292929] px-5 pt-0 pb-10 shadow-lg shadow-[#111010] border-none max-w-[450px] w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-center">
          <div className="w-full">
            <div className="relative">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleDecrement}
                  className="absolute cursor-pointer left-0 top-[50%] transform -translate-y-[50%]"
                >
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
        <Button
          className="w-full font-bold text-md rounded-xs mt-8 bg-[#0F5EA3] cursor-pointer hover:bg-[#0d4e87]"
          variant={"default"}
          type="submit"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : step === 2 ? "Sign in" : "Next"}
        </Button>
      </CardContent>

      <CardFooter className="flex items-center justify-center text-white text-sm mt-8">
        Don&apos;t have an account?{" "}
        <Link href="/signup">
          <span className="text-[#41a0ff] font-medium ml-1 hover:underline cursor-pointer">
            Sign up
          </span>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SigninForm;

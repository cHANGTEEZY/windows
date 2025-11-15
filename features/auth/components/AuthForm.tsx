"use client";

import CustomInput from "@/components/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React, { useState } from "react";
import microsoftLogo from "@/public/assets/microsoft-logo.svg";
import {} from "lucide-react";
import { Button } from "@/components/ui/button";
import { set } from "better-auth";
type AuthFormProps = {
  formTitle?: string;
};

const AuthForm = ({ formTitle }: AuthFormProps) => {
  const [step, setStep] = useState<number>(1);

  const [formData, setFormData] = useState({
    email: "",
  });

  const handleIncrement = () => {
    setStep((prevStep) => prevStep + 1);
    console.log("Current Step:", step);
  };

  return (
    <Card className="rounded-lg bg-[#292929] p-0 pb-10  m-0 border-none max-w-[450px] w-full  ">
      <CardHeader>
        <CardTitle className="flex items-center justify-center">
          <div>
            <Image
              src={microsoftLogo}
              alt="Microsoft Logo"
              className="w-35 h-24 flex mx-auto"
            />

            <h1 className="text-center mb-3 text-white text-2xl">
              Create your Microsoft account
            </h1>
            <p className="text-center text-[#D2D2D2] text-sm">
              Enter your email address.
            </p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CustomInput
          labelBgColor="#292929"
          textColor="text-gray-400"
          inputType="text"
          inputPlaceholder="Email"
          error={"Enter your email address."}
        />
        <Button
          className="w-full font-bold text-md rounded-xs mt-10 bg-[#0F5EA3] cursor-pointer hover:bg-[#0d4e87]  "
          variant={"default"}
          onProgress={handleIncrement}
          type="button"
        >
          Next
        </Button>
      </CardContent>
      <CardFooter className="flex items-center justify-center text-white text-sm">
        Already have an account?{" "}
        <span className="text-[#41a0ff] font-medium ml-1 hover:underline cursor-pointer">
          {" "}
          Sign in
        </span>
      </CardFooter>
    </Card>
  );
};

export default AuthForm;

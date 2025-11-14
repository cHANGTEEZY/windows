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
type AuthFormProps = {
  formTitle?: string;
};

const AuthForm = ({ formTitle }: AuthFormProps) => {
  const [step, setStep] = useState<number>(1);

  return (
    <Card className="rounded-lg bg-[#292929] p-0 m-0 border-none max-w-[500px] w-full  ">
      <CardHeader>
        <CardTitle className="flex items-center justify-center">
          <div className="">
            <div className="border">
              <Image
                src={microsoftLogo}
                alt="Microsoft Logo"
                height={120}
                width={120}
              />
            </div>

            <h1 className="text-center text-white text-2xl">Sign in</h1>
            <p className="text-center text-[#D2D2D2] text-sm">
              Use your Microsoft account.
            </p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CustomInput
          labelBgColor="#292929"
          textColor="text-gray-400"
          inputType="text"
          inputPlaceholder="Email or Username"
        />
        <Button
          className="w-full font-bold text-md rounded-xs mt-10 bg-[#0F5EA3]"
          variant={"default"}
        >
          Next
        </Button>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default AuthForm;

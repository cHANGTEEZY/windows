"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signUpAction = async ({ formData }: { formData: FormData }) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const name = formData.get("name");

  await auth.api.signUpEmail({
    body: {
      email: email as string,
      password: password as string,
      name: name as string,
    },
  });

  redirect("/lockscreen");
};

export const signInAction = async ({ formData }: { formData: FormData }) => {
  const email = formData.get("email");
  const password = formData.get("password");

  await auth.api.signInEmail({
    body: {
      email: email as string,
      password: password as string,
    },
  });

  redirect("/lockscreen");
};

export const signOutAction = async () => {
  await auth.api.signOut({
    headers: await headers(),
  });

  redirect("/signin");
};

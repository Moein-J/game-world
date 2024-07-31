"use server";
import { signIn } from "@/lib/auth";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import { registerSchema } from "./schemas";

export const login = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/admin/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "invalid credentials!" };
        default:
          return { error: "something went wrong" };
      }
    }
    throw error;
  }
};

export const createAccount = async (formData) => {
  const isValid = await registerSchema.safeParse(formData);
  if (!isValid.success) return { error: "ورودی ها را به درستی پر کنید" };
  const hashedPassword = await bcrypt.hash(isValid.data?.password, 12);
  console.log(hashedPassword);
};

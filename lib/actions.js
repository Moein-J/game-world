"use server";
import { signIn } from "@/lib/auth";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import { registerSchema, loginSchema } from "./schemas";

export const login = async (formData) => {
  const isValid = await loginSchema.safeParse(formData);
  if (!isValid.success) return { error: "ورودی ها را به درستی پر کنید" };
  const { email, phone } = Decideder(isValid);
  try {
    await signIn("credentials", {
      email: email,
      phone: phone,
      password: isValid.data?.password,
      redirectTo: "/profile",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "! ایمیل یا پسورد اشتباه است " };
        default:
          return { error: "مشکل در ارتباط" };
      }
    }
    throw error;
  }
};

export const createAccount = async (formData) => {
  const isValid = await registerSchema.safeParse(formData);
  if (!isValid.success)
    return { msg: "ورودی ها را به درستی پر کنید", code: -2 };

  const { email, phone } = Decideder(isValid);

  const hashedPassword = await bcrypt.hash(isValid.data?.password, 12);
  const res = await fetch("http://localhost:2222/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      phone: phone,
      password: hashedPassword,
    }),
  });

  return await res.json();
};

const Decideder = (isValid) => {
  let phone = "",
    email = "";
  if (isValid.data?.phone_email.match(new RegExp("^(\\+98|0)?9\\d{9}$"))) {
    phone = isValid.data?.phone_email;
  } else {
    email = isValid.data?.phone_email;
  }
  return { email, phone };
};

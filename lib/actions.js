"use server"
import { signIn } from "@/lib/auth";
import { AuthError } from "next-auth";

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

export const createAccount = async (formData)=>{

}

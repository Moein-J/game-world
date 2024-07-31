import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "ایمیل را وارد کنید" })
    .email({ message: "ایمیل نامعتبر" }),
  password: z.string().min(1, { message: "پسورد را وارد کنید" }),
});

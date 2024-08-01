import * as z from "zod";

export const loginSchema = z.object({
  phone_email: z.union([
    z
      .string()
      .min(1, { message: "شماره موبایل یا ایمیل را وارد کنید" })
      .email({ message: "ایمیل نامعتبر است" }),
    z.string().min(10).regex(new RegExp("^(\\+98|0)?9\\d{9}$"), {
      message: "شماره همراه نامعتبر است",
    }),
  ]),
  password: z.string().min(8, { message: "پسورد را وارد کنید" }),
});

export const registerSchema = z
  .object({
    phone_email: z.union([
      z
        .string()
        .min(1, { message: "شماره موبایل یا ایمیل را وارد کنید" })
        .email({ message: "ایمیل نامعتبر است" }),
      z.string().min(10).regex(new RegExp("^(\\+98|0)?9\\d{9}$"), {
        message: "شماره همراه نامعتبر است",
      }),
    ]),

    password: z.string().min(8, { message: "پسورد را به درستی وارد کنید" }),
    passwordR: z.string().min(8, { message: "پسورد را به درستی وارد کنید" }),
  })
  .refine(
    (values) => {
      return values.password === values.passwordR;
    },
    {
      message: "پسورد مطابقت ندارد",
      path: ["passwordR"],
    }
  );

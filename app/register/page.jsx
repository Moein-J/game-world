"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Advertisement from "../../components/signup/Advertisement";
import { useTransition, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/schemas";
import { createAccount, login } from "@/lib/actions";

const page = () => {
  const [msg, setMsg] = useState("");
  const [code, setCode] = useState(2);
  const [isPending, startTransition] = useTransition();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      phone_email: "",
      password: "",
      passwordR: "",
    },
  });
  const handleRegister = (formData) => {
    setMsg("");
    setCode(2);
    startTransition(async () => {
      const res = await createAccount(formData);
      if (res.code === 1) {
        const form = {
          email: formData.phone_email,
          password: formData.password,
        };
        await login(form);
      }
      setMsg(res.msg);
      setCode(res.code);
    });
  };
  return (
    <div
      className="w-screen flex h-screen relative bg-cover justify-center items-center"
      style={{ backgroundImage: `url("/signup.png")` }}
    >
      <div className="2xl:w-3/5 1.5xl:w-4/5 lg:w-[90%] xs:w-full h-2/3 flex xs:flex-col lg:flex-row items-center gap-2">
        <Advertisement />
        <div className="flex-grow w-4/5 h-full bg-[#121212] rounded-md flex">
          <div className="w-[55%] h-full relative">
            <Image
              src={"/sign_up.jpg"}
              fill
              className="rounded-r-none rounded-l-md"
            />
          </div>
          <div className="flex-grow h-full flex flex-col gap-16 items-center px-2 py-8 ">
            <h1 className="text-4xl text-[#fff]">ساخت حساب</h1>
            <form
              action={handleSubmit(handleRegister)}
              className="w-full flex flex-col gap-10 items-center"
            >
              <div className="w-full flex flex-col items-center gap-4">
                <input
                  {...register("phone_email")}
                  type="text"
                  placeholder="ایمیل یا شماره موبایل"
                  className="login-input"
                />
                <p className="text-[#be4343]">{errors.phone_email?.message}</p>
              </div>
              <div className="w-full flex flex-col items-center gap-4">
                <input
                  {...register("password")}
                  type="password"
                  placeholder="پسورد"
                  className="login-input"
                />
                <p className="text-[#be4343]">{errors.password?.message}</p>
              </div>
              <div className="w-full flex flex-col items-center gap-4">
                <input
                  {...register("passwordR")}
                  type="password"
                  placeholder="تکرار پسورد"
                  className="login-input"
                />
                <p className="text-[#be4343]">{errors.passwordR?.message}</p>
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="inline-flex w-2/3 h-3 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#161a1e,45%,#282f36,55%,#161a1e)] bg-[length:200%_100%] px-10 py-6 font-medium text-[#ffffff] transition-colors"
              >
                عضویت
              </button>
              {code === 1 ? (
                <p className="text-md text-[#188b52]">{msg}</p>
              ) : (
                <p className="text-md text-[#be4343]">{msg}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

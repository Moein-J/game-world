"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import ShadowGradient from "@/components/ui/shadowgradient/ShadowGradient";
import { login } from "@/lib/actions";
import { loginSchema } from "@/lib/schemas";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });
  return (
    <section className="w-full h-full flex justify-center items-center">
      <ShadowGradient>
        <div className="border border-1 bg-[#121212] border-[#9a9a9a] w-[30rem] h-[34rem] rounded-xl flex flex-col items-center p-5 gap-14">
          <h1 className="text-2xl text-[#fff]">ورود به حساب کاربری</h1>

          <form
            className="flex flex-col w-full items-center gap-10"
            action={handleSubmit(login)}
          >
            <div className="w-full flex flex-col items-center gap-4">
              <input
                type="text"
                {...register("email")}
                placeholder="نام کابری یا ایمیل"
                className="login-input invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
              <p className="text-sm text-[#be4343]">{errors.email?.message}</p>
            </div>
            <div className="w-full flex flex-col items-center gap-4">
              <input
                type="password"
                {...register("password")}
                placeholder="پسورد"
                className="login-input"
              />
              <p className="text-sm text-[#be4343]">
                {errors.password?.message}
              </p>
            </div>

            <button
              type="submit"
              className="inline-flex w-2/3 h-3 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#161a1e,45%,#282f36,55%,#161a1e)] bg-[length:200%_100%] px-10 py-6 font-medium text-[#ffffff] transition-colors"
            >
              ورود
            </button>
          </form>

          <div className="flex gap-4 text-[#9a9a9a] mb-10">
            <Link href={"#"}>بازیابی رمز عبور</Link>
            <Link href={"/register"} className="text-[#e58e27]">
              ساخت اکانت
            </Link>
          </div>
        </div>
      </ShadowGradient>
    </section>
  );
};

export default Login;

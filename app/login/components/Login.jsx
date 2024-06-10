import Link from "next/link";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const Login = () => {
  return (
    <section className="w-full h-full flex justify-center items-center">
      <BackgroundGradient>
        <div className="border border-1 bg-[#121212] border-[#9a9a9a] w-[30rem] h-[28rem] rounded-xl flex flex-col items-center p-5 gap-14">
          <h1 className="text-2xl text-[#fff]">ورود به حساب کاربری</h1>
          <div className="flex flex-col w-full items-center gap-10">
            <input
              type="text"
              placeholder="نام کابری یا ایمیل"
              className="login-input"
            />
            <input
              type="password"
              placeholder="پسورد"
              className="login-input"
            />
            <Link
              href={"/admin/dashboard"}
              className="inline-flex w-2/3 h-3 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#161a1e,45%,#282f36,55%,#161a1e)] bg-[length:200%_100%] px-10 py-6 font-medium text-[#ffffff] transition-colors"
            >
              ورود
            </Link>
            <div className="flex gap-4 text-[#9a9a9a] mb-10">
              <Link href={"#"}>بازیابی رمز عبور</Link>
              <Link href={"signup"} className="text-[#e58e27]">
                ساخت اکانت
              </Link>
            </div>
          </div>
        </div>
      </BackgroundGradient>
    </section>
  );
};

export default Login;

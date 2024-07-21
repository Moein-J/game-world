import Link from "next/link";
import { login } from "../../../lib/actions";
import ShadowGradient from "@/components/ui/shadowgradient/ShadowGradient";
import { redirect } from "next/navigation";

const Login = () => {
  // const logingHandler = async () => {
  //   const res = await login(email.current.value, password.current.value);
  //   // res ? router.push("/admin/dashboard") : null;
  // };
  return (
    <section className="w-full h-full flex justify-center items-center">
      <ShadowGradient>
        <div className="border border-1 bg-[#121212] border-[#9a9a9a] w-[30rem] h-[28rem] rounded-xl flex flex-col items-center p-5 gap-14">
          <h1 className="text-2xl text-[#fff]">ورود به حساب کاربری</h1>

          <form
            className="flex flex-col w-full items-center gap-10"
            action={async (formData) => {
              "use server";
              await login(formData);
              redirect("/admin/dashboard");
            }}
          >
            <input
              type="text"
              name="email"
              placeholder="نام کابری یا ایمیل"
              className="login-input"
            />
            <input
              type="password"
              name="password"
              placeholder="پسورد"
              className="login-input"
            />
            <button
              type="submit"
              // onClick={() => {
              //   logingHandler();
              // }}
              className="inline-flex w-2/3 h-3 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#161a1e,45%,#282f36,55%,#161a1e)] bg-[length:200%_100%] px-10 py-6 font-medium text-[#ffffff] transition-colors"
            >
              ورود
            </button>
          </form>

          <div className="flex gap-4 text-[#9a9a9a] mb-10">
            <Link href={"#"}>بازیابی رمز عبور</Link>
            <Link href={"signup"} className="text-[#e58e27]">
              ساخت اکانت
            </Link>
          </div>
        </div>
      </ShadowGradient>
    </section>
  );
};

export default Login;

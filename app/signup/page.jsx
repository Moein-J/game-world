import Link from "next/link";
import Image from "next/image";
import Advertisement from "./components/Advertisement";

const page = () => {
  return (
    <div
      className="w-screen flex h-screen relative bg-cover justify-center items-center"
      style={{ backgroundImage: `url("/signup.png")` }}
    >
      <div className="w-3/5 h-2/3 flex items-center gap-2">
        <Advertisement />
        <div className="flex-grow h-full bg-[#121212] rounded-md flex">
          <div className="w-[55%] h-full relative">
            <Image src={"/sign_up.jpg"} fill className="rounded-r-none rounded-l-md"/>
          </div>
          <div className="flex-grow h-full flex flex-col gap-16 items-center px-2 py-8 ">
            <h1 className="text-4xl text-[#fff]">ساخت حساب</h1>
            <div className="w-full flex flex-col gap-10 items-center">
              <input
                type="text"
                placeholder="ایمیل یا شماره موبایل"
                className="login-input"
              />
              <input type="text" placeholder="پسورد" className="login-input" />
              <input
                type="text"
                placeholder="تکرار پسورد"
                className="login-input"
              />
              <Link
                href={"/admin/dashboard"}
                className="inline-flex w-2/3 h-3 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#161a1e,45%,#282f36,55%,#161a1e)] bg-[length:200%_100%] px-10 py-6 font-medium text-[#ffffff] transition-colors"
              >
                عضویت
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

"use client";
import Link from "next/link";
import Image from "next/image";
import Advertisement from "./components/Advertisement";
import { useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const email = useRef(null);
  const password = useRef(null);

  const submitHandler = async () => {
    const res = await axios.post("http://localhost:2222/users/signup", {
      email: email.current.value,
      password: password.current.value,
    });
    if (res) {
      router.push("/admin/dashboard");
    }
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
            <div className="w-full flex flex-col gap-10 items-center">
              <input
                ref={email}
                type="text"
                placeholder="ایمیل یا شماره موبایل"
                className="login-input"
              />
              <input
                ref={password}
                type="password"
                placeholder="پسورد"
                className="login-input"
              />
              <input
                type="password"
                placeholder="تکرار پسورد"
                className="login-input"
              />
              <button
                onClick={() => {
                  submitHandler();
                }}
                className="inline-flex w-2/3 h-3 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#161a1e,45%,#282f36,55%,#161a1e)] bg-[length:200%_100%] px-10 py-6 font-medium text-[#ffffff] transition-colors"
              >
                عضویت
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

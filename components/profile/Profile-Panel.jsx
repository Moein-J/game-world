import Title from "./Title";
import Link from "next/link";
import { signOut } from "@/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Gamepad,
  ShoppingCart,
  MessageSquare,
  MessagesSquare,
  Settings,
} from "lucide-react";

const Panel = ({ user }) => {
  return (
    <>
      <section className="flex select-none flex-col items-center justify-between flex-grow px-4 pt-6 pb-10">
        <div className="flex flex-col items-center gap-2">
          <Avatar className="h-16 w-16 bg-links text-[#1b1b1b] font-normal">
            <AvatarImage src="" />
            <AvatarFallback>{user?.email.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <p className="text-links">{user?.email}</p>
        </div>

        <div className="text-links w-full text-md flex flex-col gap-14">
          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#fff]">
            <Gamepad size={35} />
            <p>بازی ها</p>
          </div>
          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#fff]">
            <ShoppingCart size={35} />
            <p>سبد خرید</p>
          </div>
          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#fff]">
            <MessageSquare size={35} />
            <p>پیام ها</p>
          </div>
          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#fff]">
            <MessagesSquare size={35} />
            <p>کامنت</p>
          </div>
          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#fff]">
            <Settings size={35} />
            <p>تنظیمات</p>
          </div>
        </div>

        <form
          className="w-full rounded-xl text-center mb-4 bg-[#973636] text-[#9a9a9a] hover:text-[#fff] transition-all"
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <button className="p-4 w-full h-full" type="submit">
            خروج
          </button>
        </form>
      </section>
    </>
  );
};

export default Panel;

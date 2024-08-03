"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Gamepad,
  ShoppingCart,
  MessageSquare,
  MessagesSquare,
  Settings,
} from "lucide-react";
const Items = () => {
  const path = usePathname();
  return (
    <>
      <div className="text-links w-full text-md flex flex-col gap-14">
        <Link
          href={"/profile/games"}
          className={
            path === "/profile/games"
              ? "flex p-1 flex-col bg-[#9a9a9a] text-[#121212] rounded-md items-center gap-1 cursor-pointer hover:text-[#fff]"
              : "flex p-1 flex-col items-center gap-1 cursor-pointer hover:text-[#9a9a9a]"
          }
        >
          <Gamepad size={35} />
          <p>بازی ها</p>
        </Link>
        <Link
          href={"/profile/cart"}
          className={
            path === "/profile/cart"
              ? "flex p-1 flex-col bg-[#9a9a9a] text-[#121212] rounded-md items-center gap-1 cursor-pointer hover:text-[#fff]"
              : "flex p-1 flex-col items-center gap-1 cursor-pointer hover:text-[#9a9a9a]"
          }
        >
          <ShoppingCart size={35} />
          <p>سبد خرید</p>
        </Link>
        <Link
          href={"/profile/messages"}
          className={
            path === "/profile/messages"
              ? "flex p-1 flex-col bg-[#9a9a9a] text-[#121212] rounded-md items-center gap-1 cursor-pointer hover:text-[#fff]"
              : "flex p-1 flex-col items-center gap-1 cursor-pointer hover:text-[#9a9a9a]"
          }
        >
          <MessageSquare size={35} />
          <p>پیام ها</p>
        </Link>
        <Link
          href={"/profile/comments"}
          className={
            path === "/profile/comments"
              ? "flex p-1 flex-col bg-[#9a9a9a] text-[#121212] rounded-md items-center gap-1 cursor-pointer hover:text-[#fff]"
              : "flex p-1 flex-col items-center gap-1 cursor-pointer hover:text-[#9a9a9a]"
          }
        >
          <MessagesSquare size={35} />
          <p>کامنت</p>
        </Link>
        <Link
          href={"/profile/settings"}
          className={
            path === "/profile/settings"
              ? "flex p-1 flex-col bg-[#9a9a9a] text-[#121212] rounded-md items-center gap-1 cursor-pointer hover:text-[#fff]"
              : "flex p-1 flex-col items-center gap-1 cursor-pointer hover:text-[#9a9a9a]"
          }
        >
          <Settings size={35} />
          <p>تنظیمات</p>
        </Link>
      </div>
    </>
  );
};

export default Items;

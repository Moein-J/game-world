"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Item = ({ item }) => {
  const pathname = usePathname();
  return (
    <>
      <Link
        href={item.url}
        {...item.autoFocus}
        className={`flex text-nowrap gap-2 p-4 w-full justify-end outline-none rounded-xl hover:text-[#fff] transition-all ${
          pathname === item.url ? "bg-[#9a9a9a] text-[#000]" : null
        }`}
      >
        <p>{item.text}</p>
        {item.icon}
      </Link>
    </>
  );
};

export default Item;

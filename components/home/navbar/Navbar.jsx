import { auth } from "@/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { GoHeart } from "react-icons/go";
import Drawer from "./Drawer";

const Navbar = async () => {
  const session = await auth();
  return (
    <>
      <Drawer />
      <nav className="hidden z-30 bg-bgSecondary sticky -top-1 rounded-xl grid-flow-col select-none auto-cols-auto h-16 p-1 lg:grid text-links text-lg font-bold lg:px-14 xl:px-20 2xl:px-20">
        <div className=" w-full h-full flex flex-row items-center gap-6">
          {session?.user?.accessToken ? (
            <Link
              href={
                session?.user?.role === "ADMIN"
                  ? "/admin/dashboard"
                  : "/profile"
              }
              className="flex items-center justify-center gap-4"
            >
              <Avatar className="h-8 w-8 bg-links text-[#1b1b1b] font-normal">
                <AvatarImage src="" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p>پنل کاربری</p>
            </Link>
          ) : (
            <Link href="/login">
              <Avatar className="h-8 w-8 bg-links text-[#1b1b1b] font-normal">
                <AvatarImage src="" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
          )}

          <GoHeart size={25} color="9a9a9a" />
        </div>
        <div className="m-auto">
          <p>دانلودها - گیم ورلد</p>
        </div>
        <div className="w-full h-full flex flex-row justify-end items-center gap-10 text-links">
          <Link href={"#"} className="nav-links">
            <p>تماس با ما</p>
          </Link>
          <Link href={"#"} className="nav-links">
            <p className="">دسته بندی</p>
          </Link>
          <Link href={"#"} className="nav-links">
            <p>برترین ها</p>
          </Link>
          <Link href={"#"} className="nav-links">
            <p>خانه</p>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

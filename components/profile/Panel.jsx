import Title from "./Title";
import Link from "next/link";
import { signOut } from "@/lib/auth";
const Panel = () => {
  return (
    <>
      <section className="flex select-none flex-col items-center gap-4 w-[17%] border-l-2 border-[#9a9a9a80] p-4">
        {/* Upper section (title) */}
        <Title />

        {/* Panel Items */}
        

        <Link href={"/"} className="text-[#9a9a9a]">
          بازگشت به صفحه اصلی
        </Link>

        {/* exit section */}
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

import { signOut } from "@/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Items from "./profile-items";

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

        <Items />

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

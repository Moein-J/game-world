import Panel from "@/components/profile/profile-panel";
import { userProvider } from "@/lib/actions";
import Link from "next/link";
import { Home, TicketIcon } from "lucide-react";
import { Suspense } from "react";
import Loading from "../@auth/(...)login/loading";

const layout = async ({ children }) => {
  const user = await userProvider();
  return (
    <>
      <div className="h-screen bg-[#121212] flex">
        <div className="flex flex-col pb-8 pl-20 w-11/12 h-full">
          <div className="w-full flex items-center flex-row-reverse text-links gap-8 h-24">
            <Link
              href={"/"}
              className="hover:text-[#fff] flex justify-center gap-2 items-center"
            >
              صفحه اصلی
              <Home />
            </Link>
            <Link
              href={"/"}
              className="hover:text-[#fff] flex justify-center gap-2 items-center"
            >
              پشتیبانی
              <TicketIcon />
            </Link>
          </div>
          <div className="flex justify-end flex-grow rounded-2xl bg-[#242529]">
            <div className="w-full h-full text-right">
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </div>
          </div>
        </div>

        <Panel user={user} />
      </div>
    </>
  );
};

export default layout;

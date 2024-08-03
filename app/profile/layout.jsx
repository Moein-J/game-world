import Panel from "@/components/profile/Profile-Panel";
import { userProvider } from "@/lib/actions";
import Link from "next/link";

const layout = async ({ children }) => {
  const user = await userProvider();
  return (
    <>
      <div className="h-screen bg-[#121212] flex">
        <div className="flex flex-col pb-8 pl-20 w-11/12 h-full">
          <div className="w-full flex h-24">
      
          </div>
          <div className="flex justify-end flex-grow rounded-2xl bg-[#242529]">
            <div className="w-full h-full text-right">{children}</div>
          </div>
        </div>

        <Panel user={user} />
      </div>
    </>
  );
};

export default layout;

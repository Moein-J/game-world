import ExtraLinks from "./ExtraLinks";
import Guide from "./Guide";
import LinkData from "./LinkData";
import LinkTitle from "./LinkTitle";

const Links = ({ repacks, repack }) => {
  return (
    <div
      dir="rtl"
      className="flex flex-col gap-4 w-full  bg-[#161a1e] p-6  text-right"
    >
      <LinkTitle repacks={repacks} repack={repack} />
      <LinkData links={repacks[repack].links} />
      <ExtraLinks files={repacks[repack].extraLinks} />
      <Guide guides={repacks[repack].guide.orders} repack={repack} />
    </div>
  );
};

export default Links;

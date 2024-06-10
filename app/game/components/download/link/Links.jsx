import LinkData from "./LinkData";
import LinkTitle from "./LinkTitle";

const Links = ({ repacks, repack }) => {
  return (
    <div dir="rtl" className="w-full  bg-[#161a1e] p-6  text-right">
      <LinkTitle repacks={repacks} repack={repack} />
      <LinkData links={repacks[repack].links} />
    </div>
  );
};

export default Links;

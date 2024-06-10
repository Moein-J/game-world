import CustomNumeralNumericFormat from "@/lib/numbers";
const LinkTitle = ({ repacks, repack }) => {
  return (
    <>
      <div className="flex gap-2">
        <h1 className=" text-2xl">دانلود نسخه {repack} -</h1>
        <h1 className="text-[#e58e27] text-2xl">
          <CustomNumeralNumericFormat value={repacks[repack].totalValue} />{" "}
          {repacks[repack].totalBase}
        </h1>
      </div>
      <div className="flex gap-2 text-[#9a9a9a] mt-4">
        <p className="">
          <CustomNumeralNumericFormat value={repacks[repack].parts} /> پارت ,
        </p>
        <p>
          هر پارت{" "}
          <CustomNumeralNumericFormat value={repacks[repack].partsValue} />{" "}
          {repacks[repack].partsBase}
        </p>
      </div>
    </>
  );
};

export default LinkTitle;

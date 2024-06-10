import Repacks from "./Repacks";
const Download = () => {
  return (
    <div className="px-8 flex flex-col gap-6">
      <div className="flex items-center gap-10">
        <div className="w-1/2 h-[0.1rem] bg-[#e58e27]"></div>
        <p className="text-nowrap text-[#ffffff] text-lg"> قسمت دانلود</p>
        <div className="w-1/2 h-[0.1rem] bg-[#e58e27]"></div>
      </div>
      <Repacks />
      
    </div>
  );
};

export default Download;

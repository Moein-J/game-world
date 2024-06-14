const BoxItem = ({ icon, text }) => {
  return (
    <div className="flex items-center justify-center gap-2 xl:p-2">
      <p className=" w-52 text-nowrap lg:text-sm 1.5xl:text-[1rem] 2xl:text-lg"> {text}</p>
      <div className="p-2 bg-[#e58e27] rounded-xl text-[#ffffff] ">
        {icon}
      </div>
    </div>
  );
};

export default BoxItem;

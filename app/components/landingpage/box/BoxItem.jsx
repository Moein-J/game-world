const BoxItem = ({ icon, text }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <p className=" w-52 text-nowrap"> {text}</p>
      <div className="p-2 bg-[#e58e27] rounded-xl text-[#ffffff] ">
        {icon}
      </div>
    </div>
  );
};

export default BoxItem;

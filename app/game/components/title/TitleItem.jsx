const TitleItem = ({ left_text, right_text }) => {
  return (
    <div className="flex w-full justify-around">
      <div className="w-1/2 flex items-center justify-start text-[#fff] ">
        <p className="p-3 border-r border-[#e58e27]">{left_text}</p>
      </div>
      <div className="w-1/2 flex items-center justify-start text-[#fff] ">
        <p className="p-3 border-r border-[#e58e27]"> {right_text}</p>
      </div>
    </div>
  );
};

export default TitleItem;

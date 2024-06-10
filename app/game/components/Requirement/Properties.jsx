const Properties = ({ title, os, cpu, memory, gpu, storage }) => {
  return (
    <div className="w-1/2  h-[35rem] flex flex-col items-center gap-5">
      <h1 className="border-b p-4 text-xl">{title}</h1>
      <div className="w-3/4 flex-grow flex flex-col items-end gap-6 text-right">
        <div className="flex flex-col items-end gap-1">
          <h1 className="text-[#9a9a9a]"> (Os) سیستم عامل</h1>
          <p>{os}</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <h1 className="text-[#9a9a9a]">(CPU) پردازنده </h1>
          <p>{cpu}</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <h1 className="text-[#9a9a9a]">(Memory) حافظه </h1>
          <p>{memory}</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <h1 className="text-[#9a9a9a]">(GPU) گرافیک </h1>
          <p>{gpu}</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <h1 className="text-[#9a9a9a]">(Storage) حجم </h1>
          <p>{storage}</p>
        </div>
      </div>
    </div>
  );
};

export default Properties;

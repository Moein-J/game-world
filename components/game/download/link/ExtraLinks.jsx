import LinkData from "./LinkData";
const ExtraLinks = ({ files }) => {
  return (
    <div className="flex flex-col gap-2 text-[#9a9a9a]">
      <p className="text-xl border-r-2 border-[#e58e27] p-2">فایل های اضافه</p>
      {files.map((file, index) => (
        <>
          <p>{file.title}</p>
          <LinkData links={file.links} />
        </>
      ))}
    </div>
  );
};

export default ExtraLinks;

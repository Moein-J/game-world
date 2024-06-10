const LinkData = ({ links }) => {
  return (
    <div className="w-full py-7 px-4 gap-10 grid grid-cols-6">
      {links.map((link, index) => (
        <a target="_blank" href={link.data} class="flex items-center justify-center hover:text-[#e58e27]">
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default LinkData;

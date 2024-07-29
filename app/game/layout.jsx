import Navbar from "../../components/home/navbar/Navbar";

const layout = ({ children }) => {
  return (
    <div className="bg-[#121212] w-screen h-screen p-4 flex flex-col items-center">
      <div className="w-5/6">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;

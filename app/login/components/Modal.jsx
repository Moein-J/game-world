const Modal = ({ children }) => {
  return (
    <div className="fixed  bg-[#121212] bg-opacity-95 flex flex-col w-screen backdrop-blur-sm z-50 h-screen justify-center items-center">
      {children}
    </div>
  );
};

export default Modal;

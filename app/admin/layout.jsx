import React from "react";
import Panel from "./components/panel/Panel";

const layout = ({ children }) => {
  return (
    <>
      <div className="h-screen bg-[#121212] p-11">
        <div className="flex justify-end w-full h-full rounded-2xl bg-[#242529]">
          <div className="p-10 w-full h-full text-right">{children}</div>
          <Panel />
        </div>
      </div>
    </>
  );
};

export default layout;

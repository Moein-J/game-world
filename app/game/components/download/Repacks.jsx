import RepackItems from "./RepackItems";
import { useState } from "react";

const Repacks = () => {
  const [repack, setRepack] = useState("DODI");
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center items-center gap-14">
        <RepackItems setRepack={setRepack} repack={repack} title="DODI" />
        <RepackItems setRepack={setRepack} repack={repack} title="FITGIRL" />
        <RepackItems setRepack={setRepack} repack={repack} title="EMPRESS" />
      </div>
      <div className="w-full h-96 bg-links">{repack}</div>
    </div>
  );
};

export default Repacks;

import RepackItems from "./RepackItems";
import { useState } from "react";

import Links from "../link/Links";

const Repacks = ({ repacks }) => {
  const [repack, setRepack] = useState(Object.keys(repacks)[0]);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center items-center gap-14">
        {Object.keys(repacks).map((item)=>(
          <RepackItems setRepack={setRepack} repack={repack} title={item} />
        ))}
        {/* <RepackItems setRepack={setRepack} repack={repack} title="DODI" />
        <RepackItems setRepack={setRepack} repack={repack} title="FITGIRL" />
        <RepackItems setRepack={setRepack} repack={repack} title="EMPRESS" /> */}
      </div>
      <Links repacks={repacks} repack={repack}/>
    </div>
  );
};

export default Repacks;

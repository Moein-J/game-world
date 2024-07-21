"use client"
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const Close = () => {
    const router = useRouter();
  return (
    <>
      <button
          className="absolute top-[21rem] left-[83rem] z-50"
          onClick={() => router.back()}
        >
          <X size={30} className="hover:text-[#8f3d3d] text-[#fff]" />
        </button>
    </>
  );
};

export default Close;

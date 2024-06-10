"use client";
import Modal from "../../login/components/Modal";
import Login from "@/app/login/components/Login";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <>
      <Modal>
        <button
          className="absolute top-[21rem] left-[83rem] z-50"
          onClick={() => router.back()}
        >
          <X size={30} className="hover:text-[#8f3d3d] text-[#fff]" />
        </button>
        <Login />
      </Modal>
    </>
  );
};

export default Page;

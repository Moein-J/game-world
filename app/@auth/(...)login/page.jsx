import Modal from "../../../components/login/Modal";
import Login from "@/components/login/Login";
import Close from "../../../components/login/Close";
import { Suspense } from "react";
import Loading from "./loading";

const Page = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Modal>
          <Close />
          <Login />
        </Modal>
      </Suspense>
    </>
  );
};

export default Page;

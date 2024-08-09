import Modal from "../../../components/login/Modal";
import Login from "@/components/login/Login";

import { Suspense } from "react";
import Loading from "./loading";

const Page = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Modal>
          <Login />
        </Modal>
      </Suspense>
    </>
  );
};

export default Page;

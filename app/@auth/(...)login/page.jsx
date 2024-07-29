import Modal from "../../../components/login/Modal";
import Login from "@/components/login/Login";
import Close from "../../../components/login/Close";

const Page = () => {
  return (
    <>
      <Modal>
        <Close />
        <Login />
      </Modal>
    </>
  );
};

export default Page;

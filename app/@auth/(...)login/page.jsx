import Modal from "../../../components/login/Modal";
import Login from "@/app/login/components/Login";
import Close from "../../../components/login/Close";


const Page = () => {
 
  return (
    <>
      <Modal>
        <Close/>
        <Login />
      </Modal>
    </>
  );
};

export default Page;

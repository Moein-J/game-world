import Modal from "../../login/components/Modal";
import Login from "@/app/login/components/Login";
import Close from "./components/Close";


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

import Modal from "react-modal";
import Button from "../../components/button/Button";
import { LoadingSelect } from "../../redux/coctail/selectCoctail";
import Loader from "../loader/Loader";

const ModalReact = ({ children, isOpen, onClose }: any) => {
  const loading = LoadingSelect();
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Button onClick={onClose} title="X" />
          {children}
        </>
      )}
    </Modal>
  );
};

Modal.setAppElement("#root");

export default ModalReact;

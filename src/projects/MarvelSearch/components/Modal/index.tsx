import {
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from './style';

interface ModalTypes {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({
  onClose,
  children,
}: ModalTypes) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <ModalOverlay
      onClick={handleClose}
    >
      <ModalContent
        onClick={(e: any) => e.stopPropagation()}
      >
        <ModalCloseButton
          onClick={handleClose}
        >
          X
        </ModalCloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  )
};

export default Modal;

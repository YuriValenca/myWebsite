import {
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from './style';

interface ModalTypes {
  onClose: () => void;
  children: React.ReactNode;
  width?: string;
}

const Modal = ({
  onClose,
  children,
  width,
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
        width={width}
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

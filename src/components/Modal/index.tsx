import {
  ModalOverlay,
  ModalContent,
} from './style';

interface ModalTypes {
  onClose: () => void;
  children: React.ReactNode;
  width?: string;
  position: 'top' | 'center';
}

const Modal = ({
  onClose,
  children,
  width,
  position,
}: ModalTypes) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <ModalOverlay
      onClick={handleClose}
      position={position}
    >
      <ModalContent
        onClick={(e: any) => e.stopPropagation()}
        width={width}
        position={position}
      >
        {children}
      </ModalContent>
    </ModalOverlay>
  )
};

export default Modal;

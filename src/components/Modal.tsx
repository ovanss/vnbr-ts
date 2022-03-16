import { ModalHeader, ModalBody, ComposedModal } from 'carbon-components-react';
import React from 'react';

interface IModalProps {
  isModalOpen?: boolean;
  closeModal: () => void;
}

const Modal: React.FC<IModalProps> = (props) => {
  return (
    <div>
      <ComposedModal
        open={props.isModalOpen}
        size="lg"
        // onRequestClose = {props.closeModal}
        onClose={() => props.closeModal()}
        // primaryButtonText
      >
        <ModalHeader />
        <ModalBody>
          <p className="bx--modal-content__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            cursus fermentum risus, sit amet fringilla nunc pellentesque quis.
            Duis quis odio ultrices, cursus lacus ac, posuere felis. Donec
            dignissim libero in augue mattis, a molestie metus vestibulum.
            Aliquam placerat felis ultrices lorem condimentum, nec ullamcorper
            felis porttitor.
          </p>
        </ModalBody>
      </ComposedModal>
    </div>
  );
};

export default Modal;

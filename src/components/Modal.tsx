import { ModalHeader, ModalBody, Modal } from 'carbon-components-react';
import React from 'react';

interface IModalProps {
  isModalOpen?: boolean;
  closeModal: () => void;
}

const ModalC: React.FC<IModalProps> = ({ isModalOpen, closeModal }) => {
  return (
    <div>
      <Modal
        open={isModalOpen}
        size="lg"
        onRequestClose={() => closeModal()}
        primaryButtonText="Read More >>"
        secondaryButtonText="Cancel"
        modalHeading="News"
      >
        {/* <ModalHeader /> */}
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
      </Modal>
    </div>
  );
};

export default ModalC;

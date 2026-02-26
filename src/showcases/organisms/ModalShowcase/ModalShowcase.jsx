import './ModalShowcase.css';
import { Heading } from '../../../components/atoms/Heading/Heading';
import { Button } from '../../../components/atoms/Button/Button';
import { useState } from 'react';
import { Modal } from '../../../components/organisms/Modal/Modal';
import { Paragraph } from '../../../components/atoms/Paragraph/Paragraph';

export const ModalShowcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="modal-showcase showcase-item">
      <Heading>Modal</Heading>
      <Button className="modal-showcase__button" onClick={openModal}>
        Click here to display modal
      </Button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Heading>Modal title</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in leo id nunc malesuada
          vulputate.
        </Paragraph>
      </Modal>
    </div>
  );
};

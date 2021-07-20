import React, { useState } from 'react';
import { Modal } from './Modal';
import CreateDeckForm from '../components/CreateDeckForm'

function CreateDeckModal() {
    const [showModal, setShowModal] = useState(false);

    return (
       <>
        <button onClick={() => setShowModal(true)}>Create Deck</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <CreateDeckForm setShowModal={setShowModal}/>
          </Modal>
        )}
      </>
    )
}

export default CreateDeckModal;
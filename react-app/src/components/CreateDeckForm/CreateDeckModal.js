import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateDeckForm from '.'

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

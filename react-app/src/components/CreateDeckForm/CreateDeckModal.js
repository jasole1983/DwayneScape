import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateDeckForm from '.'
import './CreateDeck.css'

function CreateDeckModal() {
    const [showModal, setShowModal] = useState(false);

    return (
       <>
        <button className='new-deck-btn' onClick={() => setShowModal(true)}>Create A Deck</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <CreateDeckForm setShowModal={setShowModal}/>
          </Modal>
        )}
      </>
    )
}

export default CreateDeckModal;

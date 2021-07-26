import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteDeckForm from '.'
import './DeleteDeck.css'

function DeleteDeckModal({ deckid }) {
    const [showModal, setShowModal] = useState(false);

    return (
       <>
        <button className='delete-deck_btn' onClick={() => setShowModal(true)}>X</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <DeleteDeckForm deckid={deckid} setShowModal={setShowModal}/>
          </Modal>
        )}
      </>
    )
}

export default DeleteDeckModal;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './DeleteDeck.css'
import { deleteDeck } from "../../store/decks"


function DeleteDeckForm({ deckid }) {
    const dispatch = useDispatch();
    console.log("DECKID DELETE MODAL:  ", deckid)
    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(deleteDeck(deckid))
    }

    return (
        <form
            className='delete-form'
            onSubmit={handleSubmit}
            method={'DELETE'}
            action={`/api/decks/${deckid}`}
        >
            <div className="delete-deck_header">Are You Sure You Want To Delete This Deck?</div>
            <button className='confirm-delete' type="submit">
                  Confirm Delete
              </button>
        </form>
    )
}

export default DeleteDeckForm;
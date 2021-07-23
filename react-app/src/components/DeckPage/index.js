import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getSingleDeck } from "../../store/decks";

import "./DeckPage.css"

export default function DeckPage() {
    const dispatch = useDispatch();
    const { deckId } = useParams();
    const deck = useSelector(state => state.decks[deckId])

    useEffect(() => {
        dispatch(getSingleDeck(deckId))
    }, [dispatch, deckId, deck])

    return (
        <div className='deck-info__container'>
            {deckId}
            {deck.title}
        </div>
    )

}
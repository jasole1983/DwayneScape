import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getSingleDeck } from "../../store/decks";

import "./DeckPage.css"

export default function DeckPage() {
    const dispatch = useDispatch();
    const { deckId } = useParams();
    const deck = useSelector(state => state.decks[deckId])

    console.log('COMPONENT -------> DECK', deck)

    useEffect(() => {
        dispatch(getSingleDeck(deckId))
    }, [dispatch, deckId])

    return (
        <>
            {deckId}
            {/* {deck} */}
        </>
    )

}
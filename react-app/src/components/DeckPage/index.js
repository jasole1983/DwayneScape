import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getSingleDeck } from "../../store/decks";

import "./DeckPage.css"

export default function DeckPage() {
    const dispatch = useDispatch();
    const { deckId } = useParams();
    const decks = useSelector(state => state.decks)

    console.log('COMPONENT -------> DECK', decks)

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
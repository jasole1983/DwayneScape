import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getSingleDeck, getDecks } from "../../store/decks";

import "./DeckPage.css"

export default function DeckPage() {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getSingleDeck(id))
    }, [dispatch, id])
    
    const deck = useSelector(state => state.decks[id])
    
    return (
        <div className='deck-info__container'>
            <div className='deck-info__header'>
                <div className='deck-info__header-content'>
                    <div>Deck Name</div>
                    <div>{deck.title}</div>
                </div>
                <div className='deck-info__header-content'>
                    <div>Created By</div>
                    <div>{deck.username}</div>
                </div>
            </div>
        </div>
    )
}
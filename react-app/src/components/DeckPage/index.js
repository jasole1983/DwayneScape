import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getDeckCards } from "../../store/cards";

import "./DeckPage.css"

export default function DeckPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const deck = useSelector(state => state.decks[id])
    const cards = useSelector(state => Object.values(state.cards))

    const deckCards = cards.filter(card => {
        return card.deckId == id
    })
    
    useEffect(() => {
        dispatch(getDeckCards(id))
    }, [dispatch, id])
    
    
    return (
        <div className='deck-info__container'>
            <div className='deck-info__title'>{deck.title}</div>
            <div className='deck-info__header'>
                <div className='deck-info__header-content'>
                    <div>Number of Cards</div>
                    <div>{deckCards.length}</div>
                </div>
                <div className='deck-info__header-content'>
                    <div>STUDY THIS DECK BTN</div>
                </div>
                <div className='deck-info__header-content'>
                    <div>Created By</div>
                    <div>{deck.userName}</div>
                </div>
            </div>
            <div className='card_q-a-header'>
                <div className='card_q-header'>Question</div>
                <div className='card_a-header'>Answer</div>
            </div>
            <div className='card_q-a-container'>
                {deckCards?.map((card, i) => (
                    <div className='card_q-a'>
                        <div className='card_num'>{i+1}</div>
                        <div className='card_q'>{card.question}</div>
                        <div className='card_a'>{card.answer}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
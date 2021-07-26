import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link, useParams } from "react-router-dom";
import { getDeckCards } from "../../store/cards";
import './SideStudyBar.css'
import therock from "../auth/therock.svg"
import StopWatch from '../StopWatch/StopWatch';

const SideStudyBar = () => {
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
        <div className="sidenavbar">
            <div className="sidenavbar-top">
                <div className="sidenavbar-top__logo">
                    <div className="logo-icon">
                    <img className="img" src={therock} alt=""/>
                    </div>
                </div>
                <div className="sidenavbar-top__deck-name">
                    <div className="deck-name-btn">
                        <div className="title">
                            {deck.title}
                        </div>
                </div>
            </div>
                <div className="StopWatch">
                    <StopWatch />
                </div>
            </div>
        </div>
    )
}

export default SideStudyBar;

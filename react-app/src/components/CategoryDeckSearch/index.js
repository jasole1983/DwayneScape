import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { getDecks } from "../../store/decks"
import "./CategoryDeckSearch.css"

export default function CategoryDeckSearch() {
    const dispatch = useDispatch();

    const decks = useSelector(state => Object.values(state.decks))

    console.log('------------> COMPONENT', decks)

    useEffect(() => {
        dispatch(getDecks())
    }, [dispatch, decks])

    return (
        <>
            <div className="search_container">
                <div className="categories_container">
                    <h3>Categories</h3>
                    <NavLink to='/categories/early-life'>Early Life</NavLink>
                    <NavLink to='/categories/movies'>Movies</NavLink>
                    <NavLink to='/categories/tv'>TV</NavLink>
                    <NavLink to='/categories/wrestling'>Wrestling</NavLink>
                    <NavLink to='/categories/trivia'>Trivia</NavLink>
                    <NavLink to='/categories/all-decks'>All Decks</NavLink>
                </div>
                <div className="decks_container">
                    <h3>Decks</h3>
                    {decks?.map(deck => (
                        <div className="deck_card">{deck.title}</div>
                    ))}
                </div>
            </div>
        </>
    )
}

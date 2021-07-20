import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { getDecks } from "../../store/decks"
import "./CategoryDeckSearch.css"

export default function CategoryDeckSearch() {
    const dispatch = useDispatch();

    const decksArray = useSelector((state) => Object.values(state.decks))


    useEffect(() => {
        dispatch(getDecks())
    }, [dispatch, decksArray])

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
                    {decksArray[0]?.map(deck => (
                        <ul>
                            <NavLink to={`/decks/${deck.id}`} className="deck_card">{deck.title}</NavLink>
                        </ul>
                    ))}
                </div>
            </div>
        </>
    )
}

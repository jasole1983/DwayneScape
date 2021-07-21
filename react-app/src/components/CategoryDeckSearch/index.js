import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";

import { getDecks } from "../../store/decks"
import CategoryDeckList from './CategoryDeckList';
import "./CategoryDeckSearch.css"

export default function CategoryDeckSearch() {
    const dispatch = useDispatch();

    const decksArray = useSelector((state) => Object.values(state.decks))
    const { category } = useParams();
    const categoryDeck = decksArray[0]?.filter(deck => {
        return deck.category === category
    })

    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        dispatch(getDecks())
    }, [dispatch, decksArray])

    return (
        <>
            <div className="search_container">
                <nav className="categories_container">
                    <h3>Categories</h3>
                    <NavLink to='/categories/all'>All Decks</NavLink>
                    <NavLink to='/categories/Earlylife'>Early Life</NavLink>
                    <NavLink to='/categories/Movies'>Movies</NavLink>
                    <NavLink to='/categories/Tv'>TV</NavLink>
                    <NavLink to='/categories/Wrestling'>Wrestling</NavLink>
                    <NavLink to='/categories/Trivia'>Trivia</NavLink>
                </nav>
                <div className="decks_container">
                    <h3>Decks</h3>
                        <Route path="/categories/:category">
                            <CategoryDeckList />
                        </Route>
                </div>
            </div>
        </>
    )
}

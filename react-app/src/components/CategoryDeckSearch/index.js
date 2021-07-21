import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";

import { getDecks } from "../../store/decks"
import CategoryDeckList from './CategoryDeckList';
import "./CategoryDeckSearch.css"

export default function CategoryDeckSearch() {
    const dispatch = useDispatch();

    let [clicked, setClicked] = useState('');

    function handleClick() {
        // setClicked('clicked')
    }

    useEffect(() => {
        dispatch(getDecks())
    }, [dispatch])

    return (
        <>
            <div className="search_container">
                <nav className="categories_container">
                    <h3>Categories</h3>
                    <NavLink className={`category-select ${clicked}`} onclick={handleClick()} to='/categories/earlylife'>Early Life</NavLink>
                    <NavLink className={`category-select ${clicked}`} to='/categories/Movies'>Movies</NavLink>
                    <NavLink className={`category-select ${clicked}`} to='/categories/tv'>TV</NavLink>
                    <NavLink className={`category-select ${clicked}`} to='/categories/Wrestling'>Wrestling</NavLink>
                    <NavLink className={`category-select ${clicked}`} to='/categories/trivia'>Trivia</NavLink>
                    <NavLink className={`category-select ${clicked}`} to='/categories/all'>All Decks</NavLink>
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

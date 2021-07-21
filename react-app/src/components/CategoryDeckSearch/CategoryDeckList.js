import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";

import { getDecks } from "../../store/decks"
import "./CategoryDeckSearch.css"

export default function CategoryDeckList() {
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
            {categoryDeck?.map(deck => (
                <ul>
                    <NavLink to={`/decks/${deck.id}`} className="deck_card">{deck.title}</NavLink>
                </ul>
            ))}
        </>
    )
}

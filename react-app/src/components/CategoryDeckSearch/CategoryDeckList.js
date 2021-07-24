import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

import { getDecks } from "../../store/decks"
import "./CategoryDeckSearch.css"

export default function CategoryDeckList() {
    const dispatch = useDispatch();

    const decksArray = useSelector((state) => Object.values(state.decks))
    const { category } = useParams();

    let categoryDeck = decksArray.filter(deck => {
        return deck.category.toLowerCase() === category
    })
    if (category === 'all') {
        categoryDeck = decksArray
    }

    useEffect(() => {
        dispatch(getDecks())
    }, [dispatch])

    return (
        <>
            {categoryDeck?.map(deck => (
                <ul className='deck-search-results'>
                    <NavLink to={`/decks/${deck.id}`} className="deck-card_link">
                        <li className='deck-card'>
                            <div className='deck-card-title__container'>
                                <h3>{deck.title}</h3>
                            </div>
                            <div className='deck-card-category__container'>
                                    <h4>Category</h4>
                                    {deck.category}
                            </div>
                            <div className='deck-card-user__container'>
                                <h4>Created By</h4>
                                {deck.username}
                            </div>
                            <div className='deck-card-count_container'>
                                <h4>Number of Cards</h4>
                                {deck.card_count}
                            </div>
                        </li>
                    </NavLink>
                </ul>
            ))}
        </>
    )
}

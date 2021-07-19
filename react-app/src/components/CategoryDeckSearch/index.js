import { useSelector } from "react-redux";
import "./CategoryDeckSearch.css"

export default function CategoryDeckSearch() {
    const decks = useSelector(state => state.session.decks)

    return (
        <>
            <div className="search_container">
                <div className="categories_container">
                    Categories
                </div>
                <div className="decks_container">
                    Decks
                </div>
            </div>
        </>
    )
}

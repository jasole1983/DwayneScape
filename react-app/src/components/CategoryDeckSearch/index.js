import { NavLink, Route } from "react-router-dom";

import CategoryDeckList from './CategoryDeckList';
import "./CategoryDeckSearch.css"

export default function CategoryDeckSearch() {

    return (
        <>
            <div className="search_container">
                <nav className="categories_container">
                    <h3 className='category-title'>Categories</h3>
                    <NavLink className='category-select' activeClassName='search-active' to='/search/all'>All Decks</NavLink>
                    <NavLink className='category-select' activeClassName='search-active' to='/search/early-life'>Early Life</NavLink>
                    <NavLink className='category-select' activeClassName='search-active' to='/search/movies'>Movies</NavLink>
                    <NavLink className='category-select' activeClassName='search-active' to='/search/tv'>TV</NavLink>
                    <NavLink className='category-select' activeClassName='search-active' to='/search/wrestling'>Wrestling</NavLink>
                    <NavLink className='category-select' activeClassName='search-active' to='/search/trivia'>Trivia</NavLink>
                </nav>
                <div className="decks_container">
                    <h3 className='decks-title'>Decks</h3>
                        <Route path="/search/:category">
                            <CategoryDeckList />
                        </Route>
                </div>
            </div>
        </>
    )
}

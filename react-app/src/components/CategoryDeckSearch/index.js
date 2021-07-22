import { NavLink, Route } from "react-router-dom";

import CategoryDeckList from './CategoryDeckList';
import "./CategoryDeckSearch.css"

export default function CategoryDeckSearch() {

    return (
        <>
            <div className="search_container">
                <nav className="categories_container">
                    <h3 className='category-title'>Categories</h3>
                    <NavLink className='category-select' activeClassName='search-active' to='/categories/early-life'>Early Life</NavLink>
                    <NavLink className='category-select' activeClassName='search-active' to='/categories/movies'>Movies</NavLink>
                    <NavLink className='category-select' activeClassName='search-active' to='/categories/tv'>TV</NavLink>
                    <NavLink className='category-select' activeClassName='search-active' to='/categories/wrestling'>Wrestling</NavLink>
                    <NavLink className='category-select' activeClassName='search-active' to='/categories/trivia'>Trivia</NavLink>
                    <NavLink className='category-select' activeClassName='search-active' to='/categories/all'>All Decks</NavLink>
                </nav>
                <div className="decks_container">
                    <h3 className='decks-title'>Decks</h3>
                        <Route path="/categories/:category">
                            <CategoryDeckList />
                        </Route>
                </div>
            </div>
        </>
    )
}

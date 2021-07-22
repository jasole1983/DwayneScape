import { NavLink, Route } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import "./DashBoard.css";
import {getMyDecks} from "../../store/decks";
import CreateDeckModal from "../CreateDeckForm/CreateDeckModal";

export default function DashBoard() {
	const user = useSelector((state) => state.session.user);
	// const decks = useSelector(state => state.decks)
	const countChecked = 1;
	const dispatch = useDispatch();

	const displayMyDecks = () => dispatch(getMyDecks(user.id));
	const myDecks = displayMyDecks()[0];
	// console.log("before renderin")
	return (
		<>
			<header className='dashboard__head'>
				<div className='user_home'>
					{/* <button className="home">HOME</button> */}
					<div className='username'>{user.username}'s Dashboard</div>
				</div>
				{countChecked === 1 /* handle grammar based on deck count */ ? (
					<button className='study_these'>{`Study this deck!`}</button>
				) : (
					<button className='study_these'>{`Study these ${countChecked} decks!`}</button>
				)}
				<div className='mastery'>Mastery</div>
			</header>
			<div className='tab__container'>
				<NavLink className='tab__select' activeClassName='tab__active' to='/dashboard/studying'>Decks I'm Studying</NavLink>
				<NavLink className='tab__select' activeClassName='tab__active' to='/dashboard/created'>Decks I've Created</NavLink>
			</div>
			<div className='deck_displays'>
				<ul className='deck_list'>
					{myDecks &&
						myDecks.map((deck) => {
							return (
								<li className='deck'>
									<h2 className='title'>{deck.title}</h2>
									<span className='qty_of_cards'>{deck.card_count}</span>
									<span className='category'>{deck.category}</span>
									<input type='checkbox' checkedStatus='' />
									<button className='deck_btn'>Edit</button>
									<button className='deck_btn remove'>Delete</button>
								</li>
							);
						})}
				</ul>
			</div>
			<CreateDeckModal />
		</>
	);
}

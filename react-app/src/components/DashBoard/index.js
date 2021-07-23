import { NavLink } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { useState, useEffect } from "react";
import "./DashBoard.css";
import { getMyDecks } from "../../store/decks";
import CreateDeckModal from "../CreateDeckForm/CreateDeckModal";


export default function DashBoard(props) {
	const user = useSelector((state) => state.session.user);
	const decks = useSelector(state => state.decks)
	const [myDecks, setMyDecks] = useState([])
	const dispatch = useDispatch();
	useEffect( () => {
		const res = dispatch(getMyDecks(user.id))
		setMyDecks(res)
		return myDecks
		},
	[] )
	const dTR = Object.values(decks)
	const deckEls = []
	dTR.forEach(deck => deckEls.push(
		<NavLink to={`/decks/${deck.id}`} >
			<li key={deck.id} className='deck_container'>
				<div className='deck_spec_cont'>
					<h2 className='title'>{deck.title}</h2>
					<div className="deck_span_cont">
						<div className='num_cards'>Cards: {deck.card_count}</div>
						<div className='category'>Category: {deck.category}</div>
						<div className='study_checkbox'>
							<NavLink className='checkbox_label' to="/study">
								Study this Deck
							</NavLink>
							<input className='checkbox' type='checkbox' checkedStatus=''/>
						</div>
					</div>
				</div>
				<NavLink to={`/add-cards/${deck.id}`} deckId={deck.Id}>
					<button className='add-cards_btn'>
						Add Cards
					</button>
				</NavLink>
				<div className="btn_cont">
					<button className='deck-btn_remove'>Delete</button>
				</div>
			</li>
		</NavLink>

	))
	// const tempDecks = myDecks.map()
	// console.log("before renderin", decks)
	return (
		<div className='dashboard__container'>
			<header className='dashboard__head'>
				<div className='user_home'>
					{/* <button className="home">HOME</button> */}
					<div className='username'>{user.username}'s Dashboard</div>
				</div>
				{dTR.length === 1 /* handle grammar based on deck count */ ? (
					<button className='study_these'>{`Study this deck!`}</button>
				) : (
					<button className='study_these'>{`Study these ${dTR.length} decks!`}</button>
				)}
				<div className='mastery'>Mastery</div>
			</header>
			<div className='tab__container'>
				<NavLink className='tab__select' activeClassName='tab__active' to='/dashboard/studying'>Decks I'm Studying</NavLink>
				<NavLink className='tab__select' activeClassName='tab__active' to='/dashboard/created'>Decks I've Created</NavLink>
			</div>
			<div className='deck_displays'>
				<ul className='deck_list'>
					{deckEls}
					<CreateDeckModal />
				</ul>
			</div>
		</div>
	);
}

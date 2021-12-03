import { NavLink, Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { useState, useEffect } from "react";
import { Modal } from '../../context/Modal'
import "./DashBoard.css";
import { getDecks } from "../../store/decks";
import CreateDeckModal from "../CreateDeckForm/CreateDeckModal";
import DeleteDeckModal from "../DeleteDeckForm/DeleteDeckModal"


export default function DashBoard(props) {
	const user = useSelector((state) => state.session.user);
	const decks = useSelector(state => state.decks)
	const [myDecks, setMyDecks] = useState([])
	const dispatch = useDispatch();
	
	useEffect( () => {
		const res = dispatch(getDecks())
		setMyDecks(res)
		return myDecks
		},
	[dispatch, getDecks])

	const dTR = Object.values(decks)
	const myDecksToDisplay = dTR.filter(deck => deck.userId === user.id)
	const myStudyingDecks = dTR.filter(deck => deck.studying === true)
	const deckEls = []
	myDecksToDisplay.forEach(deck => deckEls.push(
		<div key={deck.id} className='deck_alignment'>
			<NavLink to={`/decks/${deck.id}`} >
				<li  className='deck_container'>
					<div className='deck_spec_cont'>
						<h2 className='title'>{deck.title}</h2>
						<div className="deck_span_cont">
							<div className='num_cards'>Cards: {deck.card_count}</div>
							<div className='category'>Category: {deck.category}</div>
						</div>
					</div>
					<NavLink to={`/study/${deck.id}`}>
						<button className='dash-study_btn'>Study This Deck</button>
					</NavLink>
					<NavLink to={`/add-cards/${deck.id}`} deck={deck}>
						<button className='add-cards_btn'>Add Cards</button>
					</NavLink>
				</li>
			</NavLink>
			<div className='delete-deck_alignment'>
				<DeleteDeckModal deckid={deck.id}/>
			</div>
		</div>

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
			</header>
			<div className='tab__container'>
				<NavLink className='tab__select' activeClassName='tab__active' to='/dashboard/studying'>Decks I'm Studying</NavLink>
				<NavLink className='tab__select' activeClassName='tab__active' to='/dashboard/created'>Decks I've Created</NavLink>
			</div>
			<div className='deck_displays'>
				<ul className='deck_list'>
					<CreateDeckModal /> 
					{deckEls}
				</ul>
			</div>
		</div>
	);
}

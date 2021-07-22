import {useDispatch, useSelector} from "react-redux";
import "./DashBoard.css";
import {getMyDecks} from "../../store/decks";
import {useEffect, useState} from "react";
import CreateDeckModal from "../CreateDeckForm/CreateDeckModal";
import { NavLink } from "react-router-dom";

export default function DashBoard() {
	const user = useSelector((state) => state.session.user);
	const decks = useSelector(state => state.decks)
	const countChecked = 1;
	const [myDecks, setMyDecks] = useState([])
	const dispatch = useDispatch();
	useEffect(() => {
		async function loadMyDecks(){
			const res = await dispatch(getMyDecks(user.id))
			setMyDecks(res)
			return myDecks
		}
		loadMyDecks()
	}, [dispatch])
	const dTR = Object.values(decks)
	const deckEls = []
	dTR.forEach(deck => deckEls.push(
		<li key={deck.id} className='deck_container'>
			<div className='deck_spec_cont'>
				<h2 className='title'>{deck.title}</h2>
				<div className="deck_span_cont">
					<span className='qty_of_cards'>Cards: {deck.card_count}</span>
					<span className='category'>Category: {deck.category}</span>
				</div>
			</div>
			<button className='add_cards_btn'><NavLink to={`/add-cards/${deck.id}`} deckId={deck.Id}>Add Cards</NavLink></button>
			<span className='checkbox_label'>Study this Deck</span>
			<input className='checkbox' type='checkbox' checkedStatus=''/>
			<div className="btn_cont">
				<button className='deck_btn'>Edit</button>
				<button className='deck_btn remove'>Delete</button>
			</div>
		</li>

	))
	// const tempDecks = myDecks.map()
	// console.log("before renderin", decks)
	return (
		<>
			<header className='dashboard_head'>
				<div className='user_home'>
					{/* <button className="home">HOME</button> */}
					<div className='username'>{user.username}</div>
				</div>
				{countChecked === 1 /* handle grammar based on deck count */ ? (
					<button className='study_these'>{`Study this deck!`}</button>
				) : (
					<button className='study_these'>{`Study these ${countChecked} decks!`}</button>
				)}
				<div className='mastery'>Mastery</div>
			</header>
			<div className='deck_tab_container'>
				<div className='study_decks deck_tab'>Decks I'm Studying</div>
				<div className='my_decks deck_tab'>Decks I've Created</div>
			</div>
			<div className='deck_displays'>
				<ul className='deck_list'>
					{deckEls}
					<li className='deck_container'>
						<h2>NEW DECK!</h2>
					</li>
				</ul>
			</div>
			<CreateDeckModal />
		</>
	);
}

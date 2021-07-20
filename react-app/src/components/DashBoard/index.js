import { useDispatch, useSelector } from "react-redux";
import "./DashBoard.css"
import { getDecks } from "../../store/decks";
import { useEffect } from "react";
import CreateDeckModal from "../../context/CreateDeckModal";

export default function DashBoard(){

    const user = useSelector(state => state.session.user)
    // const decks = useSelector(state => state.decks)
    const countChecked = 1
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getDecks())
    }, [dispatch])

    return (
        <>
          <header className="dashboard_head">
            <div className="user_home">
              <button className="home">HOME</button>
              <div className="username">{user.username}</div>
            </div>
            <button className="study_these">{`Study these ${countChecked} decks!`}</button>
            <div className="mastery">Mastery</div>
          </header>
          <div className="deck_tab_container">
            <div className="study_decks deck_tab">Decks I'm Studying</div>
            <div className="my_decks deck_tab">Decks I've Created</div>
          </div>
          <CreateDeckModal />
        </>
    )
}

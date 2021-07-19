import { useSelector } from "react-redux";
import "./DashBoard.css"

export default function DashBoard(){

    const user = useSelector(state => state.session.user)
    const countChecked = 1

    // const decks = null

    // const makeDecks = () => {
    //   for (let deck of decks){
    //     <div className="deck_container">
    //       <input type="checkbox" />
    //       <div className="stats_container">
    //         <div className="progress">Prgress: 0%</div>
    //         <div className="studied">0 of 100 cards studied</div>
    //       </div>
    //       <h3>deck.title</h3>
    //       <ul>
    //         <li>Study</li>
    //         <li>Preview</li>
    //         <li>Edit</li>
    //       </ul>
    //     </div>
    //   }
    // }

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
        {/* {makeDecks()} */}
      </>
    )
}
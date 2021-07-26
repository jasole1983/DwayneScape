import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import './AddCards.css'
import { getDeckCards } from "../../store/cards";
import { useEffect, useState } from "react";
import { getMyDecks } from "../../store/decks";
import { NewCard } from "./NewCard";
// import { CardForm } from "./cardForm";


export default function AddCards(){
  
  // const user = useSelector(state => state.session.user)
  const decks = useSelector(state => state.decks)
  const { id } = useParams()
  const deck = decks[id]
  const deckCards = Object.values(useSelector(state => state.cards)).filter(deck => deck.id ===id)
  const [deckOfCards, setDeckOfCards] = useState([]);
  const [count, setCount] = useState(0)
  const [newCards, setNewCards] = useState([])
  // const [nextNumber, setNextNumber] = useState(0)
  const [rendered, setRendered] = useState(false)
  // const [renderMe, setRenderMe] = useState([])
  // const [firstRender, setFirstRender] = useState(true)
  // const [loaded, setLoaded] = useState(false)
  // const [finished, setFinished] = useState(false)
  const dispatch = useDispatch()
  // let cardIndex = deck.card_count
  const convertedCards = deckCards.map((card, i) => new NewCard(i+1, id, card.question, card.answer))
  
  const handleAddCard = (e) => {
    // const myArray = []
    // setCount(count + 1)
    // for (let i = nextNumber; i < count; i++){
    //   let x = {"count": count, "question": '', "answer": '', "deckId": ''}
    //   myArray.push(x)
    // }
    e.preventDefault()
    setRendered(false)
    setNewCards([...newCards, NewCard(count, id)])
    
  }
   
  const handleDel = (e) => {
    deckOfCards.splice(e.target.index - 1, 1)
    setRendered(true)
    return
   }
  
  const handleSubmit = (data) => {
    return
  } 
   
  setDeckOfCards([...convertedCards, ...newCards])
  
  useEffect(() => {
    setCount(deckCards.length)  
    // if (loaded === false){
      // dispatch(getDeckCards(id))
      // dispatch(getMyDecks(user.id))
      // setLoaded(true) 
    // }
    
    
  }, [deckCards])
      
    return (
        <>
          <header className="deck_title">{deck.title}</header>
          <form method="POST" action="/api/cards/many" onSubmit={handleSubmit(FormData)}>
            {deckOfCards.map((card, i) => (
              <li className="row" key={i}>
                <label className="label" >Card Registry # {i}</label>
                <textarea key={i} placeholder={card.question} value={card.question} className="qan"></textarea>
                <textarea key={i} placeholder={card.answer} value={card.answer} className="qan"></textarea>
                <button key={i} className="del" onClick={(e) => handleDel(e)}>X</button>
              </li>
            ))}
          
            <button className="add_row_btn" onClick={handleAddCard}>Add Row</button>
            <button className="reset" onClick={null}>Reset</button>
            <button className="save_deck" type="submit">Save Deck</button>
          </form>
        </>
        )

        }
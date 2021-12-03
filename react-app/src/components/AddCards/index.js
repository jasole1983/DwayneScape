import { useDispatch, useSelector } from "react-redux"
import { Redirect, useParams } from "react-router-dom"
import './AddCards.css'
import { createManyCards, deleteCard } from "../../store/cards";
import { useEffect, useState } from "react";
import AddCard from "./addCard"
import { updateDeck } from "../../store/decks";




export default function AddCards(){
  const { deckid } = useParams()
  const dispatch = useDispatch()
  const decks = useSelector(state => state.decks)
  const cardsRaw = useSelector(state => state.cards)
  const deck = decks[Number(deckid)]
  // const deck = Object.values(decks)
  const cards = deck.cardids.map((cardid) => cardsRaw[cardid]) 
  // const cards = Object.values(cardsX)
  const [tempCards, setTempCards] = useState([])

  // let index
  const handleAddCard = () => {
    
    const newCard = {
      qph: "The real question is, 'Do ya smellelelelel what the Rock is cookin?",
      aph: "What was the answer? IT DOESN'T MATTER what the answer is!!" ,
      deckid,
      id: `${deckid}.${deck.card_count+1}`,
      question: "",
      answer: "",
    }
    setTempCards([...tempCards, newCard])   
  }
    const handleDel = (target) => {
      const idx = target - 1
      setTempCards([...tempCards.slice(0, idx).concat(tempCards.slice(target))])

    }

    const handleSave = () => {
      const newCards = tempCards.map((card) => card)
      
      const deckData = {deck: deck, cards: newCards}
      console.log({deckData})
      dispatch(updateDeck(deckData, deckid))
    }   

  useEffect(() => {
    setTempCards(cards.slice())
    
    setTempCards([...tempCards])
  }, [])

    return (
      <>
        
          <header className="deck_title">
            <input name="deck_title" value={deck.title}/>
          </header>
          <table className="cardsTable">
            <thead>
              <tr>
                <th className="number">#</th>
                <th className="q">Question</th>
                <th className="an">Answer</th>
                <th className="del"></th>
              </tr>
            </thead>
            <tbody>
              {tempCards.map((card, idx) => (
                <tr className={"row"} type={`row-${idx+1} row`} index={idx+1} key={idx+1}>
                  <AddCard 
                  card={card}
                  index={idx+1}
                  handleDel={handleDel}
                  tempCards={tempCards}
                  setTempCards={setTempCards}
                  />
                </tr>
              ))}
            </tbody>
          </table>
          <div className="btn_cont_cards">
            <button className="add_row_btn" onClick={handleAddCard}>Add Row</button>
            <button className="reset" onClick={null}>Reset</button>
            <button className="save_deck" onClick={handleSave}>Save Deck</button>
          </div>
        
      </>
   )

 }
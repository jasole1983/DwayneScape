import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import './AddCards.css'
import { createManyCards, getDeckCards } from "../../store/cards";
import { useEffect, useState } from "react";
import AddCard from "./addCard"



export default function AddCards(){
  const { deckid } = useParams()
  const dispatch = useDispatch()
  const decks = useSelector(state => state.decks)
  const cardsRaw = useSelector(state => state.cards)
  // const deckX = decks[deckid]
  const deck = Object.values(decks).filter((deck) => deck.id == deckid)
  const cards = Object.values(cardsRaw).filter((card)=>{
    const prefix = card.id.split('.')[0]
    if (prefix === deckid){
      return card
    }
  })
  const [tempCards, setTempCards] = useState([...cards])
  // let index

  useEffect(() => {
    // const myCards = async () => {
    //   const myDeck = await dispatch(getDeckCards(deckid))
    //   if (myDeck !== undefined){
    //     const myList = await Object.values(myDeck)
    //     setTempCards(myList)
    //   }
    // }
    // myCards()
    dispatch(setTempCards([...cards]))
  }, [dispatch, cards])

  const handleAddCard = () => {
    // const id = `${deckid}.${index}`
    
    const newCard = {
      qph: "The real question is, 'Do ya smellelelelel what the Rock is cookin?",
      aph: "What was the answer? IT DOESN'T MATTER what the answer is!!" ,
      deckid,
      question: "",
      answer: "",
    }
    setTempCards([...tempCards, newCard])   
  }
    const handleDel = (e) => {
      const idx = e.target.key
      const targetId = `${deckid}.${idx}`
      const newTempCards = tempCards.filter((card) => card.id !== targetId)
      setTempCards([...newTempCards])
    }

    const handleSave = () => {
      dispatch(createManyCards(tempCards))
    }   
    return (
      <>
        
          <header className="deck_title">
            {/* <input name="deck_title" value={deck.title}/> */}
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
                <AddCard 
                card={card}
                index={idx+1}
                handleDel={handleDel}
                setTempCards={setTempCards}
                tempCards={tempCards}
                />
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
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import './AddCards.css'
import { getDeckCards } from "../../store/cards";
import { useEffect, useState } from "react";
import { getMyDecks } from "../../store/decks";
import { NewCard } from "./NewCard";
import { CardForm } from "./cardForm";


export default function AddCards(){
  const user = useSelector(state => state.session.user)
  const decks = useSelector(state => state.decks)
  const { id } = useParams()
  const deck = decks[id]
  const deckCards = Object.values(useSelector(state => state.cards)).filter(deck => deck.id ===id)
  const [deckOfCards, setDeckOfCards] = useState([]);
  const [count, setCount] = useState(0)
  const [state, setState] = useState('')
  const [newCards, setNewCards] = useState([])
  const [nextNumber, setNextNumber] = useState(0)
  const [renderMe, setRenderMe] = useState([])
  const [firstRender, setFirstRender] = useState(true)
  const dispatch = useDispatch()
  let deck.cardCount
  const convertedCards = deckCards.map((card, i) => new NewCard(i+1, id, card.question, card.answer))






  const handleAddCard = () => {
    const myArray = []
    setCount(count + 1)
    for (let i = nextNumber; i < count; i++){
      let x = {"count": count, "question": '', "answer": '', "deckId": ''}
      myArray.push(x)
    }
    
    setNewCards(myArray)
  }
  
  
    // const makeArray = () => {
    //     const deck = []
    //     const table = QuerySelectorAll()
    // }


  
    const handleDel = (e) => {
      setCount(count - 1)
      deckOfCards.splice(e.target.marker - 1, 1)
      return
    }
  
    // const packageCard = (num, q, an, deckId=id) => {
    //   const cardDict = {'number': num, 'question': q, 'answer': an, 'deckId': deckId }
    //   return cardDict
    // }
      const toRender = deckOfCards.map((card, i) => (
                        
                                              <>
                                                  <li className={row} key={card.idx}>
                                                      <label className="label" >{card.reg}</label>
                                                      <textarea key={card.id} placeholder={card.question} value={card.question} onChange={(e) => setState(e.target.value)} className="qan"></textarea>
                                                      <textarea key={card.id} placeholder={card.answer} value={card.answer} onChange={(e) => setState(e.target.value)} className="qan"></textarea>
                                                      <button key={card.idx} className="del" onClick={(e) => handleDel(e)}>X</button>
                                                  </li>
                                              </>
                                          ))     
      const newCardsToRender = newCards.map((card, i) => (
                        
        <>
            <tr className={`row`} key={nextNumber}>
                <td className="number" ><div className="reg_num_con">{nextNumber}</div></td>
                <td className="q" ><textarea key={nextNumber} placeholder={card.question} value={state} onChange={(e) => setState(e.target.value)} className="qan"></textarea></td>
                <td className="an" ><textarea  key={nextNumber} placeholder={card.answer} value={state} onChange={(e) => setState(e.target.value)} className="qan"></textarea></td>
                <td className="del" ><button marker={1+i} onClick={(e) => handleDel(e)}>X</button></td>
            </tr>
        </>
    ))
  
      const listOCards = [...toRender, ...newCardsToRender]
      const renderThis = renderMe.map(el => el)
      useEffect(() => {
        dispatch(getDeckCards(id))
        dispatch(getMyDecks(user.id)) 
        setNextNumber(deckCards.length)  
        setDeckOfCards(listOCards)
        
      }, [id, user])
      
      useEffect(() => {
      setRenderMe(listOCards)
    }, [])
    return (
        <>
          <header className="deck_title"></header>
          <form method="POST" action="/api/cards/many" onSubmit={handleSubmit}>

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
                {toRender}  
                {newCardsToRender}
            </tbody>
            </table>
            <button className="add_row_btn" onClick={handleAddCard}>Add Row</button>
            <button className="reset" onClick={null}>Reset</button>
          </form>
        </>
        )

        }
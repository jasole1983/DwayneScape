import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import './AddCards.css'
import { getDeckCards } from "../../store/cards";
import { useEffect, useState } from "react";


export default function AddCards({ deckId }){
  // const user = useSelector(state => state.session.user)
  const decks = useSelector(state => state.decks)
  const cards = useSelector(state => state.cards)
  // const deck = decks[deckId]
  const [deckOfCards, setDeckOfCards] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    async function loadMyCards() {
      const res = await dispatch(getDeckCards(deckId))
      setDeckOfCards(res)
      return deckOfCards
    }
    loadMyCards()
  }, [dispatch])
  
  let count = 0
  


  const oneRow = (
    <tr>
      <td className="number" ><div className="reg_num_con">{count}</div></td>
      <td className="q"><textarea className="qan"></textarea></td>
      <td className="an" ><textarea className="qan"></textarea></td>
      <td className="del"><button onClick={(e) => handleDel(e)}>X</button></td>
    </tr>
  )
  const cardEls = []
  const listOCards = Object.values(cards)
  listOCards.forEach(card => {
    count++
    cardEls.push(   
      <tr>
        <td className="number" ><div className="reg_num_con">{card.deckNum}</div></td>
        <td className="q" ><textarea className="qan">{card.question}</textarea></td>
        <td className="an" ><textarea className="qan">{card.answer}</textarea></td>
        <td className="del"><button onClick={(e) => handleDel(e)}>X</button></td>
      </tr>)})

  const handleAddRow = () => {
    count++
    cardEls.push(oneRow)
    setDeckOfCards(cardEls)
    return 
  }

  const handleDel = (e) => {
    count--
    const idx = cardEls.indexOf(e)
    cardEls.pop(idx)
    setDeckOfCards(cardEls)
  }
    return (
        <>
          <header className="deck_title"></header>
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
              {cardEls}
              {oneRow}
            </tbody>
          </table>
          <button onClick={handleAddRow}></button>
        </>
    )
}
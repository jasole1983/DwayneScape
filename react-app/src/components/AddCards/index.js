import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import './AddCards.css'
import { getDeckCards } from "../../store/cards";
import { useEffect, useState } from "react";


export default function AddCards(){
  // const user = useSelector(state => state.session.user)
  // const decks = useSelector(state => state.decks)
  // const deck = decks[deckId]
  const cards = useSelector(state => state.cards)
  const { id } = useParams()
  console.log("id", id)
  const [deckOfCards, setDeckOfCards] = useState([]);
  const [cardCount, setCardCount] = useState(0)
  // const [rows, setRows] = useState([])
  const dispatch = useDispatch()

  let count = cardCount
  // let cardEls = []
  let oneRow = (
    <tr className={`row-${cardCount}`}>
      <td className="number" ><div className="reg_num_con">{count}</div></td>
      <td className="q"><textarea className="qan"></textarea></td>
      <td className="an" ><textarea className="qan"></textarea></td>
      <td className="del"><button className="del" onClick={(e) => handleDel(e)}>X</button></td>
    </tr>
  ) 
  useEffect(async () => {
    
      const res = await dispatch(getDeckCards(id))

      console.log(res)
      setDeckOfCards(...cards)

      
  }, [dispatch, id, setDeckOfCards])

    const listOCards = Object.values(cards)
  
    const handleAddRow = (e) => {
      setCardCount(cardCount + 1)
      setDeckOfCards(...deckOfCards, oneRow)
      return 
    }
  
    const handleDel = (e) => {
      setCardCount(cardCount - 1)
      deckOfCards.pop(e.target.index)
      setDeckOfCards(...deckOfCards)
      return
    }
  
    class CardIn {
      constructor(q, an, deckId){
        this.q=q
        this.an=an
        this.deckId=deckId
      }
    }

    const renderCards = () => {
      const elements = cards.map((card, i) => (
        setCardCount(cardCount + 1)
        (   
          <tr className={`row-${cardCount}`}>
            <td className="number" ><div className="reg_num_con">{cardCount}</div></td>
            <td className="q" ><textarea className="qan">{card.question}</textarea></td>
            <td className="an" ><textarea className="qan">{card.answer}</textarea></td>
            <td className="del" ><button index={i} onClick={(e) => handleDel(e)}>X</button></td>
          </tr>
         )
        )
      )
      return elements
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
               
                      
            </tbody>
          </table>
          <button className="add_row_btn" onClick={handleAddRow}>Add Row</button>
        </>
    )
}
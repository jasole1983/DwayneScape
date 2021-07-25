import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import './AddCards.css'
import { getDeckCards } from "../../store/cards";
import { useEffect, useState } from "react";
import { getMyDecks } from "../../store/decks";



export default function AddCards(){
  const user = useSelector(state => state.session.user)
  // const decks = useSelector(state => state.decks)
  // const deck = decks[deckId]
  const cards = useSelector(state => state.cards)
  const { id } = useParams()
  console.log("id", id)
  const [deckOfCards, setDeckOfCards] = useState([]);
  let [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const [state, setState] = useState('')
  const [addCard, setAddCard] = useState(false)
  const [newCards, setNewCards] = useState([])

  
  
  let oneRow = (
    <tr className={`row-${count}`} index={count} type={`row-${count}`}>
      <td className="number" ><div className="reg_num_con">{count}</div></td>
      <td className="q"><textarea className="qan"></textarea></td>
      <td className="an" ><textarea className="qan"></textarea></td>
      <td className="del"><button className="del" onClick={(e) => handleDel(e)}>X</button></td>
    </tr>
  ) 
  const initialCards = Object.values(cards)
  const listOCards = [...initialCards, ...newCards]
  useEffect(() => {
    dispatch(getDeckCards(id))
    dispatch(getMyDecks(user.id)) 
    setDeckOfCards(listOCards)
    setCount(listOCards.length)
    
  }, [setDeckOfCards, addCard,])
  


  const handleAddCard = () => {
    const myArray = []
    setCount(count + 1)
    for (let i = 0; i < count; i++){
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
                                                  <tr className={`row-${i+1}`} type={`row-${1+i}`} index={i+1}>
                                                      <td className="number" ><div className="reg_num_con">{i+1}</div></td>
                                                      <td className="q" ><textarea placeholder={card.question} value={state} onChange={(e) => setState(e.target.value)} className="qan"></textarea></td>
                                                      <td className="an" ><textarea placeholder={card.answer} value={state} onChange={(e) => setState(e.target.value)} className="qan"></textarea></td>
                                                      <td className="del" ><button marker={1+i} onClick={(e) => handleDel(e)}>X</button></td>
                                                  </tr>
                                              </>
                                          ))     
      const newCardsToRender = newCards.map((card, i) => (
                        
        <>
            <tr className={`row-${i+1}`} type={`row-${1+i}`} index={i+1}>
                <td className="number" ><div className="reg_num_con">{i+count}</div></td>
                <td className="q" ><textarea placeholder={card.question} value={state} onChange={(e) => setState(e.target.value)} className="qan"></textarea></td>
                <td className="an" ><textarea placeholder={card.answer} value={state} onChange={(e) => setState(e.target.value)} className="qan"></textarea></td>
                <td className="del" ><button marker={1+i} onClick={(e) => handleDel(e)}>X</button></td>
            </tr>
        </>
    ))
  
     
 
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
                {toRender}  
                {newCardsToRender}
            </tbody>
            </table>
            <button className="add_row_btn" onClick={handleAddCard}>Add Row</button>
            <button className="reset" onClick={null}>Reset</button>
        </>
        )

        }
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
  const tempCards = useSelector(state => state.cards)
  const { id } = useParams()
  const [deckOfCards, setDeckOfCards] = useState([]);
  const [count, setCount] = useState(0)
  const [state, setState] = useState('')
  const [newCards, setNewCards] = useState([])
  const [nextNumber, setNextNumber] = useState(0)
  const [renderMe, setRenderMe] = useState([])
  const dispatch = useDispatch()
  const deckCards = Object.values(tempCards).filter(deck => deck.id === id)
  
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
                                                  <tr className={`row-${i+1}`} key={card.id}>
                                                      <td className="number" ><div className="reg_num_con">{i+1}</div></td>
                                                      <td className="q" ><textarea key={card.id} placeholder={card.question} value={state} onChange={(e) => setState(e.target.value)} className="qan"></textarea></td>
                                                      <td className="an" ><textarea key={card.id} placeholder={card.answer} value={state} onChange={(e) => setState(e.target.value)} className="qan"></textarea></td>
                                                      <td className="del" ><button marker={1+i} onClick={(e) => handleDel(e)}>X</button></td>
                                                  </tr>
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
        
      }, [id])
      
      useEffect(() => {
      setRenderMe(listOCards)
    }, [renderMe, setRenderMe, listOCards])
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
                {renderThis}
                {/* {toRender}   */}
                {/* {newCardsToRender} */}
            </tbody>
            </table>
            <button className="add_row_btn" onClick={handleAddCard}>Add Row</button>
            <button className="reset" onClick={null}>Reset</button>
        </>
        )

        }
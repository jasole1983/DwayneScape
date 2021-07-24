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

  
  
  let oneRow = (
    <tr className={`row-${count}`} index={count} type={`row-${count}`}>
      <td className="number" ><div className="reg_num_con">{count}</div></td>
      <td className="q"><textarea className="qan"></textarea></td>
      <td className="an" ><textarea className="qan"></textarea></td>
      <td className="del"><button className="del" onClick={(e) => handleDel(e)}>X</button></td>
    </tr>
  ) 
  const listOCards = Object.values(cards)
  useEffect(() => {
    dispatch(getDeckCards(id))
    dispatch(getMyDecks(user.id)) 
    setDeckOfCards(...listOCards)
  }, [])

  
    // const makeArray = () => {
    //     const deck = []
    //     const table = QuerySelectorAll()
    // }

    const handleAddRow = (e) => {
      setCount(count + 1)
      
      return 
    }
  
    const handleDel = (e) => {
      setCount(count - 1)
      deckOfCards.pop(e.target.marker)
      return
    }
  
    const packageCard = (num, q, an, deckId=id) => {
      const cardDict = {'number': num, 'question': q, 'answer': an, 'deckId': deckId }
      return cardDict
    }
  
    
    // const grabChildValues = (rowEle) => {

    //   return
    // }
      

    // const handleSave = async () => {

    //   return
    // } 
    const toBeRendered = [];
    {setCount( count + toBeRendered.length )}
    deckOfCards.forEach((card, i) => (
        toBeRendered.push(
                            <>
                                <tr className={`row-${i+1}`} type={`row-${1+i}`} index={i+1}>
                                    <td className="number" ><div className="reg_num_con">{count}</div></td>
                                    <td className="q" ><textarea value={state} onChange={(e) => setState(e.target.value)} className="qan">{card.question}</textarea></td>
                                    <td className="an" ><textarea value={state} onChange={(e) => setState(e.target.value)} className="qan">{card.answer}</textarea></td>
                                    <td className="del" ><button marker={1+i} onClick={(e) => handleDel(e)}>X</button></td>
                                </tr>
                            </>
                        ) ))       
     
 
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
            <button className="add_row_btn" onClick={(e)=> handleAddRow(e)}>Add Row</button>
            <button className="reset" onClick={}
        </>
        )

        }
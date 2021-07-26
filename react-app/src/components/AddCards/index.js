import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import './AddCards.css'
import { createManyCards, getDeckCards } from "../../store/cards";
import { useEffect, useState } from "react";
import { getMyDecks } from "../../store/decks";



export default function AddCards(){
  const user = useSelector(state => state.session.user)
  // const decks = useSelector(state => state.decks)
  // const deck = decks[deckId]
  const { id } = useParams()
  const cards = useSelector(state => state.cards)
  console.log(cards)
  console.log("id", id, "   cards: ", cards)
  const [deckOfCards, setdeckOfCards] = useState([]);
  let [count, setCount] = useState(0)
  const dispatch = useDispatch()
  // const [state, setState] = useState('')
  // const [addCard, setAddCard] = useState(false)
  const [newCards, setNewCards] = useState([])
  const [values, setValues] = useState({})
  const [seeded, setSeeded] = useState(false) 
  
  //   let oneRow = (
//     <tr className={`row-${count}`} index={count} type={`row-${count}`}>
//       <td className="number" ><div className="reg_num_con">{count}</div></td>
//       <td className="q"><textarea className="qan"></textarea></td>
//       <td className="an" ><textarea className="qan"></textarea></td>
//       <td className="del"><button className="del" onClick={(e) => handleDel(e)}>X</button></td>
//     </tr>
//   ) 

  const initialCards = Object.values(cards)
  const listOCards = initialCards.filter(card => card.deckId == id)
  console.log("listOCards:  ", listOCards)
  useEffect(() => {
    if (id < 3){
      setSeeded(true)
      setdeckOfCards(listOCards)
    }
    if (!seeded){
      dispatch(getDeckCards(id))
      dispatch(getMyDecks(user.id)) 
      setCount(10)
    }
    
  }, [listOCards])
  


  const handleAddCard = () => {
    const myArray = []
    setCount(count + 1)
    for (let i = 0; i < count; i++){
      let x = {"question": '', "answer": '', "deckId": id}
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
      deckOfCards.splice(e.target.key - 1, 1)
      return
    }
    const handleSubmit = (e) => {
      e.target.preventDefault()
      dispatch(createManyCards(FormData))
      return
    }

    // const packageCard = (num, q, an, deckId=id) => {
    //   const cardDict = {'number': num, 'question': q, 'answer': an, 'deckId': deckId }
    //   return cardDict
    // }
      
 
    return (
      <>
        <form onSubmit={handleSubmit}>
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
              { seeded && 
              <>
                <tr className={"row"} type={`row-${1} row`} key={1}>
                    <td className="number col_1" ><div className="reg_num_con">{`Card # ${1}`}</div></td>
                    <td className="q col_2" ><textarea placeholder={deckOfCards[0].question} value={deckOfCards[0].question} className="qan"></textarea></td>
                    <td className="an col_3" ><textarea placeholder={deckOfCards[0].answer} value={deckOfCards[0].answer} className="qan"></textarea></td>
                    <td className="del col_4" ><button onClick={(e) => handleDel(e)}>X</button></td>
                    <input type="hidden" name="deckid" value={id} />
                </tr>                                              
                <tr className={"row"} type={`row-${2} row`} key={2}>
                    <td className="number col_1" ><div className="reg_num_con">{`Card # ${2}`}</div></td>
                    <td className="q col_2" ><textarea placeholder={deckOfCards[1].question} value={deckOfCards[1].question} className="qan"></textarea></td>
                    <td className="an col_3" ><textarea placeholder={deckOfCards[1].answer} value={deckOfCards[1].answer} className="qan"></textarea></td>
                    <td className="del col_4" ><button onClick={(e) => handleDel(e)}>X</button></td>
                    <input type="hidden" name="deckid" value={id} />
                </tr>                                              
                <tr className={"row"} type={`row-${3} row`} key={3}>
                    <td className="number col_1" ><div className="reg_num_con">{`Card # ${3}`}</div></td>
                    <td className="q col_2" ><textarea placeholder={deckOfCards[2].question} value={deckOfCards[2].question} className="qan"></textarea></td>
                    <td className="an col_3" ><textarea placeholder={deckOfCards[2].answer} value={deckOfCards[2].answer} className="qan"></textarea></td>
                    <td className="del col_4" ><button onClick={(e) => handleDel(e)}>X</button></td>
                    <input type="hidden" name="deckid" value={id} />
                </tr>                                              
                <tr className={"row"} type={`row-${4} row`} key={4}>
                    <td className="number col_1" ><div className="reg_num_con">{`Card # ${4}`}</div></td>
                    <td className="q col_2" ><textarea placeholder={deckOfCards[3].question} value={deckOfCards[3].question} className="qan"></textarea></td>
                    <td className="an col_3" ><textarea placeholder={deckOfCards[3].answer} value={deckOfCards[3].answer} className="qan"></textarea></td>
                    <td className="del col_4" ><button onClick={(e) => handleDel(e)}>X</button></td>
                    <input type="hidden" name="deckid" value={id} />
                </tr>                                              
                <tr className={"row"} type={`row-${5} row`} key={5}>
                    <td className="number col_1" ><div className="reg_num_con">{`Card # ${5}`}</div></td>
                    <td className="q col_2" ><textarea placeholder={deckOfCards[4].question} value={deckOfCards[4].question} className="qan"></textarea></td>
                    <td className="an col_3" ><textarea placeholder={deckOfCards[4].answer} value={deckOfCards[4].answer} className="qan"></textarea></td>
                    <td className="del col_4" ><button onClick={(e) => handleDel(e)}>X</button></td>
                    <input type="hidden" name="deckid" value={id} />
                </tr>                                              
                <tr className={"row"} type={`row-${6} row`} key={6}>
                    <td className="number col_1" ><div className="reg_num_con">{`Card # ${6}`}</div></td>
                    <td className="q col_2" ><textarea placeholder={deckOfCards[5].question} value={deckOfCards[5].question} className="qan"></textarea></td>
                    <td className="an col_3" ><textarea placeholder={deckOfCards[5].answer} value={deckOfCards[5].answer} className="qan"></textarea></td>
                    <td className="del col_4" ><button onClick={(e) => handleDel(e)}>X</button></td>
                    <input type="hidden" name="deckid" value={id} />
                </tr>                                              
                <tr className={"row"} type={`row-${7} row`} key={7}>
                    <td className="number col_1" ><div className="reg_num_con">{`Card # ${7}`}</div></td>
                    <td className="q col_2" ><textarea placeholder={deckOfCards[6].question} value={deckOfCards[6].question} className="qan"></textarea></td>
                    <td className="an col_3" ><textarea placeholder={deckOfCards[6].answer} value={deckOfCards[6].answer} className="qan"></textarea></td>
                    <td className="del col_4" ><button onClick={(e) => handleDel(e)}>X</button></td>
                    <input type="hidden" name="deckid" value={id} />
                </tr>                                              
                <tr className={"row"} type={`row-${8} row`} key={8}>
                    <td className="number col_1" ><div className="reg_num_con">{`Card # ${8}`}</div></td>
                    <td className="q col_2" ><textarea placeholder={deckOfCards[7].question} value={deckOfCards[7].question} className="qan"></textarea></td>
                    <td className="an col_3" ><textarea placeholder={deckOfCards[7].answer} value={deckOfCards[7].answer} className="qan"></textarea></td>
                    <td className="del col_4" ><button onClick={(e) => handleDel(e)}>X</button></td>
                    <input type="hidden" name="deckid" value={id} />
                </tr>                                              
                <tr className={"row"} type={`row-${9} row`} key={9}>
                    <td className="number col_1" ><div className="reg_num_con">{`Card # ${9}`}</div></td>
                    <td className="q col_2" ><textarea placeholder={deckOfCards[8].question} value={deckOfCards[8].question} className="qan"></textarea></td>
                    <td className="an col_3" ><textarea placeholder={deckOfCards[8].answer} value={deckOfCards[8].answer} className="qan"></textarea></td>
                    <td className="del col_4" ><button onClick={(e) => handleDel(e)}>X</button></td>
                    <input type="hidden" name="deckid" value={id} />
                </tr>                                              
                <tr className={"row"} type={`row-${10} row`} key={10}>
                    <td className="number col_1" ><div className="reg_num_con">{`Card # ${10}`}</div></td>
                    <td className="q col_2" ><textarea placeholder={deckOfCards[9].question} value={deckOfCards[9].question} className="qan"></textarea></td>
                    <td className="an col_3" ><textarea placeholder={deckOfCards[9].answer} value={deckOfCards[9].answer} className="qan"></textarea></td>
                    <td className="del col_4" ><button onClick={(e) => handleDel(e)}>X</button></td>
                    <input type="hidden" name="deckid" value={id} />
                </tr>
              </>
              }                                              
              {newCards.map((card, i) => (
                <tr className={"row"} type={`row-${seeded ? 11 : 1+i} row`} key={i+seeded ? 11 : 1}>
                    <td className="number col_1" ><div key={i+seeded ? 11 : 1} className="reg_num_con">{`Card # ${i+seeded ? 11 : 1}`}</div></td>
                    <td className="q col_2" ><textarea key={i+seeded ? 11 : 1} placeholder={card.question} value={card.question} className="qan"></textarea></td>
                    <td className="an col_3" ><textarea key={i+seeded ? 11 : 1} placeholder={card.answer} value={card.answer} className="qan"></textarea></td>
                    <td className="del col_4" ><button key={i+seeded ? 11 : 1} onClick={(e) => handleDel(e)}>X</button></td>
                    <input type="hidden" name="deckid" value={card.deckId} />
                    <button type="submit" className="ind_submit_btn">Submit Card</button>
                </tr>
              ))}
           
            </tbody>
            </table>
            <button className="add_row_btn" onClick={handleAddCard}>Add Row</button>
            <button className="reset" onClick={null}>Reset</button>
            <button className="save_deck" type="submit">Save Deck</button>
          </form>
        </>
   )

 }
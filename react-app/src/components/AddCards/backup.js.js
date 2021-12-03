import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import './AddCards.css'
import { createManyCards, getDeckCards } from "../../store/cards";
import { useEffect, useState } from "react";
import { getMyDecks } from "../../store/decks";
import { NewCard } from "./NewCard";



export default function AddCards(){
  const user = useSelector(state => state.session.user)
  const decks = useSelector(state => state.decks)
  const { id } = useParams()
  const deck = decks[id]
  const [ myDeckStatus, setMyDeckStatus ] = useState('NoWayJose')
  const [ myDeck ] = decks.filter(deck => deck.id === id)
  const cards = useSelector(state => state.cards)
  const [deckOfCards, setdeckOfCards] = useState([]);
  let [count, setCount] = useState(1)
  const dispatch = useDispatch()
 
  const [newCards, setNewCards] = useState([])
  const [values, setValues] = useState({})
  const [seeded, setSeeded] = useState(false) 
  


  const initialCards = Object.values(cards)
  const listOCards = initialCards.filter(card => card.deckId == id)
  console.log("listOCards:  ", listOCards)
  useEffect(() => {
    if (myDeck.title in ['Wrestling 101', 'Family and School', 'Movie Facts']){
      setMyDeckStatus("OpenSesame")
    }
    else {
      setMyDeckStatus("LockItDown")
    }

    if (id < 3 && myDeckStatus === "OpenSesame"){
      setSeeded(true)
      setdeckOfCards(listOCards)
    }
    if (!seeded){
      dispatch(getDeckCards(id))
      dispatch(getMyDecks(user.id)) 
      setCount(10)
    }
    
  }, [listOCards])
  
  useEffect(() => {

  })

  const handleAddCard = () => {
    
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
              { seeded && 
            
              }                                              
              {newCards.map((card, i) => (
                <tr className={"row"} type={`row-${seeded ? 11 : 1} row`} key={i+seeded ? 11 : 1}>
                    <td className="number col_1" ><div className="reg_num_con">{`Card # ${i+seeded ? 11 : 1}`}</div></td>
                    <td className="q col_2" >
                      <textarea  
                        placeholder="The real question is, 'Do ya smellelelelel what the Rock is cookin?" 
                        value={card.question}
                        className="qan" 
                        onChange={(e) => setValues({i:{'question': e.target.value }})}>                          
                      </textarea>
                      </td>
                    <td className="an col_3" >
                      <textarea 
                      placeholder="What was the answer? IT DOESN'T MATTER what the answer is!!" 
                      value={card.answer} 
                      className="qan"
                      onChange={(e) => setValues({i: {'answer': e.target.value }})}>
                        </textarea>
                    </td>
                    <td className="del col_4" >
                      <button  onClick={(e) => handleDel(e)}>X</button>
                    {setValues({i: { "deckId": id, "index": i}})}
                    </td>
                    <input type="hidden" name="deckid" value={id} />
                    
                </tr>
              ))}
           
            </tbody>
          </table>
          <div className="btn_cont_cards">
            <button className="add_row_btn" onClick={handleAddCard}>Add Row</button>
            <button className="reset" onClick={null}>Reset</button>
            <button className="save_deck" type="submit">Save Deck</button>
          </div>
        </form>
      </>
   )

 }
// import { useDispatch, useSelector } from "react-redux"
// import { useParams } from "react-router-dom"
// import './AddCards.css'
// import { getDeckCards } from "../../store/cards";
// import { useEffect, useState } from "react";
// // import { getSingleDeck } from "../../store/decks";


// export default function AddCards(){
//   // const user = useSelector(state => state.session.user)
//   // const decks = useSelector(state => state.decks)
//   // const deck = decks[deckId]
//   const cards = useSelector(state => state.cards)
//   const { id } = useParams()
//   console.log("id", id)
//   const [deckOfCards, setDeckOfCards] = useState([]);
//   const [cardCount, setCardCount] = useState(0)
//   // const [rows, setRows] = useState([])
//   const dispatch = useDispatch()

//   let count = cardCount
//   // let cardEls = []
//   let oneRow = (
//     <tr className={`row-${cardCount}`}>
//       <td className="number" ><div className="reg_num_con">{count}</div></td>
//       <td className="q"><textarea className="qan"></textarea></td>
//       <td className="an" ><textarea className="qan"></textarea></td>
//       <td className="del"><button className="del" onClick={(e) => handleDel(e)}>X</button></td>
//     </tr>
//   ) 
//   useEffect(() => {
//     async function fetchData(){
//       const res = await dispatch(getDeckCards(id)) 
//     }      

//       setDeckOfCards(...listOCards)

      
//   }, [dispatch, id, setDeckOfCards])

//     const listOCards = Object.values(cards)
  
//     // const handleAddRow = (e) => {
//     //   setCardCount(cardCount + 1)
      
//     //   return 
//     // }
  
//     // const handleDel = (e) => {
//     //   setCardCount(cardCount - 1)
//     //   deckOfCards.pop(e.target.index)
//     //   setDeckOfCards(...deckOfCards)
//     //   return
//     // }
  
//     // const packageCard = (num, q, an, deckId=id) => {
//     //   const cardDict = {'number': num, 'question': q, 'answer': an, 'deckId': deckId }
//     //   return cardDict
//     // }
    
//     // const grabChildValues = (rowEle) => {

//     //   return
//     // }
      

//     // const handleSave = async () => {

//     //   return
//     // } 
    
      
    

 
 
//     return (
//         <>
//           <header className="deck_title"></header>
//           <table className="cardsTable">
//             <thead>
//               <tr>
//                 <th className="number">#</th>
//                 <th className="q">Question</th>
//                 <th className="an">Answer</th>
//                 <th className="del"></th>
//               </tr>
//             </thead>
//             <tbody>
//                   {listOCards.map((card, i) => (
//             setCardCount(cardCount + 1)
            
            
//               <tr className={`row-${cardCount}`}>
//                 <td className="number" ><div className="reg_num_con">{cardCount}</div></td>
//                 <td className="q" ><textarea className="qan">{card.question}</textarea></td>
//                 <td className="an" ><textarea className="qan">{card.answer}</textarea></td>
//                 <td className="del" ><button index={i} onClick={(e) => handleDel(e)}>X</button></td>
//               </tr>
//             ))}       
//             </tbody>
//           </table>
//           <button className="add_row_btn" onClick={handleAddRow}>Add Row</button>
//         </>
//     )
// }
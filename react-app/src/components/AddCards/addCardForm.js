// import { Form, Field } from 'react-final-form'
// import arrayMutators from 'final-form-arrays'
// import { FieldArray } from 'react-final-form-arrays'
// import { Redirect } from 'react-router'




// export function thisSillyFrom(){
//  (            
//         <>    
//             <Form
//             onSubmit={onSubmit}
//             mutators={{
//                 ...arrayMutators
//             }}
//             render={({
//                 handleSubmit,
//                 form: {
//                 mutators: { push }
//                 },
//                 pristine,
//                 form,
//                 submitting,
//                 values
//             }) => {
//                 return (
//                 <form onSubmit={handleSubmit}>
//                     <FieldArray name="cards">
//                     {({ fields }) =>
//                         fields.concat(thisDeck)
//                         fields.map((card, index) => (
//                         <tr key={index + 1}>
//                             <td className="first column">Card #{index + 1}</td>
//                             <td className="second column">
//                                 <Field
//                                 name={`card${index + 1}.question`}
//                                 component="input"
//                                 placeholder={card.question ? card.question : "Write Question Here"}
//                                 />
//                             </td>
//                             <td className="third column">
//                                 <Field
//                                 name={`card${index + 1}.answer`}
//                                 component="input"
//                                 placeholder={card.answer ? card.answer : "Write Answer Here"}
//                                 />
//                             </td>
//                             <td className="fourth column">
//                                 <span
//                                 onClick={() => fields.remove(index + 1)}
//                                 style={{ cursor: 'pointer' }}
//                                 >
//                                 </span>
//                             </td>
//                         </tr>
//                         ))
//                     }
//                             <div className="buttons">
//                                 <button
//                                     type="button"
//                                     className="add_card_btn"
//                                     onClick={() => push('cards', undefined)}
//                                 >
//                                     Add Card
//                                 </button>
//                             </div>
//                     </FieldArray>

//                     <div className="functional_buttons">
//                         <button type="submit" disabled={submitting || pristine}>
//                             Save Deck
//                         </button>
//                         <button
//                             type="button"
//                             onClick={<Redirect to={`/add-cards/${id}`}}
//                             disabled={submitting || pristine}
//                         >
//                             Reset
//                         </button>
//                     </div>
//                     <pre>{JSON.stringify(values, 0, 2)}</pre>
//                 </form>
//                 )
//             }}
//             />
//         </> 
//     )
// }

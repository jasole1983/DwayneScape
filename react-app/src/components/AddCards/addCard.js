import React from 'react'
import PropTypes from 'prop-types'

function AddCard({ card, index, handleDel, setTempCards, tempCards }) {

    

    return (      
        <tr className={"row"} type={`row-${index} row`} index={index} key={index} >
            <td className="number col_1" >
                <div className="reg_num_con">{`Card # ${index}`}</div>
            </td>
            <td className="q col_2" >
                <textarea 
                index={index}
                placeholder={card.qph || ""} 
                value={card.question} 
                onChange={(e) => setTempCards(tempCards[e.target.index -1]['question'] = e.target.value)}
                className="qan"
                >
                </textarea>
            </td>
            <td className="an col_3" >
                <textarea 
                index={index}
                placeholder={card.aph || ""} 
                value={card.answer} 
                onChange={(e) => setTempCards(tempCards[e.target.index -1]['answer'] = e.target.value)}
                className="qan"
                >
                </textarea>
            </td>
            <td className="del col_4" >
                <button onClick={(e) => handleDel(e)}>X</button>
            </td>
            <input type="hidden" name="deckid" value={card.deckId} />
            <input type="hidden" name="id" value={card.id ? card.id:`${card.deckId}.${index}`} />
        </tr>           
    )
}

AddCard.propTypes = {
    card: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleDel: PropTypes.func.isRequired,
    qChange: PropTypes.func.isRequired,
    aChange: PropTypes.func.isRequired,
}

export default AddCard
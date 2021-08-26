import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function AddCard({ card, index, handleDel, tempCards, setTempCards }) {
    
    const [values, setValues] = useState({})
    
    useEffect(() => {
        setValues({...card})
        const idx = index - 1
        
        setTempCards( tempCards.slice(0, idx).concat([values]).concat(tempCards.slice(index)))
    }, [])

    return (      
        <>
            <td className="number col_1" >
                <div className="reg_num_con">{`Card # ${index}`}</div>
            </td>
            <td className="q col_2" >
                <textarea 
                index={index} 
                defaultValue={values.question} 
                onChange={(e) => setValues({question: e.target.value})}
                className="qan"
                >
                </textarea>
            </td>
            <td className="an col_3" >
                <textarea 
                index={index} 
                defaultValue={values.answer} 
                onChange={(e) => setValues({answer: e.target.value})}
                className="qan"
                >
                </textarea>
            </td>
            <td className="del col_4" >
                <button onClick={() => handleDel(index)}>X</button>
            </td>
        </>        
    )
}

AddCard.propTypes = {
    card: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleDel: PropTypes.func.isRequired,
    tempCards: PropTypes.array.isRequired,
    setTempCards: PropTypes.func.isRequired,
}

export default AddCard
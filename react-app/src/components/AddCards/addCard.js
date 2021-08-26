import React from 'react'
import PropTypes from 'prop-types'

function AddCard({ card, index, handleDel, values, setValues }) {
    const { question, answer, deckId, qph, aph } = card
    const id = `${deckId}.${index}`
    useEffect(() => {
        setValues({})


        return () => {
            cleanup
        }
    }, [input])

    return (      
        <>
            <td className="number col_1" >
                <div className="reg_num_con">{`Card # ${index}`}</div>
            </td>
            <td className="q col_2" >
                <textarea 
                index={index}
                placeholder={qph || ""} 
                value={question} 
                onChange={}
                className="qan"
                >
                </textarea>
            </td>
            <td className="an col_3" >
                <textarea 
                index={index}
                placeholder={aph || ""} 
                value={answer} 
                onChange={}
                className="qan"
                >
                </textarea>
            </td>
            <td className="del col_4" >
                <button onClick={(e) => handleDel(e)}>X</button>
            </td>
            <input type="hidden" name="deckid" value={value.deckId} />
            <input type="hidden" name="id" value={value.id} />
        </>        
    )
}

AddCard.propTypes = {
    card: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleDel: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired,
    setValues: PropTypes.func.isRequired,
}

export default AddCard
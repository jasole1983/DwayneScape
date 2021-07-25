import { useState } from "react"

export const CardForm = ({ card }) => {
    const [state, setState] = useState('')
    const handleDel = (e) => {
        alert("Do you know what you're doing Jabroni?")

    }
    const [cardx] = Object.keys(card)
    return (
        <li className="row" key={cardx}>
            <label className="label" >Card Registry # {cardx}</label>
            <textarea key={cardx} placeholder={card.cardx.question} value={card.cardx.question} onChange={(e) => setState(e.target.value)} className="qan"></textarea>
            <textarea key={cardx} placeholder={card.cardx.answer} value={card.cardx.answer} onChange={(e) => setState(e.target.value)} className="qan"></textarea>
            <button key={cardx.reg} className="del" onClick={(e) => handleDel(e)}>X</button>
        </li>
    )
}


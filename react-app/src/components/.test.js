import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import './AddCards.css'
import { render } from "react-dom";
// import { getDeckCards } from "../../store/cards";
import { useEffect, useState } from "react";
// import { getMyDecks } from "../../store/decks";
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'

const First = () => (
    <Form
        onSubmit={onSubmit}
        mutators={{ 
            ...arrayMutators
        }}
        render={({
            handleSubmit,
            form: {
                mutators: { push, pop }
            },
            pristine,
            form,
            submitting,
            values
        }) => {
            return (
                <form onSubmit={handleSubmit>
                    <tr className="row">
                        <td className="indexNumber"
                    </tr>}
            )
        }
    }
)

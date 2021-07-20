
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './CreateDeck.css'



function CreateDeckForm({setShowModal}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const makeDeck = useSelector(state => state.createDeck)
    const userId = sessionUser.id
    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [tags, setTags] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            userId,
            title,
            category,
            tags
        }

        const newDeck = await dispatch(makeDeck, payload);
        if (errors in newDeck.errors){
           setErrors(newDeck.errors)
        }
        setShowModal(false)
    }

    return (
        // form will need onSubmit={handleSubmit}
        <form className='' method="'POST'" action="/api/decks/create">
            <h1 className='' >Create Your Deck</h1>
            <div>
                <label className=''>Title</label>
                <input
                    type='text'
                    className=''
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label className=''>Category</label>
                <select
                    type='text'
                    className=''
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value=''>--select category--</option>
                    <option value='EarlyLife'>Early Life</option>
                    <option value='Movies'>Movies</option>
                    <option value='TV'>TV</option>
                    <option value='Wrestling'>Wrestling</option>
                    <option value='Trivia'>Trivia</option>
                </select>
            </div>
            <div>
                <label className=''>Tags</label>
                <input
                    type='text'
                    className=''
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    required
                />
            </div>
            <button className='' onSubmit={handleSubmit} type="submit">Submit Deck</button>
        </form>
      );
}

export default CreateDeckForm;

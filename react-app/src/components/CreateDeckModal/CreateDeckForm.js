import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'

import './CreateDeck.css'

// import { addDeck } from "../../store/decks"; <-- not created yet

function CreateDeckForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    // const ownerId = sessionUser.id

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [tags, setTags] = useState('')
    const [errors, setErrors] = useState([]);

    const history = useHistory();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const payload = {
    //         ownerId,
    //         title,
    //         category,
    //         tags
    //     }

    //     const newDeck = await dispatch(addDeck(payload));

    //     history.push()
    // }

    return (
        // form will need onSubmit={handleSubmit}
        <form className=''>
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
            <button className='' type="submit">Submit Deck</button>
        </form>
      );
}

export default CreateDeckForm;

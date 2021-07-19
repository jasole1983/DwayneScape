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

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [tags, setTags] = useState('')
    const [errors, setErrors] = useState([]);

    const history = useHistory();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const payload = {
    //         ownerId,
    //         name,
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
                <label className=''>Name</label>
                <input
                    type='text'
                    className=''
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                />
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

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
        <div className="container-deck">
        <div className="header-deck" >Create Your Deck</div>
        <div className="content-deck"></div>
        <div className="form-deck">
        <form onSubmit={CreateDeckForm}>
            {/* <div className="error">
            {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
            ))}
            </div> */}
            <div>
                <div className="form-group-deck">
                <label className='label-deck' htmlFor="name">Name</label>
                <input
                    type='text'
                    className='input-deck'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                </div>
            </div>
            <div>
                <div className="form-group-deck">
                <label className='label-deck'>Category</label>
                <select
                    type='text'
                    className='input-deck'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />
                </div>
            </div>
            <div>
                <div className="form-group-deck">
                <label className='label-deck'>Tags</label>
                <input
                    type='text'
                    className='input-deck'
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    required
                />
                </div>
            </div>
            <div className="footer-deck">
            <button className='btn-deck' type="submit">
                Submit Decks
            </button>
            </div>
        </form>
        </div>
        </div>
      );
}

export default CreateDeckForm;

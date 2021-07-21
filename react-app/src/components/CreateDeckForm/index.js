
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './CreateDeck.css'
import { createDeck } from "../../store/decks"


function CreateDeckForm({setShowModal}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id
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

        const newDeck = await dispatch(createDeck(payload));

        setShowModal(false)
        return newDeck
    }

    return (
        <form  onSubmit={handleSubmit} className='' >
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
                    <option value='earlylife'>Early Life</option>
                    <option value='movies'>Movies</option>
                    <option value='tv'>TV</option>
                    <option value='wrestling'>Wrestling</option>
                    <option value='trivia'>Trivia</option>
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

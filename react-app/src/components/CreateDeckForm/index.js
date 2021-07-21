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
            tags,
        }

        const newDeck = await dispatch(createDeck(payload));

        setShowModal(false)
        return newDeck
    }

    return (

        // form will need onSubmit={handleSubmit}
        <div className="container-deck">
        <div className="header-deck" >Create Your Deck</div>
        <div className="content-deck"></div>
        <div className="form-deck">
          <form onSubmit={handleSubmit}>
              {/* <div className="error">
              {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
              ))}
              </div> */}
              <div>
                  <div className="form-group-deck">
                  <label className='label-deck' htmlFor="name">Title</label>
                  <input
                      type='text'
                      className='input-deck'
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
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
                  >
                      <option value=''>--select category--</option>
                      <option value='EarlyLife'>Early Life</option>
                      <option value='Movies'>Movies</option>
                      <option value='TV'>TV</option>
                      <option value='Wrestling'>Wrestling</option>
                      <option value='Trivia'>Trivia</option>
                  </select>
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
                  Submit Deck
              </button>
              </div>
            </form>
          </div>
      </div>

      );
}

export default CreateDeckForm;

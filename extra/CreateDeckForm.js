import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import './CreateDeck.css'



function CreateDeckForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const makeDeck = useSelector(state => state.createDeck)
    const userId = sessionUser.id
    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [tags, setTags] = useState('')


    const history = useHistory();

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
        history.push()
    }

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
                  <label className='label-deck' htmlFor="name">Title</label>
                  <input
                      type='text'
                      className='input-deck'
                      value={title}
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
            </div>
          </form>
        </div>
      </div>
      );
}

export default CreateDeckForm;

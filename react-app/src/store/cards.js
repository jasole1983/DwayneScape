const LOAD = 'cards/LOAD'
const ADD_ONE = 'cards/ADD_ONE'
const REMOVE_ONE = 'cards/REMOVE_ONE'
// const ADD_MANY = 'cards/ADD_MANY'

// ACTION CREATORS
// load cards
const load = (cards) => ({
    type: LOAD,
    cards
})

// create/edit cards
const add_one = (card) => ({
    type: ADD_ONE,
    card
})

// delete cards
const remove_one = (card) => ({
    type: REMOVE_ONE,
    card
})

// const add_many = (cards)  => ({
//     type: ADD_MANY,
//     cards
// })

// THUNKS
// might be redundant (RE: getDeck() in decks.js store)

export const getCards = () => async (dispatch) => {
  const res = await fetch('/api/cards/all')

  if (res.ok) {
    const cards = await res.json()
    dispatch(load(cards))
    return cards
  }
}


export const getDeckCards = (deckId) => async (dispatch) => {
    const res = await fetch(`/api/cards/deck/${deckId}`)

    if (res.ok) {
        const cards = await res.json()
        dispatch(load(cards))
        return cards
    }
}

// get a specific, single card
export const getCard = (cardId) => async (dispatch) => {
    const res = await fetch(`/api/cards/${cardId}`)

    if (res.ok) {
      const card = await res.json()
      dispatch(load(card))
      return card
    }
}

// delete a specific, single card
export const deleteCard = (cardId) => async (dispatch) => {
    const res = await fetch(`/api/cards/${cardId}`, {method: 'DELETE'})

    if (res.ok) {
      const card = await res.json()
      dispatch(remove_one(card))
      return card
    }
}

//edit a specific, single card
export const editCard = (card) => async (dispatch) => {
    const res = await fetch(`/api/cards/${card.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(card)
    })

    if (res.ok) {
      const newCard = await res.json()
      dispatch(load(newCard))
      return newCard
    }
}

// create a single card
export const createCard = (card, deckId) => async (dispatch) => {
  const res = await fetch(`/api/cards/deck/create/${deckId}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(card)
  })

    if (res.ok){
        const newCard = res.json()
        dispatch(add_one(newCard))
        return newCard
      }
}

export const createManyCards = (cards) => async (dispatch) => {
  const res = await fetch(`/api/cards/deck/many/${cards[0].deckId}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(cards),
  })

  if (res.ok){
    const newCards = res.json()
    dispatch(load(newCards))
    return newCards
  }
}

const initialState = {}

const cardsReducer = (state = initialState, action) =>{
  switch (action.type) {
    case LOAD:
      const allCards = {...state}
      Object.values(action.cards.cards).forEach(card => {allCards[card.id] = card})
      return allCards
      
    // case ADD_MANY:
    //   const deckOCards = {}
    //   Object.values(action.cards.cards).forEach(card => {deckOCards[card.id] = card})
      
    case ADD_ONE:
      // creates one new card
      if (!state[action.card.id]) {
        const newState = {
            ...state,
            [action.card.id]: action.card
        }
        return newState
    }
    // updates one existing card
    return {
        ...state,
        [action.card.id]: {
            // fills current card with existing info
            ...state[action.card.id],
            // overwrites existing info with newly provided info
            ...action.card
        }
    }

    // deletes one card
    case REMOVE_ONE:
            const newState = Object.assign({}, state)
            delete newState[action.card.id]
            return {
                ...newState
            }

    default:
      return state;
  }
}

export default cardsReducer;

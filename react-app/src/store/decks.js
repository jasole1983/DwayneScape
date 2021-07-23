// hit the backend routes for data!

// import { bindActionCreators } from "redux";

const LOAD = 'decks/LOAD'
const ADD_ONE = 'decks/ADD_ONE'
const REMOVE_ONE = 'decks/REMOVE_ONE';
const LOAD_ALL = 'decks/LOAD_ALL';

//! MOVED TO cards.js STORE
// const ADD_CARD = 'cards/ADD_CARD'
// const REMOVE_CARD = 'cards/REMOVE_CARD'
// const LOAD_CARD = 'cards/LOAD_CARDS'
// const UPDATE_CARD = 'cards/UPDATE_CARD'

// const load_card = (card, deckId) => ({
//     type: LOAD_CARD,
//     card,
//     deckId
// })

// const add_card = (card) => ({
//     type: ADD_CARD,
//     card
// })

// const remove_card = (card) => ({
//     type: REMOVE_CARD,
//     card
// })

// const update_card = (card) => ({
//     type: UPDATE_CARD,
//     card
// })

const load = (deck) => ({
    type: LOAD,
    deck
})

const add_one = (deck) => ({
    type: ADD_ONE,
    deck
})

const remove_one = (deck) => ({
    type: REMOVE_ONE,
    deck
})

const loadAll = (decks) => ({
    type: LOAD_ALL,
    decks
})

// *** send a fetch
// *** check the response
// *** parse the response
// *** dispatch an action

// get all decks
export const getDecks = () => async (dispatch) => {
    const res = await fetch('/api/decks/', {
        headers: { 'Content-Type': 'application/json' }
    });

    // console.log('**DECKS**', res) //!
    if (res.ok) {
        const decks = await res.json()
        dispatch(loadAll(decks))
    }
}

//get one deck by ID
export const getSingleDeck = (id) => async (dispatch) => {
    const res = await fetch(`/api/decks/${id}`)

    if (res.ok) {
        const deck = res.json()
        dispatch(load(deck))
        return deck
    }
}

// get all decks for a specific user
export const getMyDecks = (id) => async (dispatch) => {
    const res = await fetch(`/api/decks/users/${id}`, {
        headers: { 'Content-Type': 'application/json' }
    });

    console.log('**DECKS**', res) //!
    if (res.ok) {
        const decks = await res.json()
        console.log(decks)
        dispatch(loadAll(decks))
        return decks
    }
}

//! MOVED TO cards.js STORE
// export const getCards = (deckId) => async (dispatch) => {
//     const res = await fetch(`/api/cards/deck/${deckId}`)

//     if (res.ok) {
//         const deck = await res.json()
//         dispatch(load_card(deck))
//     }
// }

//! moved to cards.js store
// export const getCard = (cardId) => async (dispatch) => {
//     const res = await fetch(`/api/cards/${cardId}`)

//     if (res.ok) {
//       const card = await res.json()
//       dispatch(load_card(card))
//     }
// }

//! MOVED TO cards.js STORE
// export const deleteCard = (cardId) => async (dispatch) => {
//     const res = await fetch(`/api/cards/${cardId}`, {method: 'DELETE'})

//     if (res.ok) {
//       const card = await res.json()
//       dispatch(remove_card(card))
//     }
// }

//! MOVED TO cards.js STORE
// export const editCard = (card) => async (dispatch) => {
//     const res = await fetch(`/api/cards/${card.id}`, {
//       method: 'PUT',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify(card)
//     })

//     if (res.ok) {
//       const newCard = await res.json()
//       dispatch(load_card(newCard))
//     }
// }

// create one new deck
export const createDeck = (deckData) => async (dispatch) => {
    console.log("before response")
    const res = await fetch('/api/decks/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(deckData)
    })
    console.log("after response")
    if (res.ok) {
        const newDeck = await res.json()
        dispatch(add_one(newDeck))
        return newDeck
    }
}

export const updateDeck = (deckData) => async (dispatch) => {
    const res = await fetch('/api')
}

//! MOVED TO cards.js STORE
// export const createCard = (card) => async (dispatch) => {
//   const res = await fetch(`/api/cards/deck/create/${card.deckId}`, {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify(card)
//   })
// }

export const deleteDeck = (id) => async (dispatch) => {
    const res = await fetch(`/api/decks/${id}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        // console.log('***RES***', res)
        const deck = await res.json();
        // console.log('***DECK***', deck)
        dispatch(remove_one(deck))
    }
}

const initialState = {}

const decksReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                ...action.deck
            }

        case LOAD_ALL:
            console.log('**DECKS IN REDUCER**', action.decks.decks)
            // const listODecks = [...action.decks].map()
            // const newState = {}
            // for (let deck of listODecks) 
            //     {newState[deck.id] = deck}
            const newState = {}
            action.decks.decks.forEach(deck => {
                newState[deck.id] = deck
            })
            return {
                ...state,
                ...newState,
            }

        case ADD_ONE:
            if (!state[action.deck.id]) {
                const newState = {
                    ...state,
                    [action.deck.id]: action.deck
                }
                return newState
            }
            // updates existing deck
            return {
                ...state,
                [action.deck.id]: {
                    // fills current deck with existing info
                    ...state[action.deck.id],
                    // overwrites existing info with newly provided info
                    ...action.deck
                }
            }

        case REMOVE_ONE:
            const newState2 = Object.assign({}, state)
            delete newState2[action.deck.id]
            return {
                ...newState2
            }

        default:
            return state;
    }
}

export default decksReducer;

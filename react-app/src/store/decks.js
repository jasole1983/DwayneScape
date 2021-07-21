// hit the backend routes for data!

const LOAD = 'decks/LOAD'
const ADD_ONE = 'decks/ADD_ONE'
const REMOVE_ONE = 'decks/REMOVE_ONE';
const ADD_CARD = 'cards/ADD_CARD'
const REMOVE_CARD = 'cards/REMOVE_CARD'
const LOAD_CARDS = 'cards/LOAD_CARDS'
const UPDATE_CARD = 'cards/UPDATE_CARD'

const load_cards = (cards, deckId) => ({
    type: LOAD_CARDS,
    cards,
    deckId
})

const add_card = (card) => ({
    type: ADD_CARD,
    card
})

const remove_card = (card) => ({
    type: REMOVE_CARD,
    card
})

const update_card = (card) => ({
    type: UPDATE_CARD,
    card
})

const load = (decks) => ({
    type: LOAD,
    decks
})

const add_one = (deck) => ({
    type: ADD_ONE,
    deck
})

const remove_one = (deck) => ({
    type: REMOVE_ONE,
    deck
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

    console.log('**DECKS**', res) //!
    if (res.ok) {
        const decks = await res.json()
        dispatch(load(decks))
    }
}

export const getCards = (deckId) => async (dispatch) => {
    const res = await fetch(`/api/cards/deck/${deckId}`)

    if (res.ok) {
        const deck = await res.json()
        dispatch(load_cards(deck))
    }
}

export const 
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
            console.log('**DECKS**', action.decks)
            const allDecks = {}
            Object.values(action.decks).forEach(deck => {
                allDecks[deck.id] = deck
            })

            return {
                ...allDecks,
                ...state
            }

        case ADD_ONE:
            if (!state[action.deck.id]) {
                const newState = {
                    ...state,
                    [action.deck.id]: action.deck
                }
                return newState
            }
            return { // ...redundant ?
                ...state,
                [action.deck.id]: action.deck
            }

        case REMOVE_ONE:
            const newState = Object.assign({}, state)
            delete newState[action.deck.id]
            return {
                ...newState
            }

        default:
            return state;
    }
}

export default decksReducer;

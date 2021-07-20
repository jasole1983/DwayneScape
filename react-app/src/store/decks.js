// hit the backend routes for data!

const LOAD = 'decks/LOAD'
const ADD_ONE = 'decks/ADD_ONE'
const REMOVE_ONE = 'decks/REMOVE_ONE';


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

// create one new deck
const createDeck = (deckData) => async (dispatch) => {
    const res = await fetch('/api/decks/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(deckData)
    })
    if (res.ok) {
        const newDeck = await res.json()
        dispatch(add_one(newDeck))
        return newDeck
    }
}

const deleteDeck = (id) => async (dispatch) => {
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
            action.decks.forEach(deck => {
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

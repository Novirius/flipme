import {RECEIVE_ALL_DECKS, RECEIVE_DECK, REMOVE_DECK} from '../actions/deck_actions'
import {RECEIVE_CURRENT_USER} from '../actions/session_actions'

const decksReducer = (state={}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_ALL_DECKS:
            // newState = Object.assign({}, state, action.decks)
            return action.decks || {}
        case RECEIVE_DECK:
            newState[action.deck.id] = action.deck
        case REMOVE_DECK:
            delete newState[action.deckId]
            return newState
        case RECEIVE_CURRENT_USER:
            return {}
        default:
            return state;
    }
}

export default decksReducer;
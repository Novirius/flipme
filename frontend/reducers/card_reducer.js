import {RECEIVE_ALL_CARDS, RECEIVE_CARD, REMOVE_CARD } from '../actions/card_actions'

const cardsReducer = (state={}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_ALL_CARDS:
            newState = Object.assign({}, state, action.cards)
            return newState;
        case RECEIVE_CARD:
            newState[action.card.id] = action.card
        case REMOVE_CARD:
            delete newState[action.cardId]
            return newState
        default:
            return state;
    }
}

export default cardsReducer;
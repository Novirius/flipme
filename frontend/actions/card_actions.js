import * as APIUtil from '../util/cards_api_util';

export const RECEIVE_ALL_CARDS = 'RECEIVE_ALL_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const RECEIVE_CARD_ERRORS = 'RECEIVE_CARD_ERRORS';
export const CLEAR_CARDS = 'CLEAR_CARDS'


//Sync Actions
export const receiveCards = cards => ({
    type: RECEIVE_ALL_CARDS,
    cards: cards
})

export const receiveCard = card => ({
    type: RECEIVE_CARD,
    card: card
})

export const removeCard = cardId => ({
    type: REMOVE_CARD,
    cardId: cardId
})

export const cardErrors = errors => ({
    type: RECEIVE_CARD_ERRORS,
    errors: errors
})

export const clearCards = () => ({
    type: CLEAR_CARDS
})

//Async Actions
export const fetchCards = (deckId) => dispatch => (
    APIUtil.fetchCards(deckId)
    .then(
        cards => dispatch(receiveCards(cards)),
        errors => dispatch(cardErrors(errors))
    )
);

export const fetchCard = (cardId) => dispatch => (
    APIUtil.fetchCard(cardId)
    .then(
        card => dispatch(receiveCard(card)),
        errors => dispatch(cardErrors(errors))
    )
);

export const createCard = (deckId, card) => dispatch => (
    APIUtil.createCard(deckId, card)
    .then(
        card => dispatch(receiveCard(card)),
        errors => dispatch(cardErrors(errors.responseJSON)) 
    )
)

export const updateCard = (card) => dispatch => (
    APIUtil.updateCard(card)
    .then(
        card => dispatch(receiveCard(card)),
        errors => dispatch(cardErrors(errors.responseJSON))
    )
)

export const deleteCard = (cardId) => dispatch => (
    APIUtil.deleteCard(cardId)
    .then(
        () => dispatch(removeCard(cardId)),
        errors => dispatch(cardErrors(errors))
    )
)


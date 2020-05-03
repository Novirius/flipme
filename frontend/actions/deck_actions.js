import * as APIUtil from '../util/decks_api_util';

export const RECEIVE_ALL_DECKS = 'RECEIVE_ALL_DECKS';
export const RECEIVE_DECK = 'RECEIVE_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';
export const RECEIVE_DECK_ERRORS = 'RECEIVE_DECK_ERRORS';

export const receiveDecks = decks => ({
    type: RECEIVE_ALL_DECKS,
    decks: decks
})

export const receiveDeck = deck => ({
    type: RECEIVE_DECK,
    deck: deck
})

export const removeDeck = deckId => ({
    type: REMOVE_DECK,
    deckId: deckId
})

export const deckErrors = errors => ({
    type: RECEIVE_DECK_ERRORS,
    errors: errors
})





export const fetchUserDecks = (userid) => dispatch => (
    APIUtil.fetchUserDecks(userid)
    .then(
        decks => dispatch(receiveDecks(decks)),
        errors => dispatch(deckErrors(errors))
    )
);

export const fetchDeck = id => dispatch => (
    APIUtil.fetchDeck(id)
    .then(
        deck => dispatch(receiveDeck(deck)),
        errors => dispatch(deckErrors(errors))
    )
);

export const createDeck = deck => dispatch => (
    APIUtil.createDeck(deck)
    .then(
        deck => dispatch(receiveDeck(deck)),
        errors => dispatch(deckErrors(errors.responseJSON)) 
    )
)

export const updateDeck = deck => dispatch => (
    APIUtil.updateDeck(deck)
    .then(
        deck => dispatch(receiveDeck(deck)),
        errors => dispatch(deckErrors(errors.responseJSON))
    )
)

export const deleteDeck = deckId => dispatch => (
    APIUtil.deleteDeck(deckId)
    .then(
        () => dispatch(removeDeck(deckId)),
        errors => dispatch(deckErrors(errors))
    )
)

export const searchDecks = query => dispatch => (
    APIUtil.searchDecks(query)
    .then(
        (decks) => dispatch(receiveDecks(decks)),
        errors => dispatch(deckErrors(errors))
    )
)

export const latestDecks = () => dispatch => (
    APIUtil.latestDecks()
        .then(
            decks => dispatch(receiveDecks(decks)),
            errors => dispatch(deckErrors(errors))
        )
)



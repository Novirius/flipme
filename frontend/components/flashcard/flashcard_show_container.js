import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import FlashcardShow from './flashcard_show';
import {fetchDeck} from '../../actions/deck_actions';
import {fetchCards} from '../../actions/card_actions';

const mapState = ({entities}, ownProps) => ({
    deckId: ownProps.match.params.deckId,
    deck: entities.decks[ownProps.match.params.deckId]
})

const mapDispatch = dispatch => ({
    fetchDeck: deckId => dispatch(fetchDeck(deckId)),
    fetchCards: deckId => dispatch(fetchCards(deckId))
})

export default withRouter(connect(mapState, mapDispatch)(FlashcardShow))
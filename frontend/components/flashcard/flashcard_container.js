import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Flashcard from './flashcard';
import {fetchCards} from '../../actions/card_actions';
import {fetchDeck} from '../../actions/deck_actions';

const mapState = ({entities}, ownProps) => {
    return {
        deckId: ownProps.match.params.deckId,
        deck: entities.decks[ownProps.match.params.deckId],
        cards: entities.cards
    }
}

const mapDispatch = dispatch => ({
    fetchCards: deckId => dispatch(fetchCards(deckId)),
    fetchDeck: deckId => dispatch(fetchDeck(deckId))
})

export default withRouter(connect(mapState, mapDispatch)(Flashcard));
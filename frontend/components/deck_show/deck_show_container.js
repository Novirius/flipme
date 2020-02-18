import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import DeckShow from './deck_show';
import {fetchCards} from '../../actions/card_actions';
import {fetchDeck} from '../../actions/deck_actions';

const mapState = (state, ownProps) => {
    // debugger;
    return {
        deckId: ownProps.match.params.deckId,
        deck: state.entities.decks[ownProps.match.params.deckId],
        cards: state.entities.cards,
        cardsArray: Object.values(state.entities.cards).filter(card => card.deck_id === parseInt(ownProps.match.params.deckId))
    }
}

const mapDispatch = dispatch => ({
    fetchCards: deckId => dispatch(fetchCards(deckId)),
    fetchDeck: deckId => dispatch(fetchDeck(deckId))
})

export default withRouter(connect(mapState, mapDispatch)(DeckShow))
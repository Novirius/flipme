import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchCards} from  '../../actions/card_actions';
import {fetchUsers} from '../../actions/user_actions';
import SearchResultsIndexItem from './search_results_index_item';

const mapState = ({entities}, ownProps) => {
    // debugger;
    return {
        cards: Object.values(entities.cards).filter(card => card.deck_id === parseInt(ownProps.deck.id)),
        users: entities.users
    }
    
}

const mapDispatch = dispatch => ({
    fetchCards: deckId => dispatch(fetchCards(deckId)),
    fetchUsers: () => dispatch(fetchUsers())
})

export default withRouter(connect(mapState, mapDispatch)(SearchResultsIndexItem))
import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {searchDecks} from  '../../actions/deck_actions'
import {fetchCards} from  '../../actions/card_actions'
import SearchResults from './search_results';

const mapState = ({entities}, ownProps) => ({
    searchQuery: ownProps.match.params.query,
    decks: Object.values(entities.decks)
})

const mapDispatch = dispatch => ({
    searchDecks: (query) => dispatch(searchDecks(query))
})

export default withRouter(connect(mapState, mapDispatch)(SearchResults))
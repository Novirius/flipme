import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchCards} from  '../../actions/card_actions';
import SearchResultsIndexItem from './search_results_index_item';

const mapState = ({entities}, ownProps) => ({
    cards: Object.values(entities.cards)
})

const mapDispatch = dispatch => ({
    fetchCards: deckId => dispatch(fetchCards(deckId))
})

export default withRouter(connect(mapState, mapDispatch)(SearchResultsIndexItem))
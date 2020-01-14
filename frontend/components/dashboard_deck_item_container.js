import React from 'react';
import { connect } from 'react-redux';
import {fetchCards} from '../actions/card_actions'
import DashboardDeckItem from './dashboard/dashboard_deck_item';

const mapState = ({ entities, session}) => ({
    decks: Object.values(entities.decks),
    currentUser: entities.users[session.id],
    cardCount: Object.keys(entities.cards).length
})

const mapDispatch = dispatch => {
    return {
        fetchCards: (deckId) => dispatch(fetchCards(deckId))
    }
}

export default connect(mapState, mapDispatch)(DashboardDeckItem);
import React from 'react';
import { connect } from 'react-redux';
import {fetchUserDecks} from '../../actions/deck_actions'
import DashboardDecks from './dashboard_decks'

const mapState = ({ entities, session}) => ({
    // folders: Object.values(entities.folders),
    // foldersCount: Object.keys(entities.folders).length,
    decks: Object.values(entities.decks),
    decksCount: Object.keys(entities.decks).length,
    currentUser: entities.users[session.id]
})

const mapDispatch = dispatch => {
    return {
        fetchUserDecks: (userId) => dispatch(fetchUserDecks(userId))
    }
}

export default connect(mapState, mapDispatch)(DashboardDecks);
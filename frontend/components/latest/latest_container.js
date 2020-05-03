import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


import Latest from './latest';
import {latestDecks} from '../../actions/deck_actions';

const mapState = ({entities, session}) => {
    return {
        decks: Object.values(entities.decks),
        decksCount: Object.keys(entities.decks).length,
        currentUser: entities.users[session.id]
    }
}

const mapDispatch = dispatch => {
    return {
        latestDecks: (userId) => dispatch(latestDecks(userId))
    }
}

export default withRouter(connect(mapState, mapDispatch)(Latest));
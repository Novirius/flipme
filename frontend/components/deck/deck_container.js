import React from 'react'
import {connect} from 'react-redux';
import {fetchUsers} from '../../actions/user_actions';
import {fetchCards} from '../../actions/card_actions';
import {withRouter} from 'react-router-dom';
import Deck from './deck';

const mapState = ({entities}) => ({
    cards: entities.cards,
    cardsCount: Object.keys(entities.cards).length,
    users: entities.users
})

const mapDispatch = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchCards: deckId => dispatch(fetchCards(deckId))
})

export default withRouter(connect(mapState, mapDispatch)(Deck))
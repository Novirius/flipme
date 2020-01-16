import React from 'react'
import {connect} from 'react-redux';
import {fetchCards} from '../../actions/card_actions';
import {withRouter} from 'react-router-dom';
import DeckEdit from './deck_edit';

const mapState = ({entities}) => ({
    
})

const mapDispatch = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchCards: deckId => dispatch(fetchCards(deckId))
})

export default withRouter(connect(mapState, mapDispatch)(DeckEdit))
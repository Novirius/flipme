import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import CardIndexItem from './card_index_item';
import {updateCard, deleteCard} from '../../actions/card_actions';

const mapState = ({entities}, ownProps) => ({
    formType: 'Update Card',
})

const mapDispatch = dispatch => ({
    processForm: card => dispatch(updateCard(card)),
    deleteCard: cardId => dispatch(deleteCard(cardId))
})

export default withRouter(connect(mapState, mapDispatch)(CardIndexItem))
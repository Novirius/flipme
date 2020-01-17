import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import CardForm from './card_form';
import {createCard} from '../../actions/card_actions';

const mapState = ({entities}, ownProps) => ({
    formType: 'Create Card',
    card: {
        front_text: '',
        back_text: '',
    }
})

const mapDispatch = dispatch => ({
    processForm: (deckId, card) => dispatch(createCard(deckId, card)),


})

export default withRouter(connect(mapState, mapDispatch)(CardForm))
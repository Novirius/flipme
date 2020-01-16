import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import CardForm from './card_form';

const mapState = ({entities}, ownProps) => ({
    formType: 'Create Card',
    card: {
        front_text: '',
        back_text: '',
    }
})

const mapDispatch = dispatch => ({
    processForm: card => dispatch(updateCard(card)),


})

export default withRouter(connect(mapState, mapDispatch)(CardForm))
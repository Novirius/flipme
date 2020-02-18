import { connect } from 'react-redux';
import React from 'react';
import DeckForm from './deck_form'
import {openModal, closeModal} from '../../actions/modal_actions'
import {createDeck} from '../../actions/deck_actions'

const mapState = ({ entities:{decks},errors }) => ({
    decks: decks
})

const mapDispatch = dispatch =>  ({
    processForm: (DeckForm) => dispatch(createDeck(DeckForm)).then(() => dispatch(closeModal())),
    closeModal: () => dispatch(closeModal()),
    openModal: modaltype => dispatch(openModal(modaltype))
})

export default connect(null, mapDispatch)(DeckForm);

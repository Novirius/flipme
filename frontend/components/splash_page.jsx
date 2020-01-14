import React from 'react';
import { connect } from 'react-redux';
import {openModal} from '../actions/modal_actions';

const SplashPage = props => (
    <div className="splash-image">
        <div className="splash-top-container">
            <h1>
            Over 90% of students who use FlipMe report higher grades.
            </h1>
            <br />
            <p>
                Search millions of study sets or create your own. Improve your grades by studying with flashcards, games and more.<br />
            </p>
            <button onClick={() => props.openModal('signup')} type="button" value="Get Started">
                Get started
            </button>
        </div>

    </div>
)


const mapState = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatch = dispatch => ({
    openModal: modalForm => dispatch(openModal(modalForm))
})
  
  export default connect(mapState, mapDispatch)(SplashPage);
import { connect } from 'react-redux';
import TopNav from './top_nav'
import { logout, login } from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';
import {searchDecks} from '../../actions/deck_actions';
import { Link, withRouter } from 'react-router-dom';

const mapState = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatch = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modalForm => dispatch(openModal(modalForm)),
    searchDecks: (query) => dispatch(searchDecks(query))
})

export default withRouter(connect(mapState, mapDispatch)(TopNav))
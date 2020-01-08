import { connect } from 'react-redux';
import TopNav from './top_nav'
import { logout, login } from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions'

const mapState = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatch = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modalForm => dispatch(openModal(modalForm))
})

export default connect(mapState, mapDispatch)(TopNav)
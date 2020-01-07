import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => (
  APIUtil.signup(user)
  .then(
        response => dispatch(receiveCurrentUser(response)), 
        errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(
        response => dispatch(receiveCurrentUser(response)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(
        () => dispatch(logoutCurrentUser())
    )
);

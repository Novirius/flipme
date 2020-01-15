import * as APIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_USERS';

export const receiveUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users: users
})

export const fetchUsers = () => dispatch => (
    APIUtil.fetchUsers()
    .then(
        response => dispatch(receiveUsers(response))
    )
);
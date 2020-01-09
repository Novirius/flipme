import React from 'react';
import {Link} from 'react-router-dom';

const TopNav = (props) => {
    const loggedOut = () => (
        <div className="topnav">
            <div>
                <Link to="/">Home Page</Link>
            </div>
            <button type="button">Search</button>
            <button type="button">Browse</button>
            <button type="button">Create</button>
            <button type="button" onClick={() => props.openModal('signup')}>Sign Up</button>
            <button type="button" onClick={() => props.openModal('login')}>Log In</button>
        </div>
    )
    const loggedIn = () => (
        <div className="topnav">
            <div>
                <Link to="/">Home Page</Link>
            </div>
            <button type="button">Search</button>
            <button type="button">Browse</button>
            <button type="button">Create</button>
            <button type="button">{props.currentUser.username}</button>
            <button type="button" onClick={() => props.logout()}>Log Out</button>
        </div>
    )
    return props.currentUser ? loggedIn() : loggedOut()
}

export default TopNav
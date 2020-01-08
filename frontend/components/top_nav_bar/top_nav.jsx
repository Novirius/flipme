import React from 'react';
import {Link} from 'react-router-dom';

const TopNav = (props) => {
    const loggedOut = () => (
        <div className="topnav">
            <div>
                <Link to="/">Home Page</Link>
            </div>
            <a className="active" href="#home">Search</a>
            <a href="#news">Browse</a>
            <a href="#contact">Create</a>
            <a href="" onClick={() => props.openModal('signup')}>Sign Up</a>
            <a href="" onClick={() => props.openModal('login')}>Log In</a>
        </div>
    )
    const loggedIn = () => (
        <div className="topnav">
            <div>
                <Link to="/">Home Page</Link>
            </div>
            <a className="active" href="#home">Search</a>
            <a href="#news">Browse</a>
            <a href="#contact">Create</a>
            <a href="#about">{props.currentUser.username}</a>
        </div>
    )
    return props.currentUser ? loggedIn() : loggedOut()
}

export default TopNav
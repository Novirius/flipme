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
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Log In</Link>
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
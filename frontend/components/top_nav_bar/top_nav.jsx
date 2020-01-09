import React from 'react';
import {Link} from 'react-router-dom';

const TopNav = (props) => {
    const loggedOut = () => (
        <div className="top-nav">
            <div className="top-nav-container">
                <div className="top-nav-logo-wrapper">
                    <div className="top-nav-logo">
                    <i className="fab fa-buffer"></i>
                    </div>
                </div>
                <div className="top-nav-transition-container">
                    <div className="top-nav-links-container">
                        <div className="top-nav-search-wrapper">
                            <div className="top-nav-search">
                                <button type="button"><i className="fas fa-search"></i>  Search</button>
                            </div>
                        </div>
                        <div className="top-nav-browse-wrapper">
                            <div className="top-nav-browse">
                                <button type="button"><i className="fas fa-book"></i>  Browse</button>
                            </div>
                        </div>
                        <div className="top-nav-create-wrapper">
                            <div className="top-nav-create">
                                <button type="button"><i className="far fa-plus-square"></i>  Create</button>
                            </div>
                        </div>
                    </div>
                    <div className="top-nav-user-container">
                        <div className="top-nav-signup-wrapper">
                            <div className="top-nav-signup">
                                <button type="button" onClick={() => props.openModal('signup')}>Sign Up</button>
                            </div>
                        </div>
                        <div className="top-nav-login-wrapper">
                            <div className="top-nav-login">
                                <button type="button" onClick={() => props.openModal('login')}>Log In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
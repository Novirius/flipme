import React from 'react';
import {Link} from 'react-router-dom';

const TopNav = (props) => {
    const loggedOut = () => (
        <div className="top-nav">
            <div className="top-nav-container">
                <div className="top-nav-logo-wrapper">
                    <div className="top-nav-logo">
                    <button>FLIP.me</button>
                    </div>
                </div>
                <div className="top-nav-transition-wrapper">
                    <div className="top-nav-transition">
                        <div className="top-nav-links-container">
                            <div className="top-nav-search-wrapper">
                                <div className="top-nav-search">
                                    <span>Search</span>
                                </div>
                            </div>
                            <div className="top-nav-browse-wrapper">
                                <div className="top-nav-browse">
                                    <span>Browse</span>
                                </div>
                            </div>
                            <div className="top-nav-create-wrapper">
                                <div className="top-nav-create">
                                    <span>Create</span>
                                </div>
                            </div>
                        </div>
                        <div className="top-nav-user-container">
                            <div className="top-nav-signup-wrapper">
                                <div className="top-nav-signup">
                                    <span>Sign Up</span>
                                </div>
                            </div>
                            <div className="top-nav-login-wrapper">
                                <div className="top-nav-login">
                                    <span>Log In</span>
                                </div>
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
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
                                <a><i className="fas fa-search"></i>  Search</a>
                            </div>
                        </div>
                        <div className="top-nav-browse-wrapper">
                            <div className="top-nav-browse">
                                <a><i className="fas fa-book"></i>  Browse</a>
                            </div>
                        </div>
                        <div className="top-nav-create-wrapper">
                            <div className="top-nav-create">
                                <a><i className="far fa-plus-square"></i>  Create</a>
                            </div>
                        </div>
                    </div>
                    <div className="top-nav-user-container">
                        <div className="top-nav-signup-wrapper">
                            <div className="top-nav-signup">
                                <a onClick={() => props.openModal('signup')}>Sign Up</a>
                            </div>
                        </div>
                        <a onClick={() => props.openModal('login')} className="top-nav-login-wrapper">
                            <div className="top-nav-login">
                                <span>Log In</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
    const loggedIn = () => (
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
                                <a><i className="fas fa-search"></i>  Search</a>
                            </div>
                        </div>
                        <div className="top-nav-browse-wrapper">
                            <div className="top-nav-browse">
                                <a><i className="fas fa-book"></i>  Browse</a>
                            </div>
                        </div>
                        <div className="top-nav-create-wrapper">
                            <div className="top-nav-create">
                                <a><i className="far fa-plus-square"></i>  Create</a>
                            </div>
                        </div>
                    </div>
                    <div className="top-nav-user-container">
                        <div className="top-nav-signup-wrapper">
                            <div className="top-nav-signup">
                                <a onClick={() => props.openModal('signup')}>{props.currentUser.username}</a>
                            </div>
                        </div>
                        <a onClick={() => props.logout()} className="top-nav-login-wrapper">
                            <div className="top-nav-login">
                                <span>Log Out</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
    return props.currentUser ? loggedIn() : loggedOut()
}

export default TopNav
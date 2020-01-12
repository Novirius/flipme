import React from 'react';
import {Link} from 'react-router-dom';


class TopNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: 'hide',
        }
        this.handleProfile = this.handleProfile.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleProfile () {
        if (this.state.hidden === 'hide') {
            this.setState({
                hidden: 'show'
            })
        }
        else {
            this.setState({
                hidden: 'hide'
            })
        }
    }

    handleLogout() {
        this.props.logout();
        this.setState({
            hidden: 'hide'
        })
    }

    render () {
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
                        <div className="top-nav-vertical-divide" />
                        <div className="top-nav-browse-wrapper">
                            <div className="top-nav-browse">
                                <a><i className="fas fa-book"></i>  Browse</a>
                            </div>
                        </div>
                        <div className="top-nav-vertical-divide" />
                        <div className="top-nav-create-wrapper">
                            <div className="top-nav-create">
                                <a><i className="far fa-plus-square"></i>  Create</a>
                            </div>
                        </div>
                    </div>
                    <div className="top-nav-user-container">
                        <div className="top-nav-signup-wrapper">
                            <div className="top-nav-signup">
                                <a onClick={() => this.props.openModal('signup')}>Sign Up</a>
                            </div>
                        </div>
                        <a onClick={() => this.props.openModal('login')} className="top-nav-login-wrapper">
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
                        <div className="top-nav-vertical-divide" />
                        <div className="top-nav-browse-wrapper">
                            <div className="top-nav-browse">
                                <a><i className="fas fa-book"></i>  Browse</a>
                            </div>
                        </div>
                        <div className="top-nav-vertical-divide" />
                        <div className="top-nav-create-wrapper">
                            <div className="top-nav-create">
                                <a><i className="far fa-plus-square"></i>  Create</a>
                            </div>
                        </div>
                    </div>
                    <div className="top-nav-user-container">
                        <div className="top-nav-logout-wrapper">
                            <div className="top-nav-logout">
                                <a onClick={this.handleProfile}>{this.props.currentUser.username} <i class="fa fa-caret-down"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul className={`top-nav-dropdown ${this.state.hidden}`}>
                <li><a>Your Study Sets</a></li>
                <li><a>Settings</a></li>
                <li onClick={this.handleLogout}><a>Log Out</a></li>
            </ul>                       
        </div>
    )
    
    return this.props.currentUser ? loggedIn() : loggedOut()
    }
}

export default TopNav
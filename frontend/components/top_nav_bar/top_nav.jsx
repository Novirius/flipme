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
        this.closeProfile = this.closeProfile.bind(this)
    }

    handleProfile (e) {
        e.stopPropagation();
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

    closeProfile(e) {
        e.stopPropagation();
        this.setState({
            hidden: 'hide'
        })
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
                        <Link to='/'>
                            <i class="fab fa-connectdevelop"></i>
                        </Link>
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
                        <Link to='/'>
                            <i id="shadowBox" className="fab fa-connectdevelop fa-3x rainbow rainbow_text_animated"></i>
                        </Link>
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
                                <Link onClick={() => this.props.openModal('deck')} to={`/users/${this.props.currentUser.id}/decks`}><i className="far fa-plus-square"></i>  Create</Link>
                            </div>
                        </div>
                    </div>
                    <div className="top-nav-user-container">
                        <div className="top-nav-logout-wrapper">
                            <div className="top-nav-logout">
                                <a onClick={this.handleProfile}>{this.props.currentUser.username} <i className="fa fa-caret-down"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul onBlur={this.closeProfile} className={`top-nav-dropdown ${this.state.hidden}`}>
                <Link onClick={this.handleProfile} to={`/users/${this.props.currentUser.id}/decks`}><li className="top-nav-dropdown-item">Your Study Sets</li></Link>
                <a><li className="top-nav-dropdown-item">Settings</li></a>
                <a><li className="top-nav-dropdown-item" onClick={this.handleLogout}>Log Out</li></a>
            </ul>                       
        </div>
    )
    
    return this.props.currentUser ? loggedIn() : loggedOut()
    }
}

export default TopNav
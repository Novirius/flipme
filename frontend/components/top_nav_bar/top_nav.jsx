import React from 'react';
import {Link} from 'react-router-dom';


class TopNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: false,
            search: false,
            searchTerm: ''
        }
        this.handleProfile = this.handleProfile.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.closeDropdown = this.closeDropdown.bind(this)
        this.closeSearch = this.closeSearch.bind(this)
        this.toggleSearch = this.toggleSearch.bind(this)
        this.submitSearch = this.submitSearch.bind(this)
        this.updateSearch = this.updateSearch.bind(this)
    }

    updateSearch(e) {
        this.setState({
            searchTerm: e.currentTarget.value
        })
    }

    submitSearch (e) {
        e.preventDefault();
        this.props.history.push(`/search/${this.state.searchTerm}`)
        this.closeSearch();
    }

    toggleSearch (e) {
        e.stopPropagation();
        this.setState({
            search: !this.state.search
        })
    }

    closeDropdown () {
        this.setState({
            hidden: false
        })
    }

    closeSearch (e) {
        this.setState({
            search: false
        })
    }

    componentDidMount () {
        // Close the dropdown menu if the user clicks outside of it
        const wrapper = document.getElementById("site-wrapper")
        window.addEventListener("click", this.closeDropdown)
        wrapper.addEventListener("click", this.closeSearch)
    }

    componentWillUnmount () {
        // Close the dropdown menu if the user clicks outside of it
        const wrapper = document.getElementById("site-wrapper")
        window.removeEventListener("click", this.closeDropdown)
        wrapper.removeEventListener("click", this.closeSearch)
    }

    handleProfile (e) {
        e.stopPropagation();
        this.setState({
            hidden: !this.state.hidden
        })
    }

    handleLogout() {
        this.props.logout();
        this.setState({
            hidden: 'hide'
        })
    }

    render () {
        const loggedIn = () => (
            <div className="top-nav-user-container">
            <div className="top-nav-logout-wrapper">
                <div className="top-nav-logout">
                    <a onClick={this.handleProfile}>{this.props.currentUser.username} <i className="fa fa-caret-down"></i></a>
                </div>
            </div>
            { this.state.hidden &&
                <ul id="user-dropdown" className={`top-nav-dropdown ${this.state.hidden}`}>
                    <Link onClick={this.handleProfile} to={`/users/${this.props.currentUser.id}/decks`}><li className="top-nav-dropdown-item">Your Study Sets</li></Link>
                    <a><li className="top-nav-dropdown-item">Settings</li></a>
                    <a><li className="top-nav-dropdown-item" onClick={this.handleLogout}>Log Out</li></a>
                </ul> 
            }
        </div>
        )

        const loggedOut = () => (
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
        )

        const rightNav = this.props.currentUser ? loggedIn() : loggedOut()

        const searchBar = () => (
            <div className="top-nav-search-container">
                <form onSubmit={this.submitSearch} className="top-nav-search-wrapper">
                    <i className="fas fa-search"></i>
                    <input
                        id="searchBar"
                        type="text"
                        placeholder="Search"
                        autoFocus={true}
                        onChange={this.updateSearch}
                        value={this.state.searchTerm}
                    />
                    <button type="submit" style={{ display: 'none' }} />
                </form>
                <span onClick={this.closeSearch} className="top-nav-search-close">
                    <i className="fas fa-times fa-lg"></i>
                </span>
            </div>
        )

        const normalbar = () => (
            <div className="top-nav-transition-container">
                <div className="top-nav-links-container">
                    <div className="top-nav-search-wrapper">
                        <div onClick={this.toggleSearch} className="top-nav-search">
                            <a><i className="fas fa-search"></i>  Search</a>
                        </div>
                    </div>
                    <div className="top-nav-vertical-divide" />
                    <div className="top-nav-create-wrapper">
                        <div className="top-nav-create">
                            <a onClick={() => this.props.openModal('deck')} ><i className="far fa-plus-square"></i>  Create</a>
                        </div>
                    </div>
                </div>
                {
                    rightNav
                }
            </div>
        )

        const transitionContainer = this.state.search ? searchBar() : normalbar();

        const navBar = () => (
            <div className="top-nav">
                <div className="top-nav-container">
                    <div className="top-nav-logo-wrapper">
                        <div className="top-nav-logo">
                            <Link to='/'>
                                <i id="shadowBox" className="fab fa-connectdevelop fa-3x rainbow rainbow_text_animated"></i>
                            </Link>
                        </div>
                    </div>
                    {
                        transitionContainer
                    }
                </div>
            </div>
        )
    
    return navBar();
    }
}

export default TopNav
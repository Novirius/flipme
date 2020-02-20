import React from 'react';

import LeftNavItem from './left_nav_item';
import LeftNavFoldersIndexItem from './left_nav_folders_index_item'

class LeftNav extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     open: false,
        //     foldersCount: 0
        // }
    }

    componentDidMount () {
        this.props.fetchFolders();
        this.props.fetchUserDecks(this.props.currentUser.id);
            // .then(() => this.setState({foldersCount: this.props.foldersCount}));
    }

    render () {
        if (!this.props.folders) return null;
        return (
            <section className="side-nav">
                <div className="side-nav-container">
                    {/* Site Nav Start */}
                    <LeftNavItem route={'/'} icon={<i className="fas fa-home"></i>} title={'Home'} />
                    <LeftNavItem route={'/'} icon={<i className="fas fa-cog"></i>} title={'Settings'} />
                    <div className="side-nav-divider"/>
                    {/* Site nav End */}
                    {/* User stuff Start */}
                    <LeftNavItem route={`/users/${this.props.currentUser.id}/decks`} icon={<i className="fas fa-clone"></i>} title={`Decks (${this.props.decksCount})`} />
                    <LeftNavItem route={`/users/${this.props.currentUser.id}/folders`} icon={<i className="fas fa-folder"></i>} title={`Folders (${this.props.foldersCount})`} />
                    {/* User stuff End */}
                    {
                        this.props.folders.map(folder => <LeftNavFoldersIndexItem route={`/folders/${folder.id}`} key={folder.id} title={folder.title} id={folder.id} />)
                    }
                    <div className="side-nav-create">
                        <a className="side-nav-create-link" onClick={() => this.props.openModal('folder')}>
                            <div className="side-nav-create-link-container">
                            <span className="side-nav-create-link-icon">
                                <i className="fas fa-folder-plus"></i>
                            </span>
                                <span className="side-nav-create-link-title">
                                    Create a folder
                                </span>
                            </div>
                        </a>
                    </div>
                    <img className="birdo-img" src={window.birdo}/>
                    <div className="side-nav-folder">
                        <a className="side-nav-footer-link" onClick={()=>alert("About as helpful as real Customer Service")}>
                            <div className="side-nav-footer-link-container">
                                <span className="side-nav-footer-link-title">
                                    Help Center
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="side-nav-folder">
                        <a className="side-nav-footer-link" onClick={()=>alert("Your private information is like a 711: Open 24/7")}>
                            <div className="side-nav-footer-link-container">
                                <span className="side-nav-footer-link-title">
                                    Privacy Policy
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="side-nav-folder">
                        <a className="side-nav-footer-link" onClick={()=>alert("Upgrade your website by hiring me!")}>
                            <div className="side-nav-footer-link-container">
                                <span className="side-nav-footer-link-title">
                                    Upgrade
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="side-nav-contact">
                        <div className="side-nav-contact-container">
                            <a href="https://github.com/novirius"><i className="fab fa-github fa-lg"></i></a>
                            <a href="https://www.linkedin.com/in/david-chin-504269106/"><i className="fab fa-linkedin fa-lg"></i></a>
                            <a href="https://pastebin.com/u/Yugl"><i className="far fa-file-code fa-lg"></i></a>
                        </div>
                    </div>
                    <div className="infinite-scroll" />
                </div>
            </section>

        )
    }
}

export default LeftNav;


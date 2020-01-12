import React from 'react';

class LeftNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            foldersCount: 0
        }
    }

    componentDidMount () {
        this.props.fetchFolders()
            .then(() => this.setState({foldersCount: this.props.foldersCount}));
    }

    render () {
        return (
            <section className="side-nav">
                <div className="side-nav-container">
                    {/* Copy Start */}
                    <div className="side-nav-item">
                        <a className="side-nav-item-link">
                            <div className="side-nav-item-link-container">
                                <span className="side-nav-item-link-icon">
                                    <i className="fas fa-home"></i>
                                </span>
                                <span className="side-nav-item-link-title">
                                    Home
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="side-nav-item">
                        <a className="side-nav-item-link">
                            <div className="side-nav-item-link-container">
                                <span className="side-nav-item-link-icon">
                                    <i className="fas fa-cog"></i>
                                </span>
                                <span className="side-nav-item-link-title">
                                    Settings
                                </span>
                            </div>
                        </a>
                    </div>
                    <hr className="side-nav-divider"/>
                    {/* Copy End */}
                    {/* Copy Start */}
                    <div className="side-nav-item">
                        <a className="side-nav-item-link">
                            <div className="side-nav-item-link-container">
                                <span className="side-nav-item-link-icon">
                                    <i class="fas fa-clone"></i>
                                </span>
                                <span className="side-nav-item-link-title">
                                    Sets
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="side-nav-item">
                        <a className="side-nav-item-link">
                            <div className="side-nav-item-link-container">
                                <span className="side-nav-item-link-icon">
                                    <i class="fas fa-folder"></i>
                                </span>
                                <span className="side-nav-item-link-title">
                                    Folders ({this.state.foldersCount})
                                </span>
                            </div>
                        </a>
                    </div>
                    <hr className="side-nav-divider"/>
                    {/* Copy End */}
                </div>

            </section>

        )
    }
}

export default LeftNav;
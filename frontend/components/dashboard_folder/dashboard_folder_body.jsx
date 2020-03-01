import React from 'react';
import {Link} from 'react-router-dom'

class DashboardFolderBody extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
    }

    render () {
        const content = (this.props.decks) ? this.props.decks.map((deck, id) => <li key={id}>{deck.title}</li>) : <span>This folder has no decks yet</span>
        return (
            <div className="dashboard-folder-body">
                <div className="dashboard-folder-body-index">
                    {content}
                </div>
            </div>
        )
    }

}

export default DashboardFolderBody;
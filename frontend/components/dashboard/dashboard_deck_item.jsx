import React from 'react';
import {Link} from 'react-router-dom';

class DashboardDeckItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {
        this.props.fetchCards(1)
    }

    render () {
        return (
            <Link to='/'>
                <div className="dashboard-body-feed-item">
                    <span className="dashboard-body-feed-item-small">{this.props.cardCount} terms</span>
                    <div className="dashboard-body-feed-item-large">
                        <i className="fas fa-clone"></i>
                        <span>{this.props.title}</span>
                    </div>
                </div>
            </Link>
        )
    }
}

export default DashboardDeckItem;



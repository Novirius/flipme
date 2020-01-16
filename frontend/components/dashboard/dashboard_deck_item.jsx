import React from 'react';
import {Link} from 'react-router-dom';

class DashboardDeckItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {
        this.props.fetchCards(this.props.id)
    }

    render () {
        return (
            <Link to={`/decks/${this.props.deck.id}/flashcard`}>
                <div className="dashboard-body-feed-item">
                    <span className="dashboard-body-feed-item-small">{this.props.deck.card_ids.length} terms</span>
                    <div className="dashboard-body-feed-item-large">
                        <i className="fas fa-clone"></i>
                        <span>{this.props.deck.title}</span>
                    </div>
                </div>
            </Link>
        )
    }
}

export default DashboardDeckItem;



import React from 'react';
import {Link} from 'react-router-dom';

import FlashcardContainer from './flashcard_container';

class FlashcardShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {
        this.props.fetchDeck(this.props.deckId);
        this.props.fetchCards(this.props.deckId);
    }

    render () {
        if (!this.props.deck) return null;
        return (
                <div className="flashcard-show-container">
                    <div className="flashcard-show-wrapper">
                        <div className="flashcard-show">
                            <div className="flashcard-show-title">
                                <span>{this.props.deck.title}</span>
                            </div>
                            <div className="flashcard-show-dashboard">
                                <section className="flashcard-show-dashboard-menu">
                                    <span>Study</span>
                                    <Link className="flashcard-show-dashboard-menu-item" to='/'><i className="fas fa-newspaper"></i> Flashcard</Link>
                                    <Link className="flashcard-show-dashboard-menu-item no-click" to='/'><i className="fas fa-atom"></i> Learn</Link>
                                    <Link className="flashcard-show-dashboard-menu-item no-click" to='/'><i className="fas fa-feather-alt"></i> Write</Link>
                                    <Link className="flashcard-show-dashboard-menu-item no-click" to='/'><i className="fas fa-file-audio"></i> Spell</Link>
                                    <Link className="flashcard-show-dashboard-menu-item no-click" to='/'><i className="fas fa-grin-beam-sweat"></i> Test</Link>
                                </section>
                                <div className="flashcard-show-dashboard-display">
                                    <FlashcardContainer deck={this.props.deck} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="flashcard-profile">
                        <div className="flashcard-profile-user">
                            <i className="fas fa-user-circle fa-lg"></i> {this.props.currentUser.username}
                        </div>
                        <div className="flashcard-profile-customization">
                            <Link to={`/decks/${this.props.deck.id}/edit`}>
                                <i className="fas fa-edit"></i>
                            </Link>
                        </div>
                    </div>
            </div>
 

        )

    }
}

export default FlashcardShow;
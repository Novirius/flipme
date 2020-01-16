import React from 'react';
import {Link} from 'react-router-dom';

import FlashcardContainer from './flashcard_container';

class FlashcardShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {

    }

    render () {
        return (
            <div className="flashcard-show-wrapper">
                <div className="flashcard-show">
                    <div className="flashcard-show-title">
                        <span>Title</span>
                    </div>
                    <div className="flashcard-show-dashboard">
                        <section className="flashcard-show-dashboard-menu">
                            <span>Study</span>
                            <Link className="flashcard-show-dashboard-menu-item" to='/'><i className="fas fa-newspaper"></i> Flashcard</Link>
                            <Link className="flashcard-show-dashboard-menu-item" to='/'><i className="fas fa-atom"></i> Learn</Link>
                            <Link className="flashcard-show-dashboard-menu-item" to='/'><i className="fas fa-feather-alt"></i> Write</Link>
                            <Link className="flashcard-show-dashboard-menu-item" to='/'><i className="fas fa-file-audio"></i> Spell</Link>
                            <Link className="flashcard-show-dashboard-menu-item" to='/'><i className="fas fa-grin-beam-sweat"></i> Test</Link>
                        </section>
                        <div className="flashcard-show-dashboard-display">
                            <FlashcardContainer />
                        </div>
                    </div>
                </div>
            </div>

        )

    }
}

export default FlashcardShow;
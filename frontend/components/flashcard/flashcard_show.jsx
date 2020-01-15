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
            <div className="testing-wrapper">
                <div className="testing">
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
                            {/* <div className="flashcard-show-dashboard-display-controls">
                                <i className="fas fa-arrow-circle-left fa-2x"></i><span>3/3</span><i className="fas fa-arrow-circle-right fa-2x"></i>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

        )

    }
}

export default FlashcardShow;
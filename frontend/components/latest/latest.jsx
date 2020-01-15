import React from 'react';
import {Link} from 'react-router-dom';

import DeckContainer from '../deck/deck_container';

class Latest extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount () {
        this.props.fetchUserDecks(this.props.currentUser.id);
    }

    render () {
        if(this.props.decks.length === 0) return null;
        // let list = [];
        // let i = this.props.decks.length;
        // while (list.length < 4 && list.length < this.props.decks.length) {
        //     list.push(this.props.decks[i]);
        //     i--;
        // }
        // let count = 0;
        // let i = this.props.decks.length;
        // let list = []
        // while (count <= 4 && i < this.props.decks.length) {
        //     list.push(this.props.decks[i])
        //     i++
        // }
        const decksArray = [];
        for (let i = 0; (i < this.props.decks.length) || (i < 4);i++) {
            decksArray.push(this.props.decks[i])
        }
        return (
                <div className="latest-container">
                    <div className="latest-header">
                        <span className="latest-header-label">Recent</span>
                        <Link className="latest-header-viewall" to={`/users/${this.props.currentUser.id}/decks`}>View all <i className="fas fa-chevron-circle-right"></i></Link>
                    </div>

                        <div className="latest-body-decks">
                            {
                                decksArray.map(deck => <DeckContainer key={deck.id} deck={deck} />)
                            }
                        </div>


                </div>
            // <div>

            // </div>
        )
    }

}

export default Latest;

// 

// <div className="deck-container">
// <div className="deck-details">
//         <div className="deck-details-top">
//             <span className="deck-details-title">Title</span>
//             <span className="deck-details-count">0 terms</span>
//         </div>
//         <span className="deck-details-title">Author</span>
//     </div>
//     <div className="deck-image">
//         <img className="niceimg" src={window.dlmnice}/>
//     </div>
// </div>

// <div className="deck-container">
// <div className="deck-details">
//         <div className="deck-details-top">
//             <span className="deck-details-title">Title</span>
//             <span className="deck-details-count">0 terms</span>
//         </div>
//         <span className="deck-details-title">Author</span>
//     </div>
//     <div className="deck-image">
//         <img className="niceimg" src={window.dlmnice}/>
//     </div>
// </div>

// <div className="deck-container">
// <div className="deck-details">
//         <div className="deck-details-top">
//             <span className="deck-details-title">Title</span>
//             <span className="deck-details-count">0 terms</span>
//         </div>
//         <span className="deck-details-title">Author</span>
//     </div>
//     <div className="deck-image">
//         <img className="niceimg" src={window.dlmnice}/>
//     </div>
// </div>
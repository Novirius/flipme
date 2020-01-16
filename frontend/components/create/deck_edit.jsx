import React from 'react';
import {Link} from 'react-router-dom';


class DeckEdit extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {

    }

    render () {
        return (
            <div className="deck-edit-wrapper">
                <div className="deck-edit">
                    <div className="deck-edit-title">
                        <span>Create a new study set</span>
                    </div>
                    <div className="deck-edit-dashboard">

                    </div>
                </div>
            </div>

        )

    }
}

export default DeckEdit;
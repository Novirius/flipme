import React from 'react';

class LeftNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render () {
        <div>
            <p>{this.props.folders}</p>
            <p>{this.props.foldersCount}</p>
            <p>{this.props.sets}</p>
            <p>{this.props.setsCount}</p>
        </div>
    }
}

export default LeftNav;
import React from 'react'

class DeckForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        
        return e => this.setState({
          [field]: e.currentTarget.value,
          buttonStatus: e.currentTarget.value
        });
        
    }


    handleSubmit(e) {
        e.preventDefault();
        const deck = Object.assign({}, this.state);
        this.props.processForm(deck)
    }

    render () {
        return (
            <div className="deck-form-container">
                <legend className="deck-form-title">
                    <div className="deck-form-title-container">
                        <span>Create a Deck</span>
                        <a onClick={() => this.props.closeModal()}><i className="far fa-times-circle fa-2x"></i></a>
                    </div>
                </legend>
                <form className="deck-form-body" onSubmit={this.handleSubmit}>
                    <label className="deck-form-body-label" htmlFor="title">
                        <input 
                            className="deck-form-body-input" 
                            type="text"
                            placeholder="Enter a title"
                            value={this.state.title}
                            onChange={this.update('title')} 
                        />
                        <span>Title</span>
                    </label>
                    <button type="submit" value="Create Deck" disabled={!this.state.buttonStatus} >Create Deck</button>
                </form>

            </div>
        )
    }

}

export default DeckForm;
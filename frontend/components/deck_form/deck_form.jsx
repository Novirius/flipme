import React from 'react'

class DeckForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            sub_category_id: 1
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
                    {/* <label className="deck-form-body-label" htmlFor="description">
                        <input 
                            className="deck-form-body-input" 
                            type="text"
                            placeholder="Enter a sub-category"
                            value={this.state.sub_category_id}
                            onChange={this.update('sub_category_id')} 
                        />
                        <span>Sub-category</span>
                    </label> */}
                    <button type="submit" value="Create Folder" disabled={!this.state.buttonStatus} >Create Deck</button>
                </form>

            </div>
        )
    }

}

export default DeckForm;
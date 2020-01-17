import React from 'react'


class CardIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.card
        this.handleSave = this.handleSave.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSave (e) {
        e.preventDefault();
        const card = Object.assign({}, this.state);
        this.props.processForm(card).then(alert("Card updated!"));
    }

    render () {
        return (
            <div className="card-form">
                <div className={`card-form-header`}>
                    <div className="card-form-header-label">
                        {/* <i className="fab fa-flipboard fa-2x"></i> */}
                    </div>
                    <div className="card-form-header-options">
                        <i onClick={this.handleSave} className="fas fa-save fa-lg"></i>
                        <i onClick={()=> this.props.deleteCard(this.props.card.id)} className="fas fa-trash-alt fa-lg"></i>
                    </div>
                </div>
                <div className={`card-form-body`}>
                    <hr width="100%" size="1"style={{opacity: 0.3}} />
                    <div className="card-form-input">
                        <label className="card-form-input-label" htmlFor="front_text">                        
                        <input 
                            type="text" 
                            className="card-form-input-left"
                            value={this.state.front_text}
                            onChange={this.update('front_text')}
                        />
                        Front
                        </label>
                        <label className="card-form-input-label" htmlFor="back_text">                        
                        <input 
                            type="text" 
                            className="card-form-input-right"
                            value={this.state.back_text}
                            onChange={this.update('back_text')}
                        />
                        Back
                        </label>
                    </div>
        
                </div>
            </div>
        )
    }
}


export default CardIndexItem;
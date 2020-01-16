import React from 'react'

class CardForm extends React.Component {
    constructor(props) {
        super(props);
        let temp = {
            hidden: 'hide'
        }
        this.state = Object.assign(temp, this.props.card);
        this.displayElement = this.displayElement.bind(this);
    }

    componentDidMount () {

    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    displayElement () {
        if (this.state.hidden === 'hide') {
            this.setState({
                hidden: 'display'
            })
        }
        else {
            this.setState({
                hidden: 'hide'
            })
        }

    }

    render () {
        return (
            <div className="card-form">
                <div className={`card-form-submit`}>
                    <button onClick={this.displayElement} id="card-submit" 
                    type="button" 
                    value={this.props.formType}>
                        <i className="fas fa-plus"></i> {this.props.formType}
                    </button>
                </div>
                <div className={`card-form-header ${this.state.hidden}`}>
                    <div className="card-form-header-label">
                        <i className="fab fa-flipboard fa-2x"></i>
                    </div>
                    <div className="card-form-header-options">
                        <i className="fas fa-save fa-lg"></i>
                        <i className="fas fa-trash-alt fa-lg"></i>
                    </div>
                </div>
                <div className={`card-form-body ${this.state.hidden}`}>
                    <hr width="100%" size="1"style={{opacity: 0.5}} />
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

export default CardForm
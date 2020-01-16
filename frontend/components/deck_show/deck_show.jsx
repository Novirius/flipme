import React from 'react'

class CardForm extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {

    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render () {
        return (
            <div className="card-form">
                <div className="card-form-header">
                    <div className="card-form-header-label">
                        <i class="fab fa-flipboard fa-2x"></i>
                    </div>
                    <div className="card-form-header-options">
        
                    </div>
                </div>
                <hr size="1"style={{opacity: 0.5}} />
                <div className="card-form-body">
                    <input 
                        type="text" 
                        className="card-form-input-left"
                        value={this.state.front_text}
                        onChange={this.update('front_text')}
                    />
                    <input 
                        type="text" 
                        className="card-form-input-right"
                        value={this.state.front_text}
                        onChange={this.update('front_text')}
                    />
                </div>
                <div className="card-form-submit">
                    <button id="card-submit" type="submit" value={this.props.formType}>{this.props.formType}</button>
                </div>
            </div>
        )
    }
}

export default CardForm
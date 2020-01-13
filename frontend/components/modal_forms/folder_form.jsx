import React from 'react'

class FolderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            buttonStatus: null
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
        const folder = Object.assign({}, this.state);
        this.props.processForm(folder);
    }

    render () {
        return (
            <div className="folder-form-container">
                <legend className="folder-form-title">
                    <div className="folder-form-title-container">
                        <span>Create a Folder</span>
                        <a onClick={() => this.props.closeModal()}><i className="far fa-times-circle fa-2x"></i></a>
                    </div>
                </legend>
                <form className="folder-form-body" onSubmit={this.handleSubmit}>
                    <label className="folder-form-body-label" htmlFor="title">
                        <input 
                            className="folder-form-body-input" 
                            type="text"
                            placeholder="Enter a title"
                            value={this.state.title}
                            onChange={this.update('title')} 
                        />
                        <span>Title</span>
                    </label>
                    <label className="folder-form-body-label" htmlFor="description">
                        <input 
                            className="folder-form-body-input" 
                            type="text"
                            placeholder="Enter a description (optional)"
                            value={this.state.description}
                            onChange={this.update('description')} 
                        />
                        <span>Description</span>
                    </label>
                    <button type="submit" value="Create Folder" disabled={!this.state.buttonStatus} >Create Folder</button>
                </form>

            </div>
        )
    }

}

export default FolderForm;
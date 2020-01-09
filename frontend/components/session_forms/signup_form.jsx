import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemo(e) {
    e.preventDefault();
    e.stopPropagation();
    const user = {username: 'chris', password: 'chris123'}
    this.props.processForm(user)
  }

  render() {
    return (
     
      <div className="SignupModalHeader">
        <div className="SignupModalHeader-HeadingWrapper">
            <h3 className="SignupModalHeader-Heading">
              <span>Log In</span>
            </h3>
        </div>
        <div className="SignupModalBody">
          <div className="SocialMedia-ButtonsWrapper">
              <div onClick={this.handleDemo} className="SocialMedia-FirstButton">
                <p>Log in with Demo</p>
              </div>
              <div className="SocialMedia-SecondButton">
                {/* <span class="Centerer"></span> */}
                <p>Log in with Google</p>
              </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <label className="SignupInput" htmlFor="username">
              <div className="SignupInput-Content">
                <input 
                  className="SignupInput-Input" 
                  type="text" 
                  id="username"
                  value={this.state.username}
                  onChange={this.update('username')} />
                <span className="SignupInput-Border"></span>
              </div>
              <span className="SignupInput-label">
                <span>
                  USERNAME
                </span>
              </span>
            </label>
            <label className="SignupInput" htmlFor="password">
              <div className="SignupInput-Content">
                <input 
                  className="SignupInput-Input" 
                  type="password" 
                  id="password"
                  value={this.state.password}
                  onChange={this.update('password')} />
                <span className="SignupInput-Border"></span>
              </div>
              <span className="SignupInput-label">
                <span>
                  PASSWORD
                </span>
              </span>
            </label>
            <button className="SignupButton">
              <span className="SignupButton-Wrapper">
                  <div className="SignupButton-Content">
                    <span>Log In</span>
                  </div>
              </span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;

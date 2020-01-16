import React from 'react';

class LoginForm extends React.Component {
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
    this.props.processForm(user).then((user) => this.props.history.push(`/latest`))
  }

  handleDemo(e) {
    e.preventDefault();
    e.stopPropagation();
    const user = {username: 'chris', password: 'chris123'}
    this.props.processForm(user).then((user) => this.props.history.push(`/latest`))
  }

  render() {
    return (
     
      <div className="LoginModalHeader">
        <div className="LoginModalHeader-HeadingWrapper">
            <h3 className="LoginModalHeader-Heading">
              <span>Log In</span>
            </h3>
        </div>
        <div className="LoginModalBody">
          <div className="SocialMedia-ButtonsWrapper">
              <div onClick={this.handleDemo} className="SocialMedia-FirstButton">
                <p><i className="fas fa-id-card-alt"></i>     Log in with Demo</p>
              </div>
              <div className="SocialMedia-SecondButton">
              {/* <img className="niceimg" src={window.dlmnice}/>  */}
              <p><i className="fab fa-google"></i>      Log in with Google</p>
              </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <label className="LoginInput" htmlFor="username">
              <div className="LoginInput-Content">
                <input 
                  className="LoginInput-Input" 
                  type="text" 
                  id="username"
                  placeholder="Type your username"
                  value={this.state.username}
                  onChange={this.update('username')} />
                {/* <span className="LoginInput-Border"></span> */}
              </div>
              <span className="LoginInput-label">
                <span>
                  USERNAME
                </span>
              </span>
            </label>
            <label className="LoginInput" htmlFor="password">
              <div className="LoginInput-Content">
                <input 
                  className="LoginInput-Input" 
                  type="password" 
                  id="password"
                  placeholder="Type your password"
                  value={this.state.password}
                  onChange={this.update('password')} />
                {/* <span className="LoginInput-Border"></span> */}
              </div>
              <span className="LoginInput-label">
                <span>
                  PASSWORD
                </span>
              </span>
            </label>
            <button type="submit" className="LoginButton">
              <span className="LoginButton-Wrapper">
                  <div className="LoginButton-Content">
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

export default LoginForm;

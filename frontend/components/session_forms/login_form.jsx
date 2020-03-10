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
    this.onSignIn = this.onSignIn.bind(this);
  }

  componentDidMount() {
    // window.gapi.load('auth2', () => {
    //   this.auth2 = gapi.auth2.init({
    //     client_id: '680179310299-rkqqva9jq3rjp824k7bsta0u3tkg1rs2.apps.googleusercontent.com',
    //   })
  
    //   window.gapi.load('signin2', function() {
    //     // render a sign in button
    //     // using this method will show Signed In if the user is already signed in
    //     var opts = {
    //       width: 400,
    //       height: 50,
    //       onSuccess: this.onSuccess.bind(this),
    //     }
    //     gapi.signin2.render('loginButton', opts)
    //   })
    // })

    gapi.signin2.render('g-signin2', {
      'scope': 'profile email',
      'width': 400,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': this.onSignIn,
    });
  }

  onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    // const user = {username: profile.getName(), password: 'blob123'}
    // this.props.processForm(user).then((user) => this.props.history.push(`/latest`))

    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
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
              <div className="SocialMedia-SecondButton" id="g-signin2">
                Login with Google
                {/* <p><i className="fab fa-google"></i>      Log in with Google</p> */}
              </div>

              {/* Old Code */}
              {/* <div className=" g-signin2 SocialMedia-SecondButton" data-onsuccess="onSignIn">
                <p><i className="fab fa-google"></i>      Log in with Google</p>
              </div> */}
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
            <div className="login-errors">{this.props.errors}</div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;

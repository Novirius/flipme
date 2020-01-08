import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Modal from './modal/modal'
import TopNavContainer from './top_nav_bar/top_nav_container';
import SignUpFormContainer from './session_forms/signup_form_container';
import LogInFormContainer from './session_forms/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Modal />
    <header>
      <TopNavContainer />
    </header>
    {/* <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch> */}
  </div>
);

export default App;
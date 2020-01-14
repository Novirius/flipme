import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Modal from './modal/modal'
import TopNavContainer from './top_nav_bar/top_nav_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LeftNavContainer from '../components/LeftNavContainer/left_nav_container';
import DashboardHeaderContainer from './dashboard/dashboard_header_container';
import DashboardBodyContainer from './dashboard/dashboard_body_container';
import DashboardDecksContainer from './dashboard/dashboard_decks_container';
import SplashPage from './splash_page';

const App = () => (
<div>
  <div className="header-wrapper">
    <header>
        <TopNavContainer />
    </header>
  </div>

  <AuthRoute exact path="/" component={SplashPage} />
  
  <div className="site-wrapper">
    <div className="site-container">
        <Modal />
        <ProtectedRoute exact path="/latest" component={LeftNavContainer} />
        <ProtectedRoute path="/users/:user_id" component={LeftNavContainer} />
        <ProtectedRoute exact path="/users/:user_id" component={DashboardHeaderContainer} />
        <ProtectedRoute exact path="/users/:user_id/folders" component={DashboardHeaderContainer} />
        <ProtectedRoute exact path="/users/:user_id/decks" component={DashboardHeaderContainer} />
        <ProtectedRoute exact path="/users/:user_id/folders" component={DashboardBodyContainer} />
        <ProtectedRoute exact path="/users/:user_id/decks" component={DashboardDecksContainer} />
    </div>
  </div>



</div>

);

export default App;


{/* <AuthRoute exact path="/latest" component={LeftNavContainer} />
<AuthRoute exact path="/:username" component={LeftNavContainer} />
<AuthRoute exact path="/sets/:setId/edit" component={LeftNavContainer} />
<Switch>
<AuthRoute exact path="/login" component={LogInFormContainer} />
<AuthRoute exact path="/signup" component={SignUpFormContainer} />
</Switch> */}
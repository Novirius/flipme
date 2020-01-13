import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Modal from './modal/modal'
import TopNavContainer from './top_nav_bar/top_nav_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LeftNavContainer from '../components/LeftNavContainer/left_nav_container';
import DashboardHeaderContainer from './dashboard/dashboard_header_container';
import DashboardBodyContainer from './dashboard/dashboard_body_container';


const App = () => (
  <div className="site-wrapper">
    <div className="site-container">
        <Modal />
        <header>
          <TopNavContainer />
        </header>
        <LeftNavContainer />
        <DashboardHeaderContainer />
        <DashboardBodyContainer />
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
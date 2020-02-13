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
import LatestContainer from './latest/latest_container';
import FlashcardContainer from './flashcard/flashcard_container';
import FlashcardShowContainer from './flashcard/flashcard_show_container';
import CardFormContainer from './card_form/card_form_container';
import DeckShowContainer from './deck_show/deck_show_container';
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
        {/* LeftNav */}
        <ProtectedRoute exact path="/latest" component={LeftNavContainer} />
        <ProtectedRoute path="/users/:userId" component={LeftNavContainer} />
        <ProtectedRoute path="/folders/:folderId" component={LeftNavContainer} />
        {/* Header */}
        <ProtectedRoute exact path="/users/:userId" component={DashboardHeaderContainer} />
        <ProtectedRoute exact path="/users/:userId/folders" component={DashboardHeaderContainer} />
        <ProtectedRoute exact path="/users/:userId/decks" component={DashboardHeaderContainer} />
        <ProtectedRoute exact path="/folders/:folderId" component={DashboardHeaderContainer} />
        {/* Body */}
        <ProtectedRoute exact path="/latest" component={LatestContainer} />
        <ProtectedRoute exact path="/users/:userId/folders" component={DashboardBodyContainer} />
        <ProtectedRoute exact path="/users/:userId/decks" component={DashboardDecksContainer} />
    </div>
  </div>
  <ProtectedRoute exact path="/decks/:deckId/flashcard" component={FlashcardShowContainer} />
  <ProtectedRoute exact path="/create" component={CardFormContainer} />
  <ProtectedRoute exact path="/decks/:deckId/edit" component={DeckShowContainer} />
  {/* <ProtectedRoute exact path="/decks/:deckId" component={FlashcardContainer} /> */}



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
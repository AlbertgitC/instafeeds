import React from "react";
import IndexContainer from './index/index_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { 
  Route, Redirect, Switch, Link, HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import UserProfileContainer from './user_profile/user_profile_container';
import UserFormContainer from './user_profile/user_form_container';
import UserEditPasswordFormContainer from './user_profile/user_pw_form_container';
import ShowFeedContainer from './feeds/show_feed_container';


const App = () => (
  <div className="App">
    <Switch>
      <ProtectedRoute exact path="/" component={IndexContainer} />
      <ProtectedRoute exact path="/users/:userId/edit" component={UserFormContainer} />
      <ProtectedRoute exact path="/users/:userId/editPw" component={UserEditPasswordFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/users/:userId" component={UserProfileContainer} />
      <Route path="/feeds/:feedId" component={ShowFeedContainer} />
    </Switch>
  </div>
  
);

export default App;
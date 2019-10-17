import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from "./components/root";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faCompass, faHeart, faUser, faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { merge } from 'lodash';

// import { login, signup, logout } from './actions/session_actions';
// import { fetchUser } from './actions/users_actions';


// window.login = login;
// window.logout = logout;

document.addEventListener("DOMContentLoaded", () => {
  library.add(fab, faCompass, faHeart, faUser, faCog, faPlusSquare, faEllipsisV)

  let store;
  if (window.currentUser) {
    
    const following = {
      entities: {
        users: { [window.currentUser.id]: window.currentFollowing }
      }
    };
    
    const userState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUserId: window.currentUser.id }
    };

    const preloadedState = merge(userState, following);
    
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  
  window.getState = store.getState;
  // window.dispatch = store.dispatch;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
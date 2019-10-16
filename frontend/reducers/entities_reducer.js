import { combineReducers } from 'redux';
import usersReducer from "./users_reducer";
import feedsReducer from "./feeds_reducer";


const entitiesReducer = combineReducers({
  users: usersReducer,
  feeds: feedsReducer
});

export default entitiesReducer;
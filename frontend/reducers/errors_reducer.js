import { combineReducers } from 'redux';
import authErrorsReducer from "./auth_errors_reducer";
import feedErrorsReducer from './feed_errors_reducer';

const errorsReducer = combineReducers({
  auth: authErrorsReducer,
  feed: feedErrorsReducer
});

export default errorsReducer;
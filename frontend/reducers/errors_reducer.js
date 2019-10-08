import { combineReducers } from 'redux';
import authErrorsReducer from "./auth_errors_reducer";

const errorsReducer = combineReducers({
  auth: authErrorsReducer
});

export default errorsReducer;
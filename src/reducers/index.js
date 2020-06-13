import { combineReducers } from "redux";
// import { reducer as formReducer } from 'redux-form';
import crud from "./crud";

export default combineReducers({
    crud,
    // form: formReducer
});

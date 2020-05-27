import {combineReducers, createStore} from "redux";
import companyReducer from "./company-reducer";
import businessReducer from "./business-reducer";

let reducers = combineReducers({
    companyInput: companyReducer,
    businessInput: businessReducer,
})

let store = createStore(reducers);

export default store;
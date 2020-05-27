import {combineReducers, createStore} from "redux";
import companyReducer from "./company-reducer";
import businessReducer from "./business-reducer";
import descriptionReducer from "./description-reducer";

let reducers = combineReducers({
    companyInput: companyReducer,
    businessInput: businessReducer,
    descriptionInput: descriptionReducer
})

let store = createStore(reducers);

export default store;
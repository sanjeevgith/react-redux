//root reducer only one in application
import { combineReducers } from "redux";
import cardItems from "./reducers";

export default combineReducers({
    cardItems
})
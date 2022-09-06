import { combineReducers } from "redux";
import cakeReducer from "./cake/CakeReducer";
import IceCreamReducer from "./icecream/IceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: IceCreamReducer
})

export default rootReducer


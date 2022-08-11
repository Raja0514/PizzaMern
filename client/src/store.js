import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllpizzaReducer } from "./reducers/pizzaReducers";
import { cardReducer } from "./reducers/cardReducer";
import {registerUserReducer,loginUserReducer} from './reducers/userReducer';
import {placeOrderReducer,getUserOrdersReducer} from './reducers/orderReducer';

const cardItems=localStorage.getItem('cardItems') ? JSON.parse(localStorage.getItem('cardItems')):[]
const currentUser=localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')):null

const rootreducer = combineReducers({
  getAllpizzaReducer : getAllpizzaReducer,
  cardReducer:cardReducer,
  registerUserReducer:registerUserReducer,
  loginUserReducer:loginUserReducer,
  placeOrderReducer:placeOrderReducer,
  getUserOrdersReducer:getUserOrdersReducer,
});

const initialstate = {
  cardReducer:{
    cardItems:cardItems
  },
  loginUserReducer:{
    currentUser:currentUser
  }
};

const middlware = [thunk];
const store = createStore(
  rootreducer,
  initialstate,
  composeWithDevTools(applyMiddleware(...middlware))
);

export default store;

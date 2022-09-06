const { createStore, combineReducers, applyMiddleware } = require("redux")
const { logger } = require("redux-logger")

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"
const ADD_CAKE = "ADD_CAKE"

//* ACTIONS:
const actionBuyCake = {
  type: BUY_CAKE,
  info: "About Buy Cake action"
}
const actionBuyIceCream = {
  type: BUY_ICECREAM,
  info: "About Buy IceCream action"
}
const actionAddCake = {
  type: ADD_CAKE,
  info: "About Add Cake action"
}

//* ACTION CREATORS:
function buyCake() {
  return actionBuyCake
}
function buyIceCream() {
  return actionBuyIceCream
}
function addCake() {
  return actionAddCake
}

//* REDUCERS:
const initialState = {
  numOfCakes: 10,
  numOfIceCream: 20
}

const buyReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1
      }

    default:
      return state
  }
}

const addCakeReducer = (state = initialState, action) => {
  if (action.type === ADD_CAKE) {
    return {
      ...state,
      numOfCakes: state.numOfCakes + 1
    }
  }

  return state
}

const rootReducer = combineReducers({
  buy: buyReducer,
  addCake: addCakeReducer
})
//* STORE:
const store = createStore(rootReducer, applyMiddleware(logger))

// allows access to the state:
console.log("Initial state: ", store.getState());
// allow state to be updated:
//? const unsubscribe = store.subscribe(() => console.log("Updated state: ", store.getState())) // WHY???
// store.subscribe(() => console.log("Updated state: ", store.getState())) // we have applied middleware for this
store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
//? unsubscribe() // WHY???

//! From outside we dispatch the action creator => returns the action (type) => triggers the reducer (functions) => overrides the state of the store
//! To get the state, we just get the state of the store
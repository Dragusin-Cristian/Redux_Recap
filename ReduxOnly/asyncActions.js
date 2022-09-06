const { createStore, applyMiddleware } = require("redux")
const thunkMiddleware = require("redux-thunk").default
const axios = require("axios")

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR"

// (actions are defined inside action creators)
// Normal action creators
const fetchRequestAction = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}
const fetchSuccessAction = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}
const fetchErrorAction = (error) => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error
  }
}

// actions have to be pure functions, therefore,
// we define an action thunk, so we can return functions that are not pure:
const fetchUsers = () => {
  return function(dispatch){
    dispatch(fetchRequestAction)
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      const users = response.data.map(user => user.id)
      dispatch(fetchSuccessAction(users))
    }).catch(error => {
      dispatch(fetchErrorAction(error.message))
    })
  }
}


// reducer
const initialState = {
  loading: false,
  data: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: ''
      }
    case FETCH_USERS_ERROR:
      return {
        loading: false,
        data: [],
        error: action.payload
      }
    default:
      return state
  }
}

// store
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {console.log(store.getState())})


store.dispatch(fetchUsers())
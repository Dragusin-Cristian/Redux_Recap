import { BUY_iCECREAM } from "./IceCreamTypes";

const initialState = {
  numOfIcecream: 20
}

const IceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_iCECREAM:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1
      }
  
    default:
      return state
  }
}

export default IceCreamReducer

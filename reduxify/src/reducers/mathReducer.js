const mathReducer = (state={
  result : 1,
  lastValue:[],
  username:'Max'
},action)=>{
  switch (action.type) {
    case 'ADD':
          state = {
            ...state,
            result: state.result + action.payload,
            lastValue:[...state.lastValue, action.payload]
          }
      break;
    case 'SUBSTRACT':
            state = {
              ...state,
              result: state.result - action.payload,
              lastValue:[...state.lastValue, action.payload]
            }
      break;
    default: return state

  }
  return state
}

export default mathReducer

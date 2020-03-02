const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    
    case 'GOOD':
      const gState = {...state, good : state.good + 1}
      return gState
    case 'OK':
      const oState = {...state, ok : state.ok + 1}
      return oState
    case 'BAD':
      const bState = {...state, bad : state.bad + 1}
      return bState
    case 'ZERO':
      const zState = {
        good: 0,
        ok: 0,
        bad: 0
      }
      return zState
    default: return state
  }
  
}

export default counterReducer
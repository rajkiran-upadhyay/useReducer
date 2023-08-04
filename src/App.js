
import React from 'react'
import { useReducer } from 'react'



function reducer(state, action) {

  switch (action.type) {

    case "a2": return { ...state, a2: state.a2 + action.pay }

    case "s2": return { ...state, s2: state.s2 - action.pay }

    default:
      return state
  }
}

const App = () => {
  let ins = {
    a2: 0,
    s2: 0
  }
  const [state, dispatch] = useReducer(reducer, ins)
  return (
    <>
      <p>add by 2:{state.a2}</p>
      <p>sub by 2:{state.s2}</p>
      <p></p>
      <button onClick={() => dispatch({ type: "a2", pay: 2 })}>inc</button>
      <button onClick={() => dispatch({ type: "s2", pay: 2 })}>dec</button></>

  )
}

export default App

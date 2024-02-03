import React, { useReducer } from 'react';

const reducer = (state, action) => {
  let { type } = action;

  if (type === "increase") {
    return state + 1;
  }

  return state;
};

const initialValue = 0;

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <h1>U S E  R E D U C E R</h1>
      <h3>{count}</h3>
      <button onClick={() => dispatch({ type: "increase" })}>+</button>
      <button onClick={() => dispatch({ type: "decrease" })}>-</button>
    </div>
  );
};

export default UseReducer;

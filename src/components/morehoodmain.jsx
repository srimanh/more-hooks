import React, { useReducer, useRef } from "react";
import TodoItem from '../components/TodoItem'

const todoReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    return [
      ...state,
      {
        data: action.payload,
        isHidden: false,
      },
    ];
  }

  if (action.type === "CHANGE_ISHIDDEN") {
    return state.map((e, i) => {
      return i === action.payload ? { ...e, isHidden: !e.isHidden } : e;
    });
  }

  console.log(action);
  return state;
};

const initialState = [
  {
    data: "First Item....",
    isHidden: false,
  },
];

const TodoApp = () => {
  const [todo, dispatch] = useReducer(todoReducer, initialState);

  const input = useRef(null);

  return (
    <div>
      <input
        type="text"
        ref={input}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            dispatch({ type: "ADD_ITEM", payload: e.target.value });
            e.target.value = ""; 
          }
        }}
      />

      {todo.map((e, i) => {
        return <TodoItem key={i} item={e} index={i} dispatch={dispatch} />;
      })}

      <button
        onClick={() => {
          input.current.focus();
        }}
      >
        Go back to top
      </button>
    </div>
  );
};

export default TodoApp;
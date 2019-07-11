import {
  NEW_TODO,
  TOGGLE_COMPLETE,
  DELETE_ITEM,
  EDIT_ITEM,
  UPDATE_TODO
} from "../actions";
import { id } from "postcss-selector-parser";

//creating initial state
const initialState = {
  todos: [
    {
      value: "Walk the dog",
      completed: false,
      edit: false
    },
    {
      value: "Go to the GYM",
      completed: true,
      edit: true
    }
  ]
};

function reducer(state = initialState, action) {
  //   console.log("reducer state:", state);
  switch (action.type) {
    //Creating new todo
    case NEW_TODO:
      return Object.assign({}, state, {
        todos: [
          //return the original todo list
          ...state.todos,
          {
            //Create a new item in the array
            value: action.payload,
            completed: false,
            edit: false
          }
        ]
      });
    //Toggle the clicked item as completed
    case TOGGLE_COMPLETE:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          //This match item with the toggle item
          if (index === action.payload) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            });
          }
          //   console.log("clicked:", action.payload)
          //This will return the original array minus the toggle item
          return todo;
        })
      });
    //Delete the clicked item and render a new array
    case DELETE_ITEM:
      return Object.assign({}, state, {
        todos: state.todos.filter((todo, index) => {
          //returning all the items except the one in the payload/clicked
          if (index !== action.payload) {
            return todo;
          }
          //Returning null to avoid error in the console since func expects return
          return null;
        })
      });
    case EDIT_ITEM:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          //This match item with the toggle item
          if (index === action.payload) {
            return Object.assign({}, todo, {
              edit: !todo.edit
            });
          }
          //   console.log("clicked:", action.payload)
          //This will return the original array minus the toggle item
          return todo;
        })
      });
    case UPDATE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          //This match item with the toggle item
          if (index === action.index) {
            return Object.assign({}, todo, {
              value: action.payload,
              edit: false
            });
          }
          //   console.log("clicked:", action.payload)
          //This will return the original array minus the toggle item
          return todo;
        })
      });
    default:
      //   console.log("state:", state);
      return state;
  }
}

export default reducer;

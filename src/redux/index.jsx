// const initialState = {
//   counter: 0,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREASE":
//       return { counter: state.counter + 1 };

//     case "DECREASE":
//       return { counter: state.counter - 1 };

//     case "RESET":
//       return { counter: 0 };

//     default:
//       return state;
//   }
// };

// export default reducer;

import { legacy_createStore as createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  count: counterReducer,
  todo: todoReducer,
});

export const store = createStore(rootReducer);

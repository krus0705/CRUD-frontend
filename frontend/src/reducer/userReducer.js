import {
    ADD_USER,
  GET_ALL_USER,
  DELETE_USER,
  UPDATE_USER,
} from "../action/types";

const initialState = {
  users: [],
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      console.log("producer New User:", action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case GET_ALL_USER:
      return {
        ...state,
        users: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case UPDATE_USER:
      return {
        ...state,
        // users: state.
      };
    default:
      return state;
  }
}

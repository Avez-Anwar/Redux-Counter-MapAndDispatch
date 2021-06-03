import { INCREMENT, DECREMENT } from "./counterType";

const initialState = {
  initialCount: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        initialCount: state.initialCount + 1
      };
    }
    case DECREMENT: {
      return {
        initialCount: state.initialCount - 1
      };
    }
    default:
      return state;
  }
};

export default counterReducer;

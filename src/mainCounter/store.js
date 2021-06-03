import { createStore } from "redux";
import counterReducer from "../mainCounter/counter/counterReducer";

const store = createStore(counterReducer);

export default store;

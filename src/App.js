import React from "react";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./mainCounter/store";
import Counter from "./component/counter";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;

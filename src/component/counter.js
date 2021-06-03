import { connect } from "react-redux";
import {
  incrementCounter,
  decrementCounter
} from "../mainCounter/counter/counterAction";

function Counter(props) {
  return (
    <div>
      <h1>Counter:{props.initialCount}</h1>
      <button onClick={props.incrementCounter}>increment</button>
      <button onClick={props.decrementCounter}>decrement</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    initialCount: state.initialCount
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => dispatch(incrementCounter()),
    decrementCounter: () => dispatch(decrementCounter())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

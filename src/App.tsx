import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Generic } from "./genericComponent";
import { soma, subtrai } from "./store/actions";
import { numberState } from "./store/storetool";

function App() {
  const number = useSelector((state: numberState) => state.valor);
  console.log(number);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(subtrai(5));
        }}
      >
        {" "}
        subtrai
      </button>
      <h1>{number}</h1>

      <button
        onClick={() => {
          dispatch(soma(5));
        }}
      >
        somar
      </button>
      <Generic></Generic>
    </div>
  );
}

export default App;

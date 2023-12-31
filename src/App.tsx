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
      esse commit foi feito na minha feature-1 com base na development esse
      commit foi feito na feature-2 ainda com base na development segundo commit
      na feature-2 pra fazer squash hot fixx na release na feature-2 pra fazer
      squash commit direto na minha development
    </div>
  );
}

export default App;

import { useSelector } from "react-redux";
import { RootState } from "./store/reducer";

export const Generic = () => {
  const number = useSelector((state: RootState) => state.valor);

  return (
    <div>
      <h3>{number}</h3>
    </div>
  );
};

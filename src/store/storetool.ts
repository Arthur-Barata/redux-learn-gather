import { configureStore, createSlice } from "@reduxjs/toolkit";

export interface numberState {
  valor: number;
}
const number: numberState = { valor: 1 };

export interface IStore {
  number: numberState;
}

const numberSlice = createSlice({
  name: "number",
  initialState: number,
  reducers: {
    somar: (state: numberState, action) => {
      state.valor += action.payload;
      return state;
    },
    subitrair: (state: numberState, action) => {
      state.valor -= action.payload;
      return state;
    },
  },
});

export const storeTool = configureStore({
  reducer: {
    number: numberSlice.reducer,
  },
});

export const somar = (payload: number) => {
  storeTool.dispatch(numberSlice.actions.somar(payload));
};

export const subitrair = (payload: number) => {
  storeTool.dispatch(numberSlice.actions.subitrair(payload));
};

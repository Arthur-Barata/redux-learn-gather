interface numberState {
  valor: number;
}

const initialState = {
  valor: 1,
};

export const rootReducer = (state: numberState = initialState, action: any) => {
  switch (action.type) {
    case "SOMA":
      return { ...state, valor: state.valor + action.payload };
    case "SUBTRAI":
      return { ...state, valor: state.valor - action.payload };
    default:
      return state;
  }
};
export type RootState = ReturnType<typeof rootReducer>;

import { BUY_CAKE, BUY_ICE_CREAM } from "./actionType";

const initialState = {
  totalCake: 50,
  soldCake: 0,
  totalIceCream: 100,
  soldIceCream: 0,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        totalCake: state.totalCake - 1,
        soldCake: state.soldCake + 1,
      };
    case BUY_ICE_CREAM:
      return {
        ...state,
        totalIceCream: state.totalIceCream - 1,
        soldIceCream: state.soldIceCream + 1,
      };
    default:
      return state;
  }
};

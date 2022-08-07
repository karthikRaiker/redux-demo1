import { BUY_CAKE, BUY_ICE_CREAM } from "./actionType";

export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};

export const buyIceCream = () => {
  return {
    type: BUY_ICE_CREAM,
  };
};

import React from "react";
import { connect } from "react-redux";
import { buyIceCream, buyCake } from "../redux";

function ShopContainer(props) {
  return (
    <div>
      <p>totalCake: {props.totalCake}</p>
      <p>totalIceCream: {props.totalIceCream}</p>
      <p>soldCake: {props.soldCake}</p>
      <p>soldIceCream: {props.soldIceCream}</p>
      <button onClick={props.buyCake}>Buy Cake</button>
      <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    totalCake: state.totalCake,
    soldCake: state.soldCake,
    totalIceCream: state.totalIceCream,
    soldIceCream: state.soldIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopContainer);

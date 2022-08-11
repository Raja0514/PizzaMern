import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../action/orderAction";
import Lodar from "./Loader";
import Error from "./Error";
import Success from "./Success";

const Checkout = ({ amount }) => {
  const orderstate = useSelector((state) => state.placeOrderReducer);

  const { loading, error, success } = orderstate;

  const tokenHandler = (token) => {
    dispatch(placeOrder(token, amount));
    console.log(token);
  };

  const dispatch = useDispatch();

  return(
    <>
    {
    loading && <Lodar/>
  }

  {
    error && <Error error="something went wrong" />
  }

  {
    success && <Success success="Order Successfully submitted" />
  }

  <StripeCheckout
    amount={amount * 100}
    shippingAddress
    token={tokenHandler}
    stripeKey="pk_test_51LOLE0IiRJ8k8WS4MzPBRv39mb6ws2RHzbq9D6oIuaBDASrJWJkNbpIcD7st7kcw4Zfiv2Phz17DZgnUHahUmlBx00Ax4XQTYr"
    currency="INR"
  >
    <Button>Pay Now</Button>
  </StripeCheckout>
    </>
  )  
};
export default Checkout;

import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import { useSelector,useDispatch } from "react-redux";

import {BsFillFileMinusFill,BsFillTrashFill,BsFilePlusFill} from 'react-icons/bs';

import {addToCart,deletefromCart} from '../action/cardAction'
import Checkout from "../Components/Checkout";
 
const Cart = () => {
  const cartstate = useSelector((state) => state.cardReducer);

  const cardItems = cartstate.cardItems;

  const dispatch=useDispatch();

  const SubTottal=cardItems.reduce((x,item)=>x+item.price,0)

  return (
    <>
      <Container style={{ marginTop: "40px", marginBottom: "80px" }}>
        <Row className="p-3" style={{ marginBottom: "50px", border: "1px solid lightgrey" }}>
          <Col md={6}>
            <h3 className="p-1">My Cart Items</h3>
            <hr></hr>
            <Row>
              {cardItems.map((item) => (
                <>
                  <Col md={7}>
                    <h6>
                      {item.name}[{item.varient}]
                    </h6>

                    <h6>
                      Price:{item.quantity}x{item.prices[0][item.varient]}={""}
                      {item.price}
                    </h6>
                    <h6>Quantity:&nbsp;
                    <BsFilePlusFill
                     style={{cursor:"pointer"}}
                     onClick={()=>{dispatch(addToCart(item,item.quantity+1,item.varient))}}
                    className="text-primary"/>&nbsp;
                      {item.quantity}&nbsp;
                      <BsFillFileMinusFill
                      style={{cursor:"pointer"}}
                      onClick={()=>{dispatch(addToCart(item,item.quantity-1,item.varient))}}
                      className="text-danger"/>&nbsp;
                      </h6>
                  </Col>
                  <Col md={5} className="p-1">
                    <img
                      alt={item.name}
                      src={item.image}
                      style={{ width: "80px", height: "80px" }}
                    />&nbsp;&nbsp;&nbsp;&nbsp;
                    <BsFillTrashFill

                    style={{cursor:"pointer"}}

                    onClick={()=>{dispatch(deletefromCart((item)))}}
                    
                    className="text-danger"/>
                  </Col>
                </>
              ))}
            </Row>
          </Col>

          <Col md={6}>
            <h3 className="p-1"> Payment Info</h3>
            <hr></hr>
            <h5>Total Amount</h5>
            <h5>RS:{SubTottal}/-</h5>
            <Checkout amount={SubTottal}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cart;

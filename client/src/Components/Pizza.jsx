import React from "react";
import { Card, Row, Col, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import {useDispatch} from 'react-redux';
import {addToCart} from '../action/cardAction'

const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch=useDispatch()

  const addtoCardHandler=()=>{

    dispatch(addToCart(pizza,quantity,varient))

  }


  return (
    <>
      <Card style={{ width: "18rem", marginTop: "30px" }}>
        <Card.Img
          variant="top"
          onClick={handleShow}
          src={pizza.image}
          style={{ height: "220px", cursor: "pointer" }}
        />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <hr></hr>
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6>Varients</h6>
                <select
                  value={varient}
                  onChange={(e) => setVarient(e.target.value)}
                >
                  {pizza.varients.map((varient,index) => {
                    return (
                      <>
                      
                        <option key={index}>{varient}</option>
                      </>
                    );
                  })}
                </select>
              </Col>
              <Col md={6}>
                <h6>Quantitity</h6>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((i,index) => {
                    return (
                      <>
                        <option key={index} value={i + 1}>{i + 1}</option>
                      </>
                    );
                  })}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6}>price:{pizza.prices[0][varient] * quantity}-INR</Col>
            <Col>
              <Button 
              
               onClick={addtoCardHandler}
              className="bg-dark text-white">Add to Cart</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* <p>Model</p> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Card.Img
              variant="top"
              src={pizza.image}
              style={{ height: "220px" }}
            />
          </div>
          <div>
            <h5>Description:</h5>
            <h6>{pizza.description}</h6>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
export default Pizza;

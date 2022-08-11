import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../action/userAction";
import Loader from "../Components/Loader";
import Success from "../Components/Success";
import Error from "../Components/Error";

const Register = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [conformPassword, setconformPassword] = useState("");

  const dispatch = useDispatch();

  const registerState=useSelector(state=>state.registerUserReducer)

  const {error,success,loading}=registerState

  const registerHandler = () => {
    if (password !== conformPassword) {
      alert("Password Does not Match");
    } else {
      const user = { name, email, password, conformPassword };

      //console.log(user)

      dispatch(registerUser(user));

      setEmail("");

      setName("");

      setPassword("");

      setconformPassword("");

     
    }
  };

  return (
    <>
      <Container style={{ marginTop: "80px" }}>
        { loading && <Loader/>}
        {success &&<Success success="User Register Suceesfully" />}
        {error && <Error error=" Error On Fetching data"/>}


        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <h1 className="text-center">Registeration</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter your Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your Email "
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicConformPassword">
                <Form.Label>Conform Password</Form.Label>
                <Form.Control
                  value={conformPassword}
                  onChange={(e) => setconformPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Button variant="primary" onClick={registerHandler}>
                Register
              </Button>
            </Form>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;

import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container,Row,Col} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux';
import {loginUSer} from '../action/userAction';
import Loader from "../Components/Loader";
import Success from "../Components/Success";
import Error from "../Components/Error";

const Login = () => {

  const [email,setEmail]=useState('');

  const [password,setPassword]=useState('');

  const dispacth=useDispatch();

  const loginState=useSelector(state=>state.loginUserReducer)

  const {error,success,loading}=loginState


  useEffect(()=>{

    if(localStorage.getItem('currentUser')){

      window.location.href="/"
    }

  },[])

 const loginHandler=()=>{

  const user={email,password}

  dispacth(loginUSer(user))

  }

  return (
    <>
    <Container style={{marginTop:'80px'}}>

    { loading && <Loader/>}
        {success &&<Success success=" login Suceesfully" />}
        {error && <Error error=" Error On Fetching data"/>}


        <Row>
            <Col md={2}></Col> 
            <Col md={8}>
            <h1 className='text-center'>Login</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email"
        placeholder="Enter your email"
        
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
         type="password"
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" 
      
      onClick={loginHandler}
      >
        Login
      </Button>
    </Form>
            </Col>
            <Col md={2}></Col>
        </Row>
        
        
    </Container>
     
 
    </>
  )
}

export default Login

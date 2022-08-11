import React,{useEffect} from 'react'

import {getUserOrders} from '../action/orderAction';

import {useDispatch,useSelector} from 'react-redux';

// import Lodar from '../Components/Loader';

// import Error from '../Components/Error';

import {Row,Col} from 'react-bootstrap'


const Order = () => {

   const orderstate=useSelector(state=>state.getUserOrdersReducer)
   const {orders}=orderstate
   const dispatch=useDispatch()

  useEffect(()=>{

    dispatch(getUserOrders());
  },[dispatch])

  return (
    <>
      
      <h2 className='text-center  p-2'>Orders</h2>
      

      {orders && orders.map((order,index)=>(
        <div className='container border  p-4 bg-light'>
          
          <Row>
        <Col md={4}>

          <h4  key={index} className='p-1'>Details of Item</h4>
         
          {order.orderItems.map((item,index)=>(
          <h6 key={index}>{item.name}[{item.varient}]*{item.quantity}={item.price}</h6>
         ))}

        </Col>
        <Col md={4}>
          <h4 className='p-1'>Address</h4>
          <h6>Street:{order.shippingAddress.street}</h6>
          <h6>City:{order.shippingAddress.city}</h6>
          <h6>Pincode:{order.shippingAddress.pincode}</h6>
          <h6>Country:{order.shippingAddress.country}</h6>
           
        </Col>
        <Col md={4}>
          <h4 className='p-1'>Order Info</h4>

          <h6>Order Amount:{order.orderAmount}</h6>
          <h6 className='text-primary'>Trans Id:{order.transectionId}</h6>
          <h6 className='text-danger'>Order id:{order._id}</h6>
          
        </Col>
      </Row></div>
          
      ))}




    </>
  )
}

export default Order

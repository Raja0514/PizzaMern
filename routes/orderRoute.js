const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51LOLE0IiRJ8k8WS4VlnhMgFOitdmeTCaiUshslt9fVoKUpNOVnzpJBpR6SPn1gJ9lHornaXhBv4kfPvy1xq3wj4q00lmWqujRB"
);

const model=require('../models/orderModel')

//secret key stripe
router.post("/placeorder", async (req, res) => {
  const { token, amount, currentUser, cardItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      //refer stripe lib

      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        //this data from stipe lib side
        amount: amount * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {

     const neworder=new model({

      name:currentUser.name,
      email:currentUser.email,
      userid:currentUser._id,
      orderItems:cardItems,
      orderAmount:amount,
      shippingAddress:{
           
        street:token.card.address_line1,
        city:token.card.address_city,
        country:token.card.address_country,
        pincode:token.card.address_zip,
       },
       
       transectionId:payment.source.id
     })

     neworder.save()

      res.send("Payment Success");
    } else {
      res.send("Payment Failed");
    }
  } catch (error) {
    res.status(400).json({
      message: "something went wrong",

      error: error.stack,
    });
  }
});

router.post('/getuserorder',async(req,res)=>{

  const {userid}=req.body

  try{

    const orders=await model.find({userid}).sort({_id:'-1'})

    res.status(200).send(orders)

  }

  catch(error){

    res.status(400).json({

      message:'something went wrong',
      error:error.stack,
    })

  }

})






module.exports = router;

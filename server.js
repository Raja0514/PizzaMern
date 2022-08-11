const express = require("express");
const morgan = require("morgan");
const dotenv=require('dotenv')
const path=require('path')
const connectDB=require('./config/config')
dotenv.config()

connectDB();


const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));

//routes
const router1=require('./routes/pizzaRoute')
app.use("/api/pizzas",router1)

const router2=require('./routes/userRoute')
app.use("/api/users",router2)

const router3=require('./routes/orderRoute')
app.use("/api/orders",router3)

if(process.env.NODE_ENV==='production'){

  app.use(express.static(path.join(__dirname,'/client/build')))
  
  app.get('*',(req,res)=>{

    res.sendFile(path.resolve(__dirname,"client","build","index.html"))
  })

}

else{
  app.get("/", (req, res) => {
    res.json("server start up");
  });
  
}


const port=process.env.PORT||8080;



app.listen(port, () => {
  console.log(`Server running on ${process.env.NODE_ENV} mode on port ${process.env.PORT}`);
});

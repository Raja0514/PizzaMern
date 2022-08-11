const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/config");
const pizza = require('./models/pizzaModel');
const pizzas = require('./data/pizza')
//dot env and database connection
dotenv.config();
connectDB();
//import data
const importdata = async () => {
  try {
    pizza.deleteMany();
    const sampledata = pizzas.map((pizza) => {return { ...pizza };
    });
      await pizza.insertMany(sampledata);
    console.log("Data imported");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

const datadestroy=()=>{}

if(process.argv[2]==='d'){

    datadestroy()
}
else{

    importdata();
}
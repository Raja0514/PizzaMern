const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const url = process.env.MONGO_URL;

    const conn = await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`DB Conected ${conn.connection.host}`);
  } catch (err) {
    console.log(`err:${err.message}`);
  }
};

module.exports=connectDB;

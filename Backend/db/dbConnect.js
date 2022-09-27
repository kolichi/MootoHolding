
// external imports
const mongoose = require("mongoose");
// require('dotenv').config() if atlast is in use and a .env file is created in source folder

async function dbConnect() {
  // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
  mongoose
    .connect(
        "mongodb://localHost:27017/authentication",
      {
        //   these are options to ensure that the connection is done properly
        
        //THE BELOW OPTIONS ARE TO BE USED WHEN TE MONGOOSE USED IS DEPRICATED OR AN OLD VERSION OTHERWISE NEWER VERSION DONT NEED THEM

        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useCreateIndex: true,
      }
    )
    .then(() => {
      console.log("Successfully connected to MongoDB Compass!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Compass!");
      console.error(error);
    });
}

 module.exports = dbConnect;

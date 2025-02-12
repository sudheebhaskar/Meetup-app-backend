// const mongoose = require('mongoose');

// const mongoURI = process.env.MONGODB_URI;

  
// const initializeDatabase = async () => {
//   try{
//     const connection = await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     if(connection){
//       console.log('Connected Successfully');
//     }
//   } catch(error){
//     console.log('Connection Failed', error);
//   }
// }

// module.exports = { initializeDatabase };

const mongoose = require('mongoose');
require('dotenv').config();

const initializeDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
  }
};
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
const fs = require('fs');
const path = require('path');

// MongoDB connection without deprecated options
const initializeDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed', error);
  }
};

// Check if 'events.json' exists before reading
const filePath = path.join(__dirname, 'events.json');
if (fs.existsSync(filePath)) {
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const eventsData = JSON.parse(jsonData);
} else {
  console.error('Error: events.json file not found!');
}

module.exports = { initializeDatabase };

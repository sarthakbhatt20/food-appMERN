const mongoose = require('mongoose');
const mongoURI="mongodb+srv://sarthakbhatt2211:sarthak2211@cluster0.qeyjgla.mongodb.net/?retryWrites=true&w=majority"
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected!');
    let fetched_data = mongoose.connection.db.collection("foodItems");
    let data=await fetched_data.find({}).toArray() 
    // console.log(data);
  } catch (error) {
    console.log('err: ', error);
  }
};
module.exports=mongoDB;
const mongoose=require('mongoose');
require('dotenv').config();
const URl=process.env.MONGOURL;
mongoose.connect(URl);
const db=mongoose.connection;
db.on('connected',()=>{
    console.log('database is connected')
})
db.on('disconnected',()=>{
   console.log('databse is disconnected')
})
db.on('error',()=>{
    console.log('error');

})


module.exports=db;
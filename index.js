const express=require('express');
const bodyparser=require('body-parser');
const db=require('./connectDB');
const PORT=process.env.PORT||3000;
const urlRoutes=require('./routes/url')
const app=express();
app.use(bodyparser.json());
app.use('/',urlRoutes)







app.listen(PORT,()=>{
    console.log(`The server is running on the port:${PORT}`);
})
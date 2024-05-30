const express=require('express');
const bodyparser=require('body-parser');
const path=require('path');
const db=require('./connectDB');
const PORT=process.env.PORT||3000;
const urlRoutes=require('./routes/url')
const staticRoutes=require('./routes/staticRoutes')
const app=express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded())
app.set('view engine','ejs')
app.set('views',path.resolve('./views'));
app.use('/',staticRoutes);
app.use('/URL',urlRoutes);






app.listen(PORT,()=>{
    console.log(`The server is running on the port:${PORT}`);
})
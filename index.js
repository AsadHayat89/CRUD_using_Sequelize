const express=require("express");
const app=express();


const db=require('./models');
const {User}=require('./models');
app.get('/AddDatabase',(req,res)=>{
    User.create({
        firstName:"Asad",
        LastName:"Hayat"
   }).then((res)=>{
        console.log("data create: "+res);
   }).catch(e=>{
        console.log("error found: "+e);
   });
   res.send("success");
});


db.sequelize.sync().then((req) => {
    app.listen(3000,()=>{
        console.log("Running successfully");
    })
});

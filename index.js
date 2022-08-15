
var express = require('express');
var app = express();

app.use(express.json());

app.get("/",(req,res)=>{
res.send("Hello Heroku");
});

app.listen(process.env.PORT || 5000,()=>{
    console.log("server");
})
const express= require("express");
const app = express();
app.get('/',function(req,resp){
resp.send("Hello World");
});
app.listen(4000,function(){
    console.log("server running on 4000")});


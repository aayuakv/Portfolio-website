//jshint esversion:6
const express=require('express');
const app = express();



app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname+"\index.html");
})





app.listen(process.env.PORT||3000,function(){
  //if we want that our app work on both heroku and local server then use or symbol
  console.log("server is running on port 3000");
})

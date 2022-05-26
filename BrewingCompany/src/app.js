const express = require("express");
const path = require("path");
const app = express();
const hostname = "127.0.0.1";
const port = 100;

const staticpath = path.join(__dirname,'../public');
app.use(express.static(staticpath));

app.get("/",(req,res)=>{
    app.send('index.html');
});

// app.get("/about",(req,res)=>{
//     app.send('index.html');
// });

app.listen(port,hostname,()=>{
    console.log(`The application is running at ${hostname}:${port}/`);
})
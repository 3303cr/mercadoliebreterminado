const express = require("express");

const path = require ("path");

const app = express();


app.use(express.static(path.resolve(__dirname, "./public")));

const port = process.env.PORT || 3000;

app.listen(port, function ()  {
    (console.log("servidor escuchando en puerto 3000"));
})



app.get("/", function(req, res)  {
    res.sendFile(path.join(__dirname, "./views/home.html"));
    
})
app.get("/register", function(req, res)  {
    res.sendFile(path.join(__dirname, "./views/register.html"));
    
})
app.get("/login", function(req, res)  {
    res.sendFile(path.join(__dirname, "./views/login.html"));
    
})

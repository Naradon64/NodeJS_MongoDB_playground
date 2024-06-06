const express = require("express");
const mongoose = require("mongoose");
const app = express()
const port = 5050;

app.get("/", (req, res) =>{
    res.send("Hello World");
});

app.post('/api/userbases', (req, res) =>{
    console.log(req.body)
});




mongoose.connect("mongodb+srv://naradon64:afSOC9Dt2c2YvRBA@cluster0.cwdjecy.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
.then(() =>{
    console.log("Connected to the database!")
    app.listen(port, () => {
        console.log(`listening to port: ${port} `);
    })
})
.catch(()=>{
    console.log("Connection fail.")
})
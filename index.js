const express = require("express");
const mongoose = require("mongoose");
const app = express()
const port = 5050;


const userbase = require('./models/model.userbase.js');
app.use(express.json());


app.get("/", (req, res) =>{
    res.send("Hello World");
});

//get all from the database
app.get('/api/userbase', async (req, res) =>{
    try{
        const username = await userbase.find({});
        res.status(200).json(username)
    }catch(error){
        res.status(500).json({message: error.message});
    };
});

//specify what user you want through ID
//access this thru localhost:5050/api/userbase/6410406720 <- example
app.get('/api/user/:ID', async (req, res) =>{
    try{
        const {ID} = req.params;
        const username = await userbase.find({ ID: ID });
        res.status(200).json(username)
    }catch(error){
        res.status(500).json({message: error.message});
    };
});


app.post('/api/user', async (req, res) =>{
    try{
        const username = await userbase.create(req.body);
        res.status(200).json(username)
    }catch(error){
        res.status(500).json({message: error.message});
    };
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

//const monitoring = require('monitoring')
require('dotenv').config();
const express = require("express")
const axios = require('axios')
const {countAllRequests} = require('./monitoring');

const PORT = process.env.PORT || "8080"

const app = express();

countAllRequests();
// app.use(countAllRequests())

app.get('/middle',(req,res) => {
    axios
    .get(`http://localhost:${PORT}/backend`)
    .then(() => axios.get(`http://localhost:${PORT}/backend`))
    .then(result => {
        res.send(result.data)
    })
    .catch(err => {
        console.error(err)
        res.status(500).send()
    })
})

app.get("/" , (req,res) => {
    res.send('Hello Wolrd')
})

app.get("/backend" , (req,res) => {
    res.send('Welcome to backend')
})

app.get("/date" , (req,res) => {
    res.json({ today: new Date() });
})


app.listen(parseInt(PORT,10),() => {
    console.log(`Listening for requests on http://localhost:${PORT}`)
})




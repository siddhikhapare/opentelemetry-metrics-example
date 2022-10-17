// const tracing = require('./tracing');
// //const {countAllRequests} = require('./monitoring');

// tracing.start()
//     .then(() => {
//         require('dotenv').config();
//         const PORT = process.env.PORT || "8080"
//         const express = require("express")
//         //const {countAllRequests} = require('./monitoringfirst');
//         const countAllRequests = require('./monitoring');
//         const app = express()

//         app.use(countAllRequests())

//         app.get("/" , (req,res) => {
//             res.send('Hello Wolrd')
//         })

//         app.get("/date" , (req,res) => {
//             res.json({ today: new Date() });
//         })


//         app.listen(parseInt(PORT,10),() => {
//             console.log(`Listening for requests on http://localhost:${PORT}`)
//         })

//     }
// );



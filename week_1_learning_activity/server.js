require('dotenv').config();
const express = require('express');
const cors = require('cors')
const mongodb = require('./db/connect')
const app = express();
const port = process.env.PORT || 8080;

const professionalRoutes = require('./routes/professional')

app.use(cors())
app.use(express.json())

app.use('/professional',professionalRoutes)


mongodb.initDb((err, mongodb) => {
    if(err){
        console.log(err)
    } else {
        app.listen(port)
        console.log(`we are connected to DB and listening on ${port}`)
    }
})
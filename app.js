require('./db/connect')
const express = require("express");
const app = express();
const students = require("./routers/students");
const connectDB = require('./db/connect');
const bodyParser = require('body-parser');
require('dotenv').config()
const cors = require("cors");

// MIDDLEWARES
app.use(cors())
app.use(bodyParser.json())
// app.use(express.json())

// ROUTES
app.use('/api/students', students)


app.use((req,res) => {
    res.status(404).send("Route Doesn't Exist!")
})

app.use((err, req, res, next) => {
    return res.status(500).json({msg: err})
})

const port = process.env.PORT || 3000

let start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is running on port - ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()


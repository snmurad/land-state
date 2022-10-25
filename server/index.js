// Importing Modules
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser')

const PropertyBooking = require('./controllers/PropertyBookingController')
const Property = require('./controllers/Property')

// Application
const app = express()

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

// DB
mongoose
    .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>
    console.log("DB Connected")
).catch((err) =>
    console.log("DB Connection Error", err)
)

// middleware
app.use(morgan('dev'))
app.use(cors({origin:true, credentials: true}))

// routes
app.post('/', (req, res) => {
    ({amount, ptype} = req.body)
    let properties = []
    properties.push(new Property('1', '1', 10, amount, ptype, '1'))
    properties.push(new Property('2', '1', 5, amount, ptype, '1'))

    let Land = new PropertyBooking('23', properties, '1', 40, new Date('2020'), 50000)
    Land.register()

    res.send('Addition Successfull')
})
// port
const port = process.env.PORT || 8080

// Listeners
const server = app.listen(port, () => {
    console.log(`Server is Running ${port}`)
})
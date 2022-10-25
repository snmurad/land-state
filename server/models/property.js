const mongoose = require('mongoose')
const Schema = mongoose.Schema

const property = new Schema({
    townId: {
        type: String,
        required: true
    },
    area: {
        type: Number,
        required: true
    },
    ratePerMarla: {
        type: Number,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    plotType: {
        type: String,
        required: true
    },
    cid: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const PropertyModel = mongoose.model('Property', property)
module.exports = PropertyModel
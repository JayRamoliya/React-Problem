const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true, "price must be provided"]
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: `{VALUE} is not supported`
        }
    },
    // description: String,
    // image: String,
    // category: String,
    // subcategory: String,
    // brand: String,
    // reviews: Number,
    // stock: Number,
    // color: String,
    // size: String,
    // gender: String,
    // weight: Number,
    // height: Number,
    // width: Number,
    // length: Number,
    // material: String,
    // warranty: String,
    // returnPolicy: String,
    // shipping: String,
    // delivery: String,
    // country: String,
    // state: String,
    // city: String,
    // pincode: String,
    // date: { type: Date, default: Date.now }
})


module.exports = mongoose.model('Product',productSchema)
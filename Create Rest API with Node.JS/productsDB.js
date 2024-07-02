require("dotenv").config()

const connectDB = require("./db/connect")
const Product = require('./models/productsmodels')
const products = require('./products.json')


const start = async () => {
    try {
        await connectDB(process.env.PORT)
        await Product.create(products)
    } catch (error) {
        console.log(error)
    }

}
start()
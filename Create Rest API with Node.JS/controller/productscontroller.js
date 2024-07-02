const Product = require('../models/productsmodels')


const getallproducts = async (req,res) => {
    // const mydata =  await Product.find({})
    const mydata =  await Product.find(req.query)
    // const mydata =  await Product.find({name:"Caressa Desk"})
    res.status(200).json({
        msg:"i am a products",
        data:mydata
    })
}



const getallproductstesting = async (req,res) => {
    res.status(200).json({msg:"i am a products testing"})
}


module.exports = {getallproducts, getallproductstesting}
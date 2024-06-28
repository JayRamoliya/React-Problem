const getallproducts = async (req,res) => {
    res.status(200).json({msg:"i am a products"})
}

const getallproductstesting = async (req,res) => {
    res.status(200).json({msg:"i am a products testing"})
}


module.exports = {getallproducts, getallproductstesting}
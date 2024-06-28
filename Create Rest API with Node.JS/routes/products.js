const express = require('express')

const router = express()

const {getallproducts,getallproductstesting} = require('../controller/productscontroller')

router.route('/').get(getallproducts)
router.route('/testing').get(getallproductstesting)

module.exports = router
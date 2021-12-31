const router = require('express').Router();
const htmlRoute = require('./htmlRoute')

router.use(htmlRoute);

module.exports = router;
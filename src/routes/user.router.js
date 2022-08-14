const express = require('express')
const Router = express.Router()
Router.get("/", function (req, res) {
    return res.send("Hello user")
})
module.exports = Router
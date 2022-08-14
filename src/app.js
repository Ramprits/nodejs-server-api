require("dotenv").config()
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors')
const helmet = require('helmet')

//initializing the app 
const app = express()

//required middleware
app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require("./helpers/readFiles")(app, "routes")
app.use(express.static(path.join(__dirname, '..', 'public')))

// app.get("/*", function (req, res) {
//     res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
// })

module.exports = app
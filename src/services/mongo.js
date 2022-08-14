const mongoose = require("mongoose")

module.exports = () => {
    mongoose.connect(process.env.MONGO_URI);

    mongoose.connection.once("connected", () => {
        console.log("mongo database connection up")
    })

}

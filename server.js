const fs = require("fs");
const path = require("path");
const https = require("https");
const cluster = require("cluster");
const app = require("./src/app");
const mongo = require("./src/services/mongo");
const PORT = process.env.PORT || 3333
const server = https.createServer({
    key: fs.readFileSync(path.join(__dirname, '.', 'src', 'certificate', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, '.', 'src', 'certificate', 'cert.pem'))
}, app);

if (cluster.isMaster) {
    // const NUM_CPUS = os.cpus().length
    // for (let i = 0; i < NUM_CPUS; i++) {
    //        cluster.fork()
    // }
    cluster.fork()
} else {
    server.listen(PORT, async (err) => {
        if (err) return console.log(err);
        mongo()
        console.log(`Server listening on port ${PORT}`)
    })
}

const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const jerseySchema = new mongoose.Schema({
    total: Number,
    players: [String],
    color: String,
    autographed: Boolean
})


module.exports = mongoose.model("Jereys", jerseySchema)

const mogoose = require("mongoose");

const authorSchema = new mongoose.Schema({});

module.exports = mongoose.model("Author", authorSchema);

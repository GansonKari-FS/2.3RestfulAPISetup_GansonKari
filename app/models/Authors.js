const mogoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  //properties
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Author", authorSchema);

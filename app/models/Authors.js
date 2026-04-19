const mogoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  //properties
  name: {
    type: String,
    required: [true, "You are requiredx to hav e an author"],
    trim: true,
    maxlength: [50, "your name is to. long"],
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email",
    ],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
    maxlength: [500, "Description cannot be more than 500 characters"],
  },
});

module.exports = mongoose.model("Author", authorSchema);

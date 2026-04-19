const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: [50, "Name can not be more than 50 characters"],
    },
    genre: {
      type: [String],
      required: true,
      enum: [
        "Web Development",
        "Mobile Development",
        "UX,UI",
        "Data Science",
        "Business",
        "Other",
      ],
    },
    averageRating: {
      type: Number,
      min: [1, "Rating must be at least 1"],
      max: [10, "Rating can not be more than 10"],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
  },

  { timestamps: true },
);

module.exports = mongoose.model("Book", bookSchema);

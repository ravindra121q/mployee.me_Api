const { default: mongoose } = require("mongoose");

const postSchema = mongoose.Schema(
  { userId: String, content: String },
  { versionKey: false }
);

const postModel = mongoose.model("posts", postSchema);

module.exports = { postModel };

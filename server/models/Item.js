const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  id: {
    type: Number,
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
  },
  avatar: {
    type: String,
  },
  domain: {
    type: String,
  },
  available: {
    type: Boolean,
  },
});
module.exports = mongoose.model("item", itemSchema);

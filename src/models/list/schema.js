const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  description: {
    type: String,
    required: [true],
  }
});

module.exports = { schema };
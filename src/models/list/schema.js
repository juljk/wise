const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  description: {
    type: String,
    required: [true],
  },
  createdID: {
    type: ObjectId,
  }
});

module.exports = { schema };
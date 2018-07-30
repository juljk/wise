const mongoose = require('mongoose');
const { schema } = require('./schema');
const List = mongoose.model('List', schema);

module.exports = { List };
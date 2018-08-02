const express = require('express');

const { errorHandler } = require('../helpers');

// list of models here
const { List } = require('../models/list');
const { Item } = require('../models/item');

// list of controllers here
const lists = require('../controllers/lists');
const items = require('../controllers/items');

// combine models ino one object
const models = { List, Item };

const routersInit = config => {
  const router = express();

  // register api points

  router.use('/lists', lists(models));
  router.use('/items', items(models));

  // catch api all errors
  router.use(errorHandler);
  return router;
};

module.exports = routersInit;
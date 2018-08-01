const { Router: router } = require('express');

const { list } = require('./list');
const { create } = require('./create');
const { remove } = require('./remove');

module.exports = (models) => {
  const api = router();

  api.get('/', list(models));  
  api.post('/', create(models));  
  api.delete('/:_id', remove(models));
  
  return api;
};
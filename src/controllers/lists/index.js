const { Router: router } = require('express');

const { get } = require('./get');
const { list } = require('./list');
const { create } = require('./create');
const { update } = require('./update');
const { remove } = require('./remove');

module.exports = (models) => {
  const api = router();

  api.get('/', list(models));
  api.get('/:_id', get(models));
  api.post('/', create(models));
  api.patch('/:_id', update(models));
  api.delete('/:_id', remove(models));
  
  return api;
};
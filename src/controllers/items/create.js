const { NotAcceptable } = require('rest-api-errors');
const { sendOne } = require('../../helpers');
const _ = require('lodash');

const create = ({ Item }) => async (req, res, next) => {
  try {
    const item = new Item();
    if (!req.body.description) {
      throw new NotAcceptable(405, 'Should by description}');
    }
    _.extend(item, req.body);
    await item.save();

    return sendOne(res, { item });
  } catch (error) {
    next(error);
  }
};

module.exports= { create };

const { NotAcceptable } = require('rest-api-errors');
const { sendOne } = require('../../middleware');
const _ = require('lodash');

const create = ({ List }) => async (req, res, next) => {
  try {
    const list = new List();
    if (!req.body.description) {
      throw new NotAcceptable(405, 'Should by description}');
    }
    _.extend(list, req.body);
    await list.save();

    return sendOne(res, { list });
  } catch (error) {
    next(error);
  }
};

module.exports= { create };

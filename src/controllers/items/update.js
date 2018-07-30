const _ = require('lodash');

const update = ({ Item }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const item = await Item.findOne({ _id });
    _.extend(item, req.body);
    await item.save();
    res.status(200).send({ item });
  } catch (error) {
    next(error);
  }
};

module.exports= { update };
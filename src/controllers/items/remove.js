const _ = require('lodash');

const remove = ({ Item }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const item = await Item.findOne({ _id });
    await Item.remove({ _id });
    res.status(200).send({ item });
  } catch (error) {
    next(error);
  }
};

module.exports= { remove };
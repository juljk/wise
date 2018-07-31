const _ = require('lodash');

const list = ({ Item }) => async (req, res, next) => {

  try {
    const query = {};

    const items = await Item.find(query)
    .sort({ _id: -1 })

    res.status(200).send({ items });
  } catch (error) {
    next(error);
  }
};

module.exports= { list };
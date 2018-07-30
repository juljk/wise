const _ = require('lodash');

const update = ({ List }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const list = await List.findOne({ _id });
    _.extend(list, req.body);
    await list.save();
    res.status(200).send({ list });
  } catch (error) {
    next(error);
  }
};

module.exports= { update };
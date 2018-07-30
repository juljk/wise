const _ = require('lodash');

const remove = ({ List }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const list = await List.findOne({ _id });
    await List.remove({ _id });
    res.status(200).send({ list });
  } catch (error) {
    next(error);
  }
};

module.exports= { remove };
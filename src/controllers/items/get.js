const get = ({ Item }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const item = await Item.findOne({ _id });
    res.status(200).send({ item });
  } catch (error) {
    next(error);
  }
};

module.exports= { get };
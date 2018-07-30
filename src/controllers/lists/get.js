const get = ({ List }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const list = await List.findOne({ _id });
    res.status(200).send({ list });
  } catch (error) {
    next(error);
  }
};

module.exports= { get };
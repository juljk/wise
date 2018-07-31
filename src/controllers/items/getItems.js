const getItems = ({ Item }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const items = await Item.find({ listId: _id });
    res.status(200).send({ items });
  } catch (error) {
    next(error);
  }
};

module.exports= { getItems };
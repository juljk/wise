const list = ({ List }) => async (req, res, next) => {

  try {
    const query = {};

    const lists = await List.find(query)
    .sort({ _id: -1 })

    res.status(200).send({ lists });
  } catch (error) {
    next(error);
  }
};

module.exports= { list };
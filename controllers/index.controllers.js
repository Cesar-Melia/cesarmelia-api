const getIndex = (req, res, next) => {
  return res.status(200).json('César Meliá API');
};

module.exports = getIndex;

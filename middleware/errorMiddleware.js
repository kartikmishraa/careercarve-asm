const errorMiddleware = (req, res, next) => {
  res.status(404).json({
    message: "Endpoint does not exist",
  });
};

module.exports = { errorMiddleware };

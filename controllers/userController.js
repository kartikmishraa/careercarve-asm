const welcomeMsg = (req, res) => {
  res.json({
    success: true,
    message: "API successfully called",
  });
};

module.exports = { welcomeMsg };

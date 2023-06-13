const asyncHandler = require("express-async-handler");

// @desc: Send back a simple welcome message
// @route: GET /api/welcome
const welcomeMsg = (req, res) => {
  res.status(200).json({
    success: true,
    message: "API successfully called",
  });
};

// @desc:
// @route: POST /api/signup
const signup = asyncHandler(async (req, res) => {
  const { name, email, password, phone } = req.body;
  console.log(name, email, password, phone);
});

module.exports = { welcomeMsg, signup };

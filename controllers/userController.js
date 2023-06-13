const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

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

  // Hanlde Insufficient Data
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Insufficient Data");
  }

  // Check if user already exists
  const userExists = false; // check with db
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Password Hash
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = "djioqwjdfsa"; // create using DB
  if (user) {
    res.status(201).json({
      success: true,
      message: "Signed up successfully",
    });
  } else {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

module.exports = { welcomeMsg, signup };

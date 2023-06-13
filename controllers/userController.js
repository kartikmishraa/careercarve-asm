const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { response } = require("express");

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

const signin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Insufficient Data
  if (!email || !password) {
    res.status(400);
    throw new Error("Insufficient Data");
  }

  // DB query to get user
  const user = { name: "kartik mishra", password: "kartik3096" };

  // If user does not exist
  if (!user) {
    res.status(400);
    throw new Error("User does not exist");
  }
  // Successful Signin
  //   else if (await bcrypt.compare(password, user.password)) {
  else if (password === user.password) {
    const msg = await fetch("https://api.catboys.com/catboy")
      .then((response) => response.json())
      .then((data) => data.response);

    res.status(200).json({
      success: true,
      message: msg,
    });
  } else {
    // Wrong password
    res.status(400);
    throw new Error("Wrong password");
  }
});

module.exports = { welcomeMsg, signup, signin };

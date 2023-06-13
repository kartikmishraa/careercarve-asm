const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// @desc: Send back a simple welcome message
// @access: PUBLIC
// @route: GET /api/welcome
const welcomeMsg = (req, res) => {
  res.status(200).json({
    success: true,
    message: "API successfully called",
  });
};

// @desc: Endpoint for the user to signup
// @access: PUBLIC
// @route: POST /api/signup
const signup = asyncHandler(async (req, res) => {
  const { name, email, password, phone_number } = req.body;

  // Hanlde Insufficient Data
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Insufficient Data");
  }

  // Check if user already exists
  const userExists = await User.findOne({ where: { email: email } });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Password Hash
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name: name,
    email: email,
    password: hashedPassword,
    phone_number: phone_number ? phone_number : null,
  });
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

// @desc: Endpoint for the user to sigin
// @access: PUBLIC
// @route: POST /api/signin
const signin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Insufficient Data
  if (!email || !password) {
    res.status(400);
    throw new Error("Insufficient Data");
  }

  // DB query to get user
  const user = await User.findOne({ where: { email: email } });

  // If user does not exist
  if (!user) {
    res.status(400);
    throw new Error("User does not exist");
  }
  // Successful Signin
  else if (await bcrypt.compare(password, user.password)) {
    const msg = await fetch("https://api.catboys.com/catboy")
      .then((response) => response.json())
      .then((data) => data.response);

    res.status(200).json({
      success: true,
      message: msg,
      token: generateToken(user.email),
    });
  } else {
    // Wrong password
    res.status(400);
    throw new Error("Wrong password");
  }
});

// @desc: Endpoint for the user to edit or add phone number
// @access: PRIVATE
// @route: PUT /api/edit/phonenumber
const updatePhone = asyncHandler(async (req, res) => {
  const { phone_number } = req.body;

  const user = await User.findOne({ where: { email: req.email } });
  user.phone_number = phone_number;
  await user.save();

  res.status(200).json({
    success: true,
    message: "Phone number changed / added successfully",
  });
});

const generateToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

module.exports = { welcomeMsg, signup, signin, updatePhone };

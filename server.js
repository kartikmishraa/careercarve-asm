const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const colors = require("colors");

const PORT = process.env.PORT || 5000;

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api", require("./routes/userRoute"));

// Error Handler
const { errorHandler } = require("./middleware/errorMiddleware");
app.use(errorHandler);

// Server Listening
app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});

const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const colors = require("colors");
const { errorHandler } = require("./middleware/errorHandler");
const { errorMiddleware } = require("./middleware/errorMiddleware");
const sequelize = require("./config/db");

sequelize
  .sync()
  .then(() => {
    console.log(`connected to`, `SQLITE`.bgYellow);
  })
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api", require("./routes/userRoute"));

// Error Handler, Middleware
app.use(errorHandler);
app.use(errorMiddleware);

// Server Listening
app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});

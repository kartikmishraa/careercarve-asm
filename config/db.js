const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("dev-db", "root", "pass", {
  dialect: "sqlite",
  host: "./database/dev.sqlite",
  // logging: false,
});

module.exports = sequelize;

const { Sequelize } = require("sequelize");
const dbConfig = require("./dbConfig");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASS, {
  dialect: dbConfig.dialect,
  host: dbConfig.HOST,
  logging: dbConfig.logging,
});

module.exports = sequelize;

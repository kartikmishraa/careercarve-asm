const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Attempt extends Model {}

Attempt.init(
  {
    attempt_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    test_id: {
      type: DataTypes.INTEGER,
    },
    questions_id: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    answers_id: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    score: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "attempt",
  }
);

module.exports = Attempt;

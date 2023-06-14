const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Test extends Model {}
class Question extends Model {}
class Answer extends Model {}

Test.init(
  {
    test_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: "test",
  }
);

Question.init(
  {
    question_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
    correct_answer_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "question",
  }
);

Answer.init(
  {
    answer_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: "answer",
  }
);

module.exports = {
  Test,
  Question,
  Answer,
};

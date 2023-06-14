const sequelize = require("./config/db");
const { Test, Question, Answer } = require("./models/otherModels");

sequelize
  .sync()
  .then(() => {
    console.log(`connected to`, `SQLITE`.bgYellow);
  })
  .catch((err) => console.log(err));

/* Hardcoding Tests */
Test.create({
  description: "Maths Test",
});
Test.create({
  description: "Science Test",
});
Test.create({
  description: "History Test",
});

/* Hardcoding Questions */
Question.create({
  description: "5 + 5 = ?",
  correct_answer_id: 1,
});
Question.create({
  description: "10 * 2 = ?",
  correct_answer_id: 2,
});
Question.create({
  description: "5 * 2 = ?",
  correct_answer_id: 1,
});
Question.create({
  description: "40 / 2 = ?",
  correct_answer_id: 2,
});
Question.create({
  description: "How many sides does a triangle have?",
  correct_answer_id: 3,
});
Question.create({
  description: "Who was the first Prime Minister of India?",
  correct_answer_id: 9,
});
Question.create({
  description: "Chemical formula of water?",
  correct_answer_id: 10,
});

/* Hardcoding Answers */
Answer.create({
  description: "10",
});
Answer.create({
  description: "20",
});
Answer.create({
  description: "Three",
});
Answer.create({
  description: "30",
});
Answer.create({
  description: "Four",
});
Answer.create({
  description: "Equilateral Triangle",
});
Answer.create({
  description: "1947",
});
Answer.create({
  description: "Mahatma Gandhi",
});
Answer.create({
  description: "Jawaharlal Nehru",
});
Answer.create({
  description: "H2O",
});
Answer.create({
  description: "Sodium",
});
Answer.create({
  description: "Respiration",
});

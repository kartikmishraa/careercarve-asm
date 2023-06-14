const asyncHandler = require("express-async-handler");
const Attempt = require("../models/attemptModel");
const { Question } = require("../models/idk");

// @desc: Function to handle the submit-test feature
// @route: POST /submit-test
// @access: PUBLIC
const submitTest = asyncHandler(async (req, res) => {
  const { user_id, test_id, questions_id, answers_id } = req.body;

  // Check user reattempt
  const prev_attempt = await Attempt.findOne({
    where: {
      user_id: user_id,
      test_id: test_id,
    },
  });

  if (prev_attempt) {
    res.status(400);
    throw new Error("Cannot attempt again!");
  }

  // Calculate score, use a function say, computeScore(question_id, answer_id);
  const score = await computeScore(questions_id, answers_id);

  // user_id, test_id, question_id, answer_id, score --> save
  const attempt = await Attempt.create({
    user_id,
    test_id,
    questions_id,
    answers_id,
    score,
  });

  // send response
  if (attempt) res.status(200).json({ user_id, test_id, score });
  else throw new Error("something went wrong");
});

// @desc: Function to compute score of a test uploaded by a user.
const computeScore = asyncHandler(async (questions_id, answers_id) => {
  let score = 0;

  for (const [idx, question_id] of questions_id.entries()) {
    const question = await Question.findOne({
      where: { question_id: question_id },
    });

    if (question.correct_answer_id === answers_id[idx]) score += 1;
  }

  return score;
});

module.exports = { submitTest };

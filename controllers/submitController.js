const asyncHandler = require("express-async-handler");

// @desc: Function to handle the submit-test feature
// @route: POST /submit-test
// @access: PUBLIC
const submitTest = asyncHandler(async (req, res) => {
  const { user_id, test_id, questions_id, answers_id } = req.body;

  // Calculate score, use a function say, computeScore(question_id, answer_id);
  const score = await computeScore(questions_id, answers_id);

  // user_id, test_id, question_id, answer_id, score --> save
  const attemp = await Attempt.create({
    user_id,
    test_id,
    questions_id,
    answers_id,
    score,
  });

  // send response
  res.status(200).json({ user_id, test_id, score });
});

// @desc: Function to compute score of a test uploaded by a user.
const computeScore = asyncHandler(async (questions_id, answers_id) => {
  // for each question (using its question_id) get its corresponding correct answer and tally it with the corresponding
  // answer_id in answers_id;
  let score = 0;
  questions_id.forEach(async (question_id, idx) => {
    // question_id use krke correct Answer_id nikaalo
    const question = await Question.findOne({
      where: { question_id: question_id },
    });
    // tally karo with answers_id[idx] se and score ko increment croww.
    if (question.answer_id === answers_id[idx]) score += 1;
  });

  // score ko return croww
  return score;
});

module.exports = { submitTest };

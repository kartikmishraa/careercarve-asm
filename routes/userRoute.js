const router = require("express").Router();
const controller = require("../controllers/userController");

router.get("/welcome", controller.welcomeMsg);

module.exports = router;

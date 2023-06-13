const router = require("express").Router();
const controller = require("../controllers/userController");

router.get("/welcome", controller.welcomeMsg);
router.post("/signup", controller.signup);
router.post("/signin", controller.signin);

module.exports = router;

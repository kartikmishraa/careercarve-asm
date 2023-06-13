const router = require("express").Router();
const controller = require("../controllers/userController");

router.get("/welcome", controller.welcomeMsg);
router.post("/signup", controller.signup);
router.post("/signin", controller.signin);
router.put("/edit/phonenumber", controller.updatePhone);

module.exports = router;

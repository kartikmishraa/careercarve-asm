const router = require("express").Router();
const controller = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.get("/welcome", controller.welcomeMsg);
router.post("/signup", controller.signup);
router.post("/signin", controller.signin);
router.put("/edit/phonenumber", protect, controller.updatePhone);

module.exports = router;

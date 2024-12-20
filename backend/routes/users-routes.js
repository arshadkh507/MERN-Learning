const express = require("express");
const { getUsers, signup, login } = require("../controllers/users-controller");
const router = express.Router();
const { check } = require("express-validator");

router.get("/", getUsers);
router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  signup
);
router.post("/login", login);

module.exports = router;

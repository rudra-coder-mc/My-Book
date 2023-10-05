const express = require("express");
const user = require("../models/user");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const router = express.Router();

const userVal = [
  body("name")
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage("Name must be at least 5 characters long"),
  body("email")
    .notEmpty()
    .isEmail()
    .withMessage("Email must be a valid email address"),
  body("password")
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 characters long"),
];
router.post("/signup", userVal, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const solt = await bcrypt.genSalt(10);
  let secPass = await bcrypt.hash(req.body.password, solt);
  let email = req.body.email;
  try {
    let usereData = await user.findOne({ email });
    if (!usereData) {
      await user.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
    } else {
      let emailerror = [
        { param: "email", msg: "User already exist. Use another email" },
      ];
      return res.json({ errors: emailerror });
    }

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;

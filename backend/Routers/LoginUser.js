const express = require("express");
const user = require("../models/user");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();
const secreat = "asdgdqdf[.';je/j.ekw[aerhhvt'.nern,;st/bs/.dargzr/";
const userVal = [
  body("email")
    .notEmpty()
    .isEmail()
    .withMessage("Email must be a valid email address"),
  body("password")
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 characters long"),
];
router.post("/login", userVal, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let email = req.body.email;
  let password = req.body.password;
  try {
    let usereData = await user.findOne({ email });
    if (!usereData) {
      let emailerror = [{ param: "email", msg: "Enter correct email !" }];
      return res.json({ errors: emailerror });
    }
    const ComparePassword = await bcrypt.compare(password, usereData.password);

    if (!ComparePassword) {
      let passworderror = [
        { param: "password", msg: "Enter correct password !" },
      ];
      return res.json({ errors: passworderror });
    } else {
      const data = {
        user: {
          id: usereData.id,
        },
      };
      const authToken = jwt.sign(data, secreat);

      if (email === "admin111@gmail.com") {
        return res.json({ admin: true, authToken, success: true });
      }
    }

    const data = {
      user: {
        id: usereData.id,
      },
    };
    const authToken = jwt.sign(data, secreat);

    return res.json({
      success: true,
      authToken,
      errors: " Enter correct password or email",
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, errors: " sum problem with login form" });
  }
});

module.exports = router;

const router = require("express").Router();
const {
  createAccount,
  loginUser,
  verifyResetToken,
  refreshToken,
} = require("../controllers/auth.controller");

router.post("/signup", createAccount);

router.post("/login", loginUser);




// token for reset password
router.post("/check-token", verifyResetToken);


router.post("/refresh-token", refreshToken);

module.exports = router;

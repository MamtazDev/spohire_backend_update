const express = require("express");
const {
  registerUser,
  loginUser,
  getAllUsers,
  deleteUser,
  emailVerification,
  getUser,
  getUserInfo,
  forgetPassword,
  changePassword,
  updateUserInfo,
  updateUserSubscriptionPlan,
  getFilteredUsers,
  updateUSerCreatedProfile,
} = require("./user.controller");
const { isAuth } = require("../../utils/middleware");

const router = express.Router();

router.post("/signup", registerUser);
router.post("/verifyEmail", emailVerification);
router.get("/filteredUsers", getFilteredUsers);
router.post("/login", loginUser);
router.patch("/:id", updateUserInfo);
router.delete("/delete/:id", deleteUser);
router.patch("/subscriptionStatus/:id", updateUserSubscriptionPlan);
router.get("/:id", getUser);
router.get("/user-info/me", isAuth, getUserInfo);
router.post("/forgot-password", forgetPassword);
router.post("/change-password", isAuth, changePassword);
router.patch("/updateAddProfile/:id", isAuth, updateUSerCreatedProfile);

// admin
router.get("/", isAuth, getAllUsers); //admin

module.exports = router;

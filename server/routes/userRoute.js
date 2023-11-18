const express = require("express");
const {
  signUp,
  logIn,
  getUser,
  getUsers,
  deleteUser,
  addTeam,
} = require("../controller/user-controller");

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", logIn);
router.get("/getusers", getUsers);
router.post("/getuser", getUser);
router.post("/additem", addTeam);

router.delete("/delete", deleteUser);

module.exports = router;

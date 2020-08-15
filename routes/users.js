const express = require("express");
const router = express.Router();

//Item model
//const Item = require('../../models/Items');

// @route   POST api/users
// @desc    register a user
// @access  Public
router.post("/", (req, res) => {
  res.send("Register a user");
});

//export default router;
module.exports = router;

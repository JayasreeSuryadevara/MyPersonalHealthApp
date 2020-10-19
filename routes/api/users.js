// Create an Express route for users
const express = require("express");
const router = express.Router();

router.get("/user", (req, res) => res.json({ msg: "This is the users route" }));

module.exports = router;
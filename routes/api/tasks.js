// Create an Express route for Tasks
const express = require("express");
const router = express.Router();

router.get("/tasks", (req, res) => res.json({ msg: "This is the tasks route" }));

module.exports = router;
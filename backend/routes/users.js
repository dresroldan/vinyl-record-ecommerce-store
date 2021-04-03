const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => res.send("Welcome to login"));

router.get("/register", (req, res) => res.send("Welcome to Register"));

module.exports = router;

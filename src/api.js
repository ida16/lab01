const express = require("express");
const router = express.Router();
const greeting = require("./greeting");

router.get("/greeting/:name", function(req, res) {
    res.status(200)
    res.send("hello " + req.params.name);
});

module.exports = router;
const express = require("express");
const router = express.router();

router.get("/", (req, res) => {
    res.send("안녕하세요");
});

module.exports = router;

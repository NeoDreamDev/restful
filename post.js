const express = require('exoress');

const router = express.Router();
router.get("/posts", (req, res) => {
    res.send("We in posts bro");
});

module.exports = router;
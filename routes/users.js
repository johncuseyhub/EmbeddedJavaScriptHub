const express = require("express")
const router = express.Router()

// http://localhost:3000/users
router.get("/",  (req, res) => {
    res.send("User List")
})

// http://localhost:3000/users/new
router.get("/new",  (req, res) => {
    res.send("User List")
})

module.exports = router
console.log("Server Start/Restarted");

const express = require("express")
const app = express()

app.set("view engine","ejs")

app.get("/", (req, res) => {

    console.log("get route='/' ");

    res.render("index", {text:"Hello Wrold !"});
})

app.listen(3000)
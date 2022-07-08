console.log("Server Start/Restarted");

const express = require("express")
const app = express()

app.set("view engine","ejs")

app.get("/", (req, res) => {

    console.log("get route='/' ");

    res.render("index", {text:"Hello Wrold !"});
})

app.get("/users", (req, res) => {

    res.send("User List")

})

app.get("/users/new", (req, res) => {

    res.send("User New Form")

})

app.listen(3000)
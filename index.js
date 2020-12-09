const http = require("http");
const express = require("express");

const PORT = 4000;
const HOST = "localhost";

const app = express();
const server = http.createServer(app);


const es6Renderer = require("express-es6-template-engine")
app.engine("html", es6Renderer); //regulate html type
app.set("views", "templates"); //what dir?
app.set("view engine", "html"); //deault type

app.get("/", (req,res) => {
    console.log("hey");
    // res.send("Helloooooooo")
    res.render("home");
});

app.get("/:word", (req,res) => {
    //1. get the value our of req.params
    const word = req.params.word;
    //2. res.render() with a locals obj
    res.render("greet", {
        locals:{
            oakley: word
        }
    });
})

server.listen(PORT,HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`)
});


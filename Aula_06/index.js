const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/index", (req, res) => {
    res.render("../views/index");
  });

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
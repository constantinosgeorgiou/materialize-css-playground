require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();
const { PORT } = process.env;

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (request, response) => {
    response.render("index", { title: "Breezebnb" });
});

app.listen(PORT, () => {
    console.log("Listening on " + PORT);
});

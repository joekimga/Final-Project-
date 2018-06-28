const express = require("express");
const bodyParser = require("body-parser");
const db = require('./models');
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes = require("./routes");

app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:3000";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});

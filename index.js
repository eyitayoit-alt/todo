const express = require("express");
const { json } = require("express");
const bodyParser = require('body-parser');
const app = express();

const models = require("./models/model");
const db= require("./models/db.js")
const routes = require("./routes/route");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json());
app.use("/", routes);



// configure the app to use bodyParser()





const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

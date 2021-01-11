// const bodyParser = require("body-parser");
let express = require("express"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  database = require("./database");
bodyParser = require("body-parser");

// import express from 'express'

// connect to mongodb
mongoose.Promise = global.Promise;
mongoose
  .connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database connected");
    },
    (error) => {
      console.log("Database couldn't be connected to:" + error);
    }
  );

const studentAPI = require("./routes/student.route.js");
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());

// API
app.use("/api", studentAPI);

// create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

// Find 404

app.use((req, res, next) => {
  next(createError(404));
});

// handle error
app.use(function(err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

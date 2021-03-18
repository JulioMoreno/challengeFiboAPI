const express = require("express");
const fibonacciRouter = require("./routes/fibonacciRoutes");

const app = express();

app.use(express.json());

app.use('/api/v1/fibonacci', fibonacciRouter);

module.exports = app;

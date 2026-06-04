const express = require("express");

const userRoutes = require("./routes/user.routes");

const errorHandler = require("./middleware/error.middleware");

const app = express();

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Node CRUD API is running",
  });
});

app.use("/api/users", userRoutes);

app.use(errorHandler);

module.exports = app;
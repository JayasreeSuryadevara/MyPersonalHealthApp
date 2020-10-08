// Import Mongoose for MongoDB
const mongoose = require("mongoose");

// Create an Express Server
const express = require("express");
const app = express();

// Import MongoDB keys
const db = require("./config/keys").mongoURI;

// Connect to MongoDB using Mongoose
mongoose
  .connect(db, { useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

// Create a basic route
app.get("/", (req, res) => res.send("Welcome to your own health tracker"));

// Assign a port for the app to run on
const port = process.env.PORT || 5000;

// Tell express to start a socket and listen for connections on the path
app.listen(port, () => console.log(`Server is running on port ${port}`));


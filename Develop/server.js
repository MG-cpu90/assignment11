// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener
// ===========================================================
// http://localhost:3000/
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
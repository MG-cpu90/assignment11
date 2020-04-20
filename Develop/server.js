// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// const apiRoutes = require("./routes/apiRoutes");
// const htmlRoutes = require("./routes/htmlRoutes");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3000;

// http://localhost:3000/


// console.log(apiRoutes);
// console.log(htmlRoutes);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);

// Notes (DATA)
// =============================================================

// const notes = [
//     {
//         "Note title": '',
//         "Note text": ''
//     }
// ]

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
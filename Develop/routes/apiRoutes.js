// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

// const indexJs = require("../public/assets/js/index");
const dB = require("../db/db.json");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

//   // Displays all notes
//   app.get("/api/notes", function(req, res) {
//     return res.json(notes);
//   });
  
//   // Displays a single note, or returns false
//   app.get("/api/notes/:note", function(req, res) {
//     var chosen = req.params.note;
  
//     console.log(chosen);
  
//     for (var i = 0; i < notes.length; i++) {
//       if (chosen === notes[i].routeName) {
//         return res.json(notes[i]);
//       }
//     }
  
//     return res.json(false);
//   });

// // Create New Notes - takes in JSON input
// app.post("/api/notes", function(req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     var newCharacter = req.body;
  
//     // Using a RegEx Pattern to remove spaces from newCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
  
//     console.log(newCharacter);
  
//     // Push the new character to the array of characters in the database, not to the original file
//     characters.push(newCharacter);
  
//     // Show the new character as a JSON objct
//     res.json(newCharacter);
//   });

// * The application should have a `db.json` file on the backend 
// that will be used to store and retrieve notes using the `fs` module.

// * The following API routes should be created:

//   * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON. db/db.json

//   * POST `/api/notes` - Should receive a new note to save on the request body, 
// add it to the `db.json` file, and then return the new note to the client.

//   // Displays a single note, or returns false
//   app.delete("/api/notes/:id", function(req, res) {
//     var chosen = req.params.note;

//   * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. 
// This means you'll need to find a way to give each note a unique `id` when it's saved. 
// In order to delete a note, you'll need to read all notes from the `db.json` file, 
// remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

};
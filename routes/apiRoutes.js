// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const notes = require("../db/db.json");
const fs = require('fs');

// console.log(notes);

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  // Displays all notes
  app.get("/api/notes", function(req, res) {
    return res.json(notes);
  });
  
  // Displays a single note, or returns false
  app.get("/api/notes/:note", function(req, res) {
    let chosen = req.params.note;
  
    // console.log(chosen);
    // console.log(req.params);
  
    for (var i = 0; i < notes.length; i++) {
      
      // Add an ID to the notes
      if (chosen === notes[i].id) {
        return res.json(chosen);
      }

      else {
        return res.json(false);
      }
    }
  
  // console.log(notes);

  });

// Create New Notes - takes in JSON input
app.post("/api/notes", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware

    for (i = 0; i < notes.length; i++) {

    // Add an ID to the new notes  
    var newNote = 
      { 
        title: req.body.title, 
        text: req.body.text,
        id: i
      }

    }
      
    // Push the new note to the array of note objects in the original database json file
    notes.push(newNote);
  
    // Show the new note as a JSON object
    res.json(newNote);

    // Turn the notes object array into a string
    let notesString = JSON.stringify(notes);

    // Write the array of notes/objects to the db.json file
    fs.writeFile("./db/db.json", notesString, function (err) {
      if (err) throw err;
      console.log('Note added!');
    });

  });

  // Delete a Note
  app.delete("/api/notes/:id", function(req, res) {
    //Get the id through req.params.id of the object you are going to delete
    let chosen = req.params.id;

    // As you have only Id of the object, we want to get the entire object from the array. find() will fetch the object from the array whose id is equal to deleteId and assign it to deleteObj.
    let deleteObj = notes.find(user => user.id == chosen); 
    //Find the index of the object fetched from the JSON array.
    let deleteIndex = notes.indexOf(deleteObj); 
    // Splice/remove the object from the JSON array of notes.
    notes.splice(deleteIndex,1); 
    // Send the deleted object as response.
    res.send(deleteObj); 

    // Turn the notes object array into a string
    let notesString = JSON.stringify(notes);

    // Write the array of notes/objects to the db.json file
    fs.writeFile("./db/db.json", notesString, function (err) {
      if (err) throw err;
      console.log('Note deleted!');
    });

  });

};

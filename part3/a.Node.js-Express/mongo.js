const mongoose = require("mongoose");

if (process.argv.length > 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://ichialex5620:${password}@notes.mgpbe.mongodb.net/NoteApp?retryWrites=true&w=majority&appName=Notes`;

mongoose.set("strictQuery", false);

mongoose.connect(url);

const noteSchema = mongoose.Schema({
    content: String,
    important: Boolean
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
})

// note.save().then(res => {
//     console.log('Note saved!');
//     mongoose.connection.close()
// })

Note.find({}).then(res => {
    res.forEach(note => {
        console.log(note);
    });
    mongoose.connection.close()
})
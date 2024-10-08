require('dotenv').config()
const express = require("express");
const cors = require("cors");
const app = express();
const Note = require('./models/note.js')

app.use(cors())
app.use(express.json());
app.use(express.static('dist'))

let notes = [
  {
    id: 1,
    content: "HTML es easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/api/notes", (req, res) => {
  Note.find({}).then(notes => {
    res.json(notes);
  })
});

app.get("/api/notes/:id", (req, res) => {
  Note.findById(req.params.id)
    .then(note => {
      res.json(note)
    })
});

app.delete("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  notes = notes.filter((note) => note.id !== id);

  res.status(204).end();
});

/* const generateId = () => {
  const maxID =
    notes.length > 0 ? Math.max(...notes.map((note) => note.id)) : 0;

  return maxID + 1;
}; */

app.post("/api/notes", (req, res) => {
  const body = req.body;

  if (body.content === undefined) {
    return res.status(400).json({
      error: "Content is missing"
    });
  }

  const note = new Note({
    content: body.content,
    important: Boolean(body.important) || false,
    // id: generateId()
  });

  note.save().then(savedNote => {
    res.json(savedNote);
  })
});

const unknownEndpoint = (req, res, next) => {
    res.status(404).send({ error: 'unknown endpoint'});
};

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

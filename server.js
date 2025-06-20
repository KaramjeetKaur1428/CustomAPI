const express = require("express");
const { readData, writeData } = require("./utils/fileHandler");
const app = express();

app.use(express.json());
const PORT = 5000;

// Get all students
app.get("/students", (req, res) => {
  const students = readData();
  res.json(students);
});

// Get one student by ID
app.get("/students/:id", (req, res) => {
  const students = readData();
  const student = students.find((s) => s.id === parseInt(req.params.id));
  student ? res.json(student) : res.status(404).json({ message: "Not found" });
});

// Create a new student
app.post("/students", (req, res) => {
  const students = readData();
  const newStudent = { id: Date.now(), ...req.body };
  students.push(newStudent);
  writeData(students);
  res.status(201).json(newStudent);
});

// Update a student
app.put("/students/:id", (req, res) => {
  let students = readData();
  const index = students.findIndex((s) => s.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Not found" });

  students[index] = { ...students[index], ...req.body };
  writeData(students);
  res.json(students[index]);
});

// Delete a student
app.delete("/students/:id", (req, res) => {
  let students = readData();
  const filtered = students.filter((s) => s.id !== parseInt(req.params.id));
  if (filtered.length === students.length)
    return res.status(404).json({ message: "Not found" });

  writeData(filtered);
  res.json({ message: "Student deleted" });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

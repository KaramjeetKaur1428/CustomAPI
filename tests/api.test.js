const request = require("supertest");
const express = require("express");
const fs = require("fs");
const app = express();
const { readData, writeData } = require("../utils/fileHandler");

app.use(express.json());
app.get("/students", (req, res) => res.json(readData()));
app.post("/students", (req, res) => {
  const students = readData();
  const newStudent = { id: Date.now(), ...req.body };
  students.push(newStudent);
  writeData(students);
  res.status(201).json(newStudent);
});

describe("API Tests", () => {
  it("GET /students should return an array", async () => {
    const res = await request(app).get("/students");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("POST /students should create a student", async () => {
    const student = { name: "Test", age: 23, course: "IT" };
    const res = await request(app).post("/students").send(student);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.name).toBe(student.name);
  });
});

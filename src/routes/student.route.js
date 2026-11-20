import express from "express";
const app = express.Router();
import { getAllStudents, getStudentID1, createStudent, updateStudent, patchStudent } from "../controllers/student.controller.js";

// localhost:3000/students
app.get("/", getAllStudents);
app.get("/1", getStudentID1);
app.post("/", createStudent);
app.put("/1", updateStudent);
app.patch("/1", patchStudent);

export default app;


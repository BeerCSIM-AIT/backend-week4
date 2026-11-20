export const getAllStudents = (req, res) => {
  res.send("Get all students");
}

export const getStudentID1 = (req, res) => {
  res.send("Get student ID 1");
}

export const createStudent = (req, res) => {
  res.send("Student created");
}

export const updateStudent = (req, res) => {
  res.send("Student ID 1 updated");
}

export const patchStudent = (req, res) => {
  res.send("Student ID 1 partially updated");
}
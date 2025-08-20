import express from "express";
const app = express();
const PORT = process.env.PORT || 4000;
import {createStudent, getAllStudents, getStudentById, updateStudent, deleteStudent} from "./routes";

app.use(express.json());

//our routes..
app.use("/api", createStudent);
app.use("/api", getAllStudents);
app.use("/api", getStudentById);
app.use("/api", updateStudent);
app.use("/api", deleteStudent);


app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

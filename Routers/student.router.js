import express from "express";
import {
  createStudent,
  getStudentAll,
  getStudentAssigned,
  getStudentAssignedMentor,
} from "../Controllers/student.controller.js";

const router = express.Router();

router.post("/create", createStudent);
router.get("/students", getStudentAll);
router.put("/assign/:id", getStudentAssigned);
router.get("/get-particular/:id", getStudentAssignedMentor);

export default router;

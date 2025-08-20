import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

// Create a student info. - POST METHODY
export const createStudent = router.post("/student",async (req: Request, res: Response) => {
        try {
            const { name, DOB, email } = req.body;
            const student = await prisma.student.create({data: { name, DOB, email },});
            res.json({ message: "Student created successfully", student });
        }catch(err) {
            res.status(400).json({ err: "Failed to create student", details: err });
        }
    }
);

// Get all students info - GET METHOD
export const getAllStudents = router.get("/students",async (req: Request, res: Response) => {
        try {
            const students = await prisma.student.findMany();
            res.json({ message: "Students info got successfully", students });
        }catch(err) {
            res.status(500).json({ err: "Failed to fetch students" });
        }
    }
);

// Get one student info - GET METHOD
export const getStudentById = router.get("/student/:id",async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            const student = await prisma.student.findUnique({ where: { id } });
            if (!student) return res.status(404).json({ err: "Student not found" });
           res.json({ message: "1 Student info gotcha", student });
        }catch(err) {
            res.status(500).json({ err: "Failed to fetch student" });
        }
    }
);

// Update student info - PUT METHOD
export const updateStudent = router.put("/student/:id",async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            const { name, DOB, email } = req.body;
            const updated = await prisma.student.update({where: { id },data: { name, DOB, email }});
            res.json({ message: "Student updated successfully", student: updated });
        }catch(err){
            res.status(400).json({ err: "Failed to update student", details: err });
        }
    }
);

// Delete student info - DELETE METHOD
export const deleteStudent = router.delete("/student/:id",async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            const deleted = await prisma.student.delete({ where: { id } });
            res.json({ message: "Student deleted successfully", student: deleted });
        }catch(err) {
            res.status(400).json({ err: "Failed to delete student", details: err });
        }
    }
);

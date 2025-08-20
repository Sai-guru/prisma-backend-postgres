import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

// Create student
export const createStudent = router.post("/student",async (req: Request, res: Response) => {
        try {
            const { name, DOB, email } = req.body;
            const student = await prisma.student.create({data: { name, DOB, email },});
            res.status(201).json(student);
        } catch (error) {
            res.status(400).json({ error: "Failed to create student", details: error });
        }
    }
);

// Get all students
export const getAllStudents = router.get("/students",async (req: Request, res: Response) => {
        try {
            const students = await prisma.student.findMany();
            res.json(students);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch students" });
        }
    }
);

// Get one student
export const getStudentById = router.get("/student/:id",async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            const student = await prisma.student.findUnique({ where: { id } });
            if (!student) return res.status(404).json({ error: "Student not found" });
            res.json(student);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch student" });
        }
    }
);

// Update student
export const updateStudent = router.put("/student/:id",async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            const { name, DOB, email } = req.body;
            const updated = await prisma.student.update({
                where: { id },
                data: { name, DOB, email },
            });
            res.json(updated);
        } catch (error) {
            res
                .status(400)
                .json({ error: "Failed to update student", details: error });
        }
    }
);

// Delete student
export const deleteStudent = router.delete("/student/:id",async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            const deleted = await prisma.student.delete({ where: { id } });
            res.json(deleted);
        } catch (error) {
            res
                .status(400)
                .json({ error: "Failed to delete student", details: error });
        }
    }
);

import express from "express";
import {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote
} from "../controllers/Notecontroller.js";

const router = express.Router();

// Semua endpoint ini otomatis berada di bawah /notes karena dimount di index.js
router.get("/", getNotes);           // GET /notes
router.get("/:id", getNoteById);     // GET /notes/:id
router.post("/", createNote);        // POST /notes
router.put("/:id", updateNote);      // PUT /notes/:id
router.delete("/:id", deleteNote);   // DELETE /notes/:id

export default router;

import express from "express";
import {
  getTasks,
  createTask,
  toggleTask,
} from "../controllers/taskController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getTasks);
router.post("/", protect, createTask);
router.put("/:id", protect, toggleTask);

export default router;
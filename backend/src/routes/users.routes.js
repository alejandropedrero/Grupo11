import { Router } from "express";
import {
  getUsers,
  getCurrentUser,
  updateCurrentUser,
} from "../controllers/users.controller.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = Router();

router.get("/users", authenticateToken, getUsers);
router.get("/users/:id", authenticateToken, getCurrentUser); //No lo estamos usando como current
router.patch("/users/:id", authenticateToken, updateCurrentUser);

export default router;

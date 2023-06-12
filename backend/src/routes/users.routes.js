import { Router } from "express";
import {
  getUsers,
  getCurrentUser,
  updateCurrentUser,
  updateLang,
  updateCert,
  updateHobb,
} from "../controllers/users.controller.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = Router();

router.get("/users", authenticateToken, getUsers);
router.get("/users/:id", authenticateToken, getCurrentUser); //No lo estamos usando como current
router.patch("/users/:id", authenticateToken, updateCurrentUser);
router.patch("/languages/:id", authenticateToken, updateLang);
router.patch("/certifications/:id", authenticateToken, updateCert);
router.patch("/hobbies/:id", authenticateToken, updateHobb);

export default router;

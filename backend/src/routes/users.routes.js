import { Router } from "express";
import {
  getUsers,
  getCurrentUser,
  updateCurrentUser,
} from "../controllers/users.controller.js";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", getCurrentUser); //No lo estamos usando como current
router.patch("/users/:id", updateCurrentUser);

export default router;

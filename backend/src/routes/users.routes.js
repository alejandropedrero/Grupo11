import { Router } from "express";
import { getUsers, getCurrentUser } from "../controllers/users.controller.js";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", getCurrentUser);

export default router;

import { Router } from "express";
import { getUsers, getCurrentUser, updateCurrentUser } from "../controllers/users.controller.js";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", getCurrentUser);
router.patch("/users/:id", updateCurrentUser);

export default router;

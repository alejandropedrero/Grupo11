import { Router } from "express";
import { getPeople } from "../controllers/people.controller.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = Router();

router.get("/people", authenticateToken, getPeople);

export default router;

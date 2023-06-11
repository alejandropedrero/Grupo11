import { Router } from "express";
import { createTicket } from "../controllers/ticket.controller.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = Router();

router.post("/ticket", authenticateToken, createTicket);

export default router;

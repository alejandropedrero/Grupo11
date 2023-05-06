import { Router } from "express";
import { validateLogin } from "../controllers/login.controller.js";

const router = Router();

router.post("/login", validateLogin);

export default router;

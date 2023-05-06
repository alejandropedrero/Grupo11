import { Router } from "express";
import { validateRegister } from "../controllers/register.controller.js";

const router = Router();

router.post("/register", validateRegister);

export default router;

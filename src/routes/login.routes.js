import { Router } from "express";
import { getLogin, validateLogin } from "../controllers/login.controller.js";

const router = Router();

router.get("/login", getLogin);
router.post("/login", validateLogin);

export default router;

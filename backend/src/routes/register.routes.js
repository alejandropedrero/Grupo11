import { Router } from "express";
import { validateRegister } from "../controllers/register.controller.js";

const router = Router();

router.post("/register", validateRegister);
// router.post("/register", express.json(), validateRegister);

export default router;

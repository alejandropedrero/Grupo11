import { Router } from "express";
import { getHome } from "../controllers/home.controller.js";

const router = Router();

router.get("/home", getHome);

export default router;

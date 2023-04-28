import { Router } from "express";
import { getPeople } from "../controllers/people.controller.js";

const router = Router();

router.get("/people", getPeople);

export default router;

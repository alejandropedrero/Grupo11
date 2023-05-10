import { Router } from "express";
import { createPost } from "../controllers/posts.controller.js";

const router = Router();

router.post("/posts", createPost);

export default router;

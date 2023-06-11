import { Router } from "express";
import {
  getPosts,
  createPost,
  likePost,
} from "../controllers/posts.controller.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = Router();

router.get("/posts", authenticateToken, getPosts);
router.post("/posts", authenticateToken, createPost);
router.post("/posts/:id/like", authenticateToken, likePost);

export default router;

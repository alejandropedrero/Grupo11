import { Router } from "express";
import {
  getPosts,
  createPost,
  likePost,
} from "../controllers/posts.controller.js";

const router = Router();

router.get("/posts", getPosts);
router.post("/posts", createPost);
router.post("/posts/:id/like", likePost);

export default router;

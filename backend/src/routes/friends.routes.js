import { Router } from "express";
import {
  addFriend,
  getFriends,
  deleteFriend,
} from "../controllers/friends.controller.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = Router();

router.post("/friends", authenticateToken, addFriend);
router.get("/friends", authenticateToken, getFriends);
router.delete("/friends/:id", authenticateToken, deleteFriend);

export default router;

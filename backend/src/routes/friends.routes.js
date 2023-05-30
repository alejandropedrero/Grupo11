import { Router } from "express";
import {
  addFriend,
  getFriends,
  deleteFriend,
} from "../controllers/friends.controller.js";

const router = Router();

router.post("/friends", addFriend);
router.get("/friends", getFriends);
router.delete("/friends/:id", deleteFriend);

export default router;

import { Router } from "express";
import { addFriend, getFriends } from "../controllers/friends.controller.js";

const router = Router();

router.post("/friends", addFriend);
router.get("/friends", getFriends);

export default router;

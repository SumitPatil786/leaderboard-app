import { Router } from "express";
import {claimPoints,leaderboard} from "../controllers/claim.controller.js";
const router=Router();

router.post("/",claimPoints);
router.get("/leaderboard",leaderboard);
export default router;
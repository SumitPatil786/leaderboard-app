import { Router } from "express";
import { seedUsers, listUsers, addUser } from "../controllers/user.controller.js";

const router = Router();
router.post("/seed", seedUsers);
router.get("/", listUsers);
router.post("/", addUser);  
export default router;

import express from 'express';  
import { UserController } from './user.controller.js';

const router = express.Router();

router.get("/" , UserController.getAllUsers)
router.post("/createAUser" , UserController.createAUser)

export const UserRoute = router;
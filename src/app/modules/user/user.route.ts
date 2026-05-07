import express from 'express';  
import { UserController } from './user.controller.js';
import validationRequest from '../../utils/ValidationRequest.js';
import { UserValidations } from './user.validation.js';

const router = express.Router();

router.get("/getAllUsers" , UserController.getAllUsers)
router.post("/createAUser" , validationRequest(UserValidations.createUserValidationSchema) , UserController.createAUser)

export const UserRoute = router;
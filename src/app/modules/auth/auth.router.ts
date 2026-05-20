import express from 'express';
import validationRequest from '../../utils/ValidationRequest.js';
import { authValidation } from './auth.validation.js';
import { AuthControllers } from './auth.controller.js';

const router = express.Router()


router.post("/login",validationRequest(authValidation.loginValidationSchema) , AuthControllers.loginUser)


export const authRouter = router;
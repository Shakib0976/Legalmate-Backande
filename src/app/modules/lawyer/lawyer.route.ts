import express from 'express';
import { LawyerController } from './lawyer.controller.js';

const  router = express.Router();

router.get("/" , LawyerController.getAllLawyers)
router.get("/:id" , LawyerController.getSingleLawyer)
router.patch("/:id/basic" , LawyerController.updateBasicInfo)
// router.patch("/:id/education" , LawyerController.updateEducation)
// router.patch("/:id/experience" , LawyerController.updateExperience)
// router.patch("/:id/license" , LawyerController.updateLicense)
// router.patch("/:id/availability" , LawyerController.updateAvailability)


export const  LawyerRouter = router;
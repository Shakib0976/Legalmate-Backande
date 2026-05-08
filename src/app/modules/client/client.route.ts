import express from "express";
import { clientController } from "./client.controller.js";

const router = express.Router();

router.get("/" , clientController.getAllClients)
router.get("/:id" , clientController.getSingleClient)


export const ClientRouter = router ;
// clientsRoutes.js
import { Router } from "express";
import {
  createNewClient,
  deleteClientById,
  getClientById,
  getClients,
  updateClient,
} from "../controllers/clients.controller";

const router = Router();

router.get("/clients", getClients);
router.post("/clients", createNewClient);
router.delete("/clients/:id", deleteClientById);
router.put("/clients/:id", updateClient);
router.get("/clients/:id", getClientById);

export default router;

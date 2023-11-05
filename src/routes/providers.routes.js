// ProductProvidersRoutes.js
import { Router } from "express";
import {
  createNewProvider,
  deleteProviderById,
  getProviderById,
  getProductProviders,
  updateProvider,
} from "../controllers/providers.controller";

const router = Router();

router.get("/ProductProviders", getProductProviders);
router.post("/ProductProviders", createNewProvider);
router.delete("/ProductProviders/:id", deleteProviderById);
router.put("/ProductProviders/:id", updateProvider);
router.get("/ProductProviders/:id", getProviderById);

export default router;

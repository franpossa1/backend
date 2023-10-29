import { Router } from "express";
import { createNewProduct, getProducts } from "../controllers/products.controller";

const router = Router();

router.get("/products", getProducts);
  router.post("/products",createNewProduct);
// router.delete("/products");
// router.put("/products");
// router.get("/products");

export default router;

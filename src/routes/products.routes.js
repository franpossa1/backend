import { Router } from "express";
import { createNewProduct, deleteProductById, getProductById, getProducts, updateProduct } from "../controllers/products.controller";

const router = Router();

router.get("/products", getProducts);
  router.post("/products",createNewProduct);
 router.delete("/products/:id",deleteProductById);
 router.put("/products/:id",updateProduct);
  router.get("/products/:id",getProductById);

export default router;

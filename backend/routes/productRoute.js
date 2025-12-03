import express from "express";
import {
  addProduct,
  removeProduct,
  singleProduct,
  listProducts,
} from "../controllers/productController.js";
import { uploadProductImages } from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

productRouter.post("/add", adminAuth, uploadProductImages, addProduct);
productRouter.post("/remove", adminAuth, removeProduct);
productRouter.post("/single", singleProduct);
productRouter.get("/list", listProducts);

export default productRouter;

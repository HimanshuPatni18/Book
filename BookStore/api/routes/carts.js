import express from "express";
import {
  updateCart,
  getCart,
  deleteCart
} from "../controllers/cart.js";

const router = express.Router();


router.post("/cart", 
  updateCart
);
router.get("/cart1", 
  getCart
);
router.delete("/:id", 
  deleteCart
);


export default router;
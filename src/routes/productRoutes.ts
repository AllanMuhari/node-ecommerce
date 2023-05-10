import { Router } from "express";
import { addProduct } from "../controllers/productsController";

const productRoutes = Router()


productRoutes.post('',addProduct)


export default productRoutes
import { Router } from "express";
import { crearProducto } from "../controller/producto.controller.js";

export const ProductoRouter = Router();

ProductoRouter.route("/producto").post(crearProducto);
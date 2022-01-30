import { Router } from "express";
import { crearTipoProducto } from "../Controllers/tipoProducto.controller.js";

export const tipoProductoRouter = Router();

tipoProductoRouter.route("/tipo-producto").post(crearTipoProducto);

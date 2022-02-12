import { Router } from "express";
import { 
    crearCategoria,
    devolverCategorias,
} from "../controllers/categorias.controller.js";

export const categoriaRouter = Router();

categoriaRouter
    .route("/categoria")
    .post(crearCategoria)
    .get(devolverCategorias);

// categoriaRouter.route("/categoria").post(crearCategoria);
// categoriaRouter.get("/categoria", devolverCategorias);

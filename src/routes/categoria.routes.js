import { Router } from "express";
import { crearCategoria } from "../controller/categoria.controller.js";

export const categoriaRouter = Router();

categoriaRouter
    .route("/categoria")
    .post(crearCategoria)
    .get
    // hacer el get de todas las categorias ordenadas alfabeticamente por el nombre de manera asc
    // NO USAR MAP o FILTER, usar las ordenamientos de mongoose
    ()
    .put
    // hacer el put para actualizar la categoria
    ();

categoriaRouter
    .router("/categoria/:id")
    .get //traer la categoria con todos sus productos
    ();

// {
   // nombre: 'call',
   // imagen: '#000000',
   // productos:
// }
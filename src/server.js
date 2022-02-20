import express from "express";
import mongoose from "mongoose";
import { Producto } from "./models/producto.model.js";
import { Categoria } from "./models/categoria.model.js";
import { CategoriaProducto } from "./models/categoria_producto.model.js";
import { CategoriaRouter } from "./routes/categoria_producto.routes.js";
import { CategoriaProductoRouter } from "./routes/categoria_producto.routes.js";
import { ProductoRouter } from "./routes/producto.routes.js";
import { ProductoService } from "./services/producto.service.js";
import mercadopago from "mercadopago";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(json());

//app.use(ProductoService);
app.use(ProductoRouter);
app.use(CategoriaRouter);
app.use(CategoriaProductoRouter);

app.listen(PORT, async () => {
    console.log(`Servidor corriendo exitosamenteen en el puerto ${PORT}`);
    try {  
    await mongoose.connect(
        process.env.NODE_ENV === "production"
         ? process.env.DATABASE_URL
         :  process.env.DATABASE_URL_DEV
        );
    console.log("Bd sincronizada exitosamente");
    } catch (error) {
        console.log("Error al conectarse con la bd ❌");
    }
});

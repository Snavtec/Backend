import express from 'express';
import morgan from "morgan";
import { authRouter } from "./routes/auth.routes.js";
import { tipoProductoRouter } from './routes/tipoproducto.routes.js';

const app = express();

app.use = (morgan("dev"));
app.use(json());

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
    console.log(`servidor corriendo exitosamente en el puerto ${PORT}`);
});

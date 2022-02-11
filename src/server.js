import express, {json} from "express";
import mongoose from "mongoose";

const app = express();
app.use(json());
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, async() => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    try{
        const respuesta = await mongoose.connect('mongodb://localhost:27817');
        console.log("Se conecto a la base de datos   ");
        console.log(respuesta);
    }catch(error){
        console.log(error);
    }
});

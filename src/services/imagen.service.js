import { Categoria } from "../models/categorias.model.js";
import fs from "fs";
export class ImagenService {
    static subirimagen(id, nombreImagen) {
        // bucar la categoria segun su id, si existe
        const categoriaEncontrada = await Categoria.findById(id).catch(
            //async (error) => 
        );

        // si no existe emitiremos un error
        if (!categoriaEncontrada) {
            // elimina un archivo permanentemente de nuestro servidor
            await fs.promise.unlink(nombreImagen);

            throw new Error("Categoria no existe");
        }

        // actualizaremos su compo de categoriaImagen y le pondremos el valor de nombreImagen

        await Categoria.findOneAndUpdate(
            { _id: id },
            { categoriaImagen: nombreImagen }, 
            { new: true }
        );

    return categoriaActualizada;
    }
}
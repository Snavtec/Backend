import { Producto } from "../models/producto.model.js";

export class ProductoService {
    static async crear(data) {
        try {
            // hay dos formas de guardar valores en la bd
            // Metodo I
            const nuevoProducto = await Producto.create(data);

            /*
            // Metodo II:
            // Primero creamos la instancia pero no se guarda en la bd
            //instanciaNuevoProducto.nombre = "random" + instanciaNuevoProducto.nombre;

            // el metodo save es un metodo asincrono y es el encargado de hacer el guardado de la informacion en la bd
            //await instanciaNuevoProducto.save();

            // Metodo III
            // Si la insercion sera de uno o varias registros se podra utilizar el metodo insertMany y devolvera yb array con todos los elementos agregado en la bd
            //await Producto.insertMany([
                //{ nombre: "Producto 1" },
                //{ nombre: "producto 2" },
                //{ nombre: "producto 3" },
            //]);

            //return nuevoProducto;
        //} catch (e) {
            //return {
                //message: e.message,
            //};
            */
            return nuevoProducto;
        } catch (e) {
            return {
                message: e.message,
            };
        }
    }

}
import { tipoProductoDto } from "../services/dtos/request/tipoProducto.dto.js";
import { TipoProductoService } from "../services/tipoProducto.service.js";
//simplificando...
//import jwt from "jsonwebtoken";

//export async function crearTipoProducto(req, res) {
  //console.log(req.headers);
  //const { authorization } = req.headers;

  //if (!authorization) {
    //return res.status(403).json({
      //message:
        //"No tienes los privilegios suficientes para realizar esta accion 🚫",
    //});
  //}
  // actualmente authorization tiene 'Bearer 123123.12312313.123123'
  // se desea solamente la token
  //const token = authorization.split(" ")[1];

  // esto verificara que la token sea valida y que ademas su contraseña sea correcta, si no lo es emitira un error, si la token es valida retornara el payload (parte intermedia de la token)
  //try {
    //const data = jwt.verify(token, process.env.JWT_SECRET);
    //console.log(data);

    //const resultado = await TipoProductoService.crearTipoProducto({
      //nombreProducto: "",
      //usuarioId: 1,
    //});

    //return res.json(resultado);
  //} catch (error) {
    //console.log(error);
    //return res.status(403).json({
      //message: "Token invalida",
    //});
  //}
//}

export async function crearTipoProducto(req, res) {
  console.log(req.user);

  try {
    const { nombre } = tipoProductoDto(req.body);

    const resultado = await TipoProductoService.crearTipoProducto({ nombre });

    return res.status(201).json(resultado);
  } catch (error) {
    return res.status(400).json({
      error: error.message,
      message: "Error al crear el tipo producto",
    });
  }
}

export async function listarTipoProductos(req, res) {
  const resultado = await TipoProductoService.listTipoProducto();

  return res.json(resultado);
}

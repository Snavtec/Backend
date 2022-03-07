import { usuarioSchema } from '../models/usuario.model.js';
import jwt from "jsonwebtoken";

export class UserService {
    static async register(data) {
        try{
            const user = await Usuario.create(data);
            // TODO: crear al JWT para que pueda acceder
            const token = jwt.sign(
                {
                    userId: user._id,
                    nombre: user.nombre,
                    apellido: user.apellido,
                },
                process.env.SECRET_JWT,
                {
                    expiresIn: "5h",
                }
            );

            return {
                token,
            };
        } catch (e) {
            if (e instanceof Error) {  
            return {
                message: "Hubo un error al crear los usuarios",
                content: e.message,
            }
          }

            //return user;
            // } catch (e) {
            //   return {
           //     message: "Usuario ya existe",
        };
    }
}

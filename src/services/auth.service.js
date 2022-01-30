import { prisma } from "../prisma.js";
import {compareSync} from "bcrypt";
import { sign } from "jsonwebtoken";

export class AuthService {
    static async login({correo, password}) {
        // SELECT password, tipo_usuario FROM USUARIO WHERE correo= '...';
        // si no lo encuentro lanzara un error de not found
        const usuarioEncontrado = await prisma.usuario.findUnique({   
            where: { correo },
            select: { password: true, tipoUsuario: true, id: true },
            rejectOnNotFound: true,
        });

        const resultado = conmpareSync(password, usuarioEncontrado.password);

        if (resultado) {
            sign(
                { id: usuarioEncontrado.id, mensaje_oculto: "Hola soy un mensajito :3" },
                "ArribaPeru",
                // se puede pasar un valor numerico (que sera en segundos) o un string indicando el formato de la sgte manera '7d' (7 dias) '10h' (10 horas), '2 days' (2 dias), si le ponemos '100'
            )
            return { message: "Si el usuario" };
        } else {
            return
        }

    }
}
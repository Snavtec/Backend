import { Tarea } from "../models/tarea.model";
import { Usuario } from "../models/usuario.model";

export class TareaService {
    static async crearTarea(data, usuarioId) {
        try {
            await usuario.indById(usuarioId);
            const result = await Tarea.create({ usuarioId });
            if (!usuario) {
                throw new Error("Usuario no existe");
            }

            const result = await Tarea.create({ ...data, usuarioId });

            return result; 
        } catch (e) {
            if (e instanceof Error) {
                return {
                message: "Error al crear la tarea",
                constent: e.message,
            };
        }
    }
}

    static async listaTareasDelusuario(usuarioId) {
        const result = await Tarea.find({ usuarioId });

        return result;
    }
}

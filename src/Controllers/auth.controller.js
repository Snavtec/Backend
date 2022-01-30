//export const login = async () => {...}
import { AuthService } from "../services/auth.service.js";
import { loginDto } from "../services/dtos/request/login.dto.js";

export async function login(req, res) {
    // const { correo, password } = req.body;
    try {  
      //forma simplificada en la cual en un solo paso hacemos todo 
     // const result = await AuthService.login(login.Dto(req.body));

     //forma extendida en la cual primero llama al dto para validar la informacion dada por el body y luego eso me retornara lo que vendria a ser el correo y la password ya validador correctamente
     const { correo, password } = loginDto(req.body);

     //luego le pasaria esa informacion validada previamente al servicio para que ta se encargue 
    loginDto({ email: correo, password });
    console.log(validacion);

    const result = await AuthService.login({ correo, password });

    res.status(200).json(result);
    } catch (error) {
    res.status(400).json({
        error: error.message,
        message: "Error al hacer login",
    });
  }
}

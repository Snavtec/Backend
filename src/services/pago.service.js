import mercadopago from "mercadopago";
import { Cliente } from "../models/cliente.model.js";
import { Producto } from "../models/producto.model.js";

export class PagoService {
  static async generarPreferenciaDePago({ item, cliente }) {
    // https://www.mercadopago.com.pe/developers/es/reference/preferences/_checkout_preferences/post
    try {
      // buscar ese cliente
      const preferencia = await mercadopago.preferences.create({
        // buscar esos productos (items)
        // hacer la busqueda de los productos usando el .map() 
        payer: {
          name: "Samuel", // obligatorio
          surname: "Navarro", // obligatorio
          address: {
            zip_code: "04002",
            street_name: "Calle Los Platanitos",
            street_number: 123,
          },
          email: "test_user_46542185@testuser.com",
          identification: {
            type: "DNI",
            number: "45678945",
          },
        },
        items: [
          {
            id: "1234",
            title: "zapatillas de running",
            quantity: 1,
            unit_price: 115.0,
            // https://es.wikipedia.org/wiki/ISO_4217
            currency_id: "PEN",
          },
        ],
        // Si la transaccion fue exitosa o pendiente de pago entonces nos redireccionara automaticamente a la pagina en cuestion
        auto_return: "approved",
        // son las url que me llevaran al sitio si el pago fue :
        back_urls: {
          success: "http://localhost:3000/exito",
          pending: "http://localhost:3000/pendiente",
          failure: "http://localhost:3000/fallo",
        },
        notification_url: `${ process.env.DOMINIO }/notificaciones`,
      });

      return {
        resultado: preferencia,
      };
    } catch (error) {
      console.log(error);
      return {
        error: error.message,
      };
    }
  }
}

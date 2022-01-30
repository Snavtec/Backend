import { hashSync } from "bcrypt";

export default async(prisma) => {

    const password = hashSync('Welcome123!', 10);

    await prisma.usuario.upsert({
        create: {
            nombre: 'Samuel',
            correo: 'samuel.navarro2305@gmail.com',
            password: "123456",
            tipoUsuario: "ADMIN",
    },
    update: {
        password,
    },
    where: {
        correo: "samuel.navarro2305@gmail.com"
    },
})
}
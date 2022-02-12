export function subirImagen(req, res) {
    console.log(req.file); // aca se almacenara la imagen subida previamente al servidor gracias 
    const { id } = req.params;
    try {  
        const respuesta = await ImagenService.subirImagen(id, req.file.path)
        return res.status(200).json(respuesta);
} catch (error) {
    return res
        .status(400)
        .json({ message: "Error al subir la imagen", content: error.message });
    }     
}

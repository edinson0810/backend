const validarDatos = (req, res, next) => {
    const { nombre, descripcion } = req.body;
    if (!nombre || nombre.trim() === "") {
      return res
        .status(400)
        .json({ mensaje: "El nombre es obligatorio" })
    }
    if (!descripcion || descripcion.trim() === "") {
      return res
        .status(400)
        .json({ mensaje: "La descripcion es obligatoria" })
    }
    console.log("paso la validación");
    next()
  }
  
  export default validarDatos;
import Categoria from "../models/Categoria.js";


class CategoriasController{
// obtener todas las categorias de la base de datos
 static async getAllCategorias(req, res) {
   const OBJCategoria = new Categoria();
    const categorias = await OBJCategoria.getALL();
    return res.json(categorias);
}
 
 static async createCategoria (req,res) {
const { nombre, descripcion} = req.body;
const OBJCategoria = new Categoria();
const categorias = await OBJCategoria.create(nombre, descripcion);

}

}

export default CategoriasController;
import Categoria from "../models/Categoria.js";

class CategoriaController {

  // Métodos
  static async getAllCategorias(req, res) {
    const OBJCategoria = new Categoria();
    const categorias = await OBJCategoria.getAll();
    return res.json(categorias);
  }
  // Método crear categoria
  static async createCategoria(req, res) {
    const { nombre, descripcion } = req.body;
    const OBJCategoria = new Categoria();
    const categoria = await OBJCategoria.create(nombre, descripcion);
    return res.json(categoria)
  }
  // Método eliminar categoria
  static deleteCategoria(req, res) {
    const { id } = req.params;
    const OBJCategoria = new Categoria();
    const categoria = OBJCategoria.delete(id);
  }

}
export default CategoriaController;
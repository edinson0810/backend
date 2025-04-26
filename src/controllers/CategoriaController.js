import Categoria from "../models/Categoria.js";

class CategoriaController {
 /**
  * Descripcion claro del metodo
  * @param {object} req 
  * @param {object} res 
  * @returns json
  */
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

  static async updateCategoria(req, res) {
    const {id} = req.params;
    const { nombre } = req.body;
    const OBJCategoria = new Categoria();
     const data =  await OBJCategoria.update(id, nombre);
    return res.json(data)
   
  }

 // Método pra actualizar parcial
 static async updatePartial(req, res){
  // Obtener el id
  const {id} = req.params;
  const campos = req.body;
  const OBJCategoria = new Categoria();
 const data = await OBJCategoria.updatePartial(id, campos); 
  return res.json(data);
}

  // Método eliminar categoria
  static async deleteCategoria(req, res) {
    const { id } = req.params;
    const OBJCategoria = new Categoria();
    const categoria = await OBJCategoria.delete(id);
    return res.json(categoria);
  }

}
export default CategoriaController;
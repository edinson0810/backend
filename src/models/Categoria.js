import connection from '../utils/db.js'

class Categoria {
  constructor() { }

  // Métodos -> Listar
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM categorias");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener las catgorías");
    }
  }
  // Método -> crear una categoría
  async create(nombre, descripcion) {
    const [result] = await connection.query("insert into categorias (nombre, descripcion) value (?, ?)", [nombre, descripcion]);
    return {
      id: result.insertId,
      nombre,
      descripcion
    }
  }

  async getById(id) {
    try {
      const [rows] = await connection.query("select * from categorias where id = ?", [id]);
      if (rows.length === 0) {
        throw new Error("Categoria no encontrada");
      }
      return rows[0];
    } catch (error) {
      throw new Error("Error al obtener la categoria");
    }
  }

  estaRelacionadaConProductos(categoria_id) {
    // select * from productos where categoria_id = 3
  }

  async delete(id) {
    let datos = await this.getById(id)
    // let tieneRelacion = this.estaRelacionadaConProductos()
    console.log(datos);
  }
}

export default Categoria;
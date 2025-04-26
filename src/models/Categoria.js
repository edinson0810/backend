import connection from '../utils/db.js'

class Categoria {
  constructor() { }

  // Métodos -> Listar
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM categorias");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener las categorías");
    }
  }
  // Método -> crear una categoría
  async create(nombre, descripcion) {
    if (!nombre || !descripcion) {
      return handleResponse({ type: 'validation', customMessage: "Nombre y descripción son requeridos" });
    }
    try {
      const [result] = await connection.query(
        "insert into categorias (nombre,descripcion) value (?, ?)",
        [nombre, descripcion]
      );

      return handleResponse({
        data: [{ id: result.insertId, nombre, descripcion }],
        customMessage: "Categoría creada con éxito"
      });
    } catch (error) {
      return handleResponse({ error, type: 'database', customMessage: "Error al crear la categoría" });
    }
  }

  async getById(id) {
    try {
      const [rows] = await connection.query("select * from categorias where id = ?",[id]);
      // console.log(rows);
      
      if (rows.length === 0) {
        throw new Error("Categoria no encontrada");
      }
      return rows[0];
    } catch (error) {
      throw new Error("Error al obtener la categoria");
    }
  }

  async estaRelacionadaConProductos(categoria_id) {
    try {
      const [rows] = await connection.query("select * from productos where categoria_id = ?", 
      [categoria_id]);
      // console.log(rows);
      
      return rows;
    } catch (error) {
      throw new Error("Error al obtener la categoria");
    }
  }

async update (id, nombre){
  
    try {
    const [result] = await connection.query("update productos set nombre  = ? where id = ?", [nombre,id]);
    if (result.affectedRows === 0) {
      return {
        error: true,
        mensaje : "No se pudo actualiziar la categoria"
        
        
      }
    }
    return{
      error : false,
      mensaje: "Categoria actualizada exitosamente",
    }
  } catch (error) {
    throw new Error("Error al actualizar la categoria");
    
  }
}

  async delete(id) {
    try {
     let datos = await this.getById(id)
    let tieneProductos = await this.estaRelacionadaConProductos(datos.id)
    if (tieneProductos.length > 0) {
      return {
        error : true,
      mensaje : "No puede eliminar la Categoria"
      } 
    }
      const [result] = await connection.query("delete from categorias  where id = ?", [id]);
   if (result.affectedRows === 0) {
    return {
      error: true,
      mensaje : " Categoria no encontrada"
    }
   } 
   return {
    error: false,
    mensaje: " Categoria eliminada exitosamente",
    data: datos
   }
    } catch (error) {
      console.log(error);
     }
    }
}

export default Categoria;
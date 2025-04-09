import connection from "../utils/db.js";

class Categoria{
    constructor() {
        // console.log("hola desde el constructor ");
        
    }
   async getALL() {
        try {
            const [rows] = await connection.query("Select * from categorias");
            return rows;
        } catch (error) {
            throw error("error al obtener la categorias");
        }
        
    }

async create(nombre, descripcion) {
  const [result] = await connection.query("insert into categorias (nombre, descripcion) values (?, ?)", [nombre, descripcion]);

 return{
    id : result.id,
    nombre: nombre,
    descripcion: descripcion
 }

}

 async getById(id) {
   try {
    const [rows] = await connection.query("select * from categorias whee id = ?", [id]);
    if( rows.length === 0) {
        throw new Error ("Categoria no encontrada");
    }
    return rows[0];
   } catch (error) {
    throw new Error ("Error al obtener la categoria");
   }
}

estaRelaconadaConProductos( categoria_id){
    
}


 async delete (id){
let datos = await this.getById(id);
console.log(datos);

}

}

export default Categoria;
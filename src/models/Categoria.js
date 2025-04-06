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

create(nombre, descripcion) {
 connection.query("insert into categorias (nombre, descripcion) values (?, ?)", [nombre, descripcion]);
}

}

export default Categoria;
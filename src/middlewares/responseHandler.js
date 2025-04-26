export function handleResponse({ error = null, type, customMessage, data = [] }) {
    if (error) {
      console.error(error); // Registrar el error para depuración
  
      switch (type) {
        case 'database':
          return {
            error: true,
            codigo: 500,
            mensaje: customMessage || "Error en la operación de la base de datos",
            data: []
          };
        case 'not_found':
          return {
            error: true,
            codigo: 404,
            mensaje: customMessage || "Recurso no encontrado",
            data: []
          };
        case 'validation':
          return {
            error: true,
            codigo: 400,
            mensaje: customMessage || "Error de validación",
            data: []
          };
        default:
          return {
            error: true,
            codigo: 500,
            mensaje: customMessage || "Error desconocido",
            data: []
          };
      }
    } else {
      return {
        error: false,
        codigo: 200,
        mensaje: customMessage || "Operación exitosa",
        data: data
      };
    }
  }
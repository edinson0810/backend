import express from "express";
import CategoriasController from "../controllers/CategoriaController.js";
import validarDatos from "../middlewares/createCategoria.js";


const router = express();

router.get("/", CategoriasController.getAllCategorias);

router.post("/",validarDatos, CategoriasController.createCategoria);

router.delete("/:id", CategoriasController, deleteCategoria);


export default router;
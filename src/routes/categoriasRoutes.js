import express from "express";
import CategoriasController from "../controllers/CategoriaController.js";

const router = express();

router.get("/", CategoriasController.getAllCategorias);

router.post("/", CategoriasController.createCategoria);

export default router;
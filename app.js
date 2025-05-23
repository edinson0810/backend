import express from "express";
import bodyParser from "body-parser";
import categoriasRoutes from "./src/routes/categoriasRoutes.js";

const app = express(); 

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

app.use("/categorias", categoriasRoutes)


app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000");
})
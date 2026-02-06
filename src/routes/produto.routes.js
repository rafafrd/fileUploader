import { Router } from "express";
import uploadImage from "../middleware/uploadimage.middleware.js";
import produtoController from "../controllers/produto.controller.js";

const produtoRoutes = Router();

// Route para upload de imagem
produtoRoutes.post(
  "/upload/images", // endpoint de upload
  uploadImage, // middleware de upload
  produtoController.uploadImage, // controller para tratar a requisição
);

produtoRoutes.post(
  "/upload/files", // endpoint de upload
  uploadFile, // middleware de upload
  produtoController.uploadFile, // controller para tratar a requisição
);

export default produtoRoutes;

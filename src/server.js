import express from "express";
import produtoRoutes from "./routes/produto.routes.js";
import path from "path";
import "dotenv/config";

const app = express();
app.use("/", produtoRoutes);
app.use("/images", express.static(path.resolve("uploads/images"))); // Servir arquivos estáticos da pasta de uploads

app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `Servidor rodando em http://localhost:${process.env.SERVER_PORT}`,
  );
});

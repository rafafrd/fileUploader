const produtoController = {
  /**
   * #### route POST /produtos/upload
   * #### desc Faz o upload de uma imagem para o servidor
   * @param {object} req - Objeto de requisição Express
   * @param {object} res - Objeto de resposta Express
   * @return {object} Resposta JSON com detalhes do upload ou mensagem de erro
   * #### example
   * POST "image=@/caminho/para/sua/imagem.jpg" http://localhost:3000/produtos/upload
   */
  uploadImage(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "Nenhuma imagem foi enviada." });
      }
      res.status(200).json({
        message: "Imagem enviada com sucesso!",
        file: {
          filename: req.file.filename,
          size: req.file.size,
          mimetype: req.file.mimetype,
        },
      });
    } catch (error) {
      console.error("Erro ao fazer upload da imagem:", error);
      res.status(500).json({
        error: "Erro ao fazer upload da imagem",
        details: error.message,
      });
    }
  },
};

export default produtoController;

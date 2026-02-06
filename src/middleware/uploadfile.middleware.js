import createMulter from "../config/produto.multer.js";

const uploadFile = createMulter({
  folder: "Arquivos",
  allowTypes: [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ],
  fileSize: 10 * 1024 * 1024, // 10 MB
}).single("file");

export default uploadFile;

import multer from "multer";
import path from "path";
import crypto from "crypto";
import fs from "fs";
import { dir } from "console";

const baseUploadDir = path.resolve(process.cwd(), "uploads");

const verificaDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const createMulter = ({ folder, allowTypes, fileSize }) => {};

export default createMulter;

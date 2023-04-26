import path from "path";
import { pool } from "../db.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getLogin = (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "login.html"));
};

export const validateLogin = (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  res.send("Post success");
  // pool.query("SELECT * FROM usuarios WHERE email = ?");
};

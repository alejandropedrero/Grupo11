import { pool } from "../db.js";
import bcrypt from "bcrypt";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getRegister = (req, res) => {
  res.sendFile(path.join(__dirname, "../../../frontend/views/register.html"));
};

export const validateRegister = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO users (email, password, name) VALUES (?, ?, ?)",
      [email, hashedPassword, name]
    );

    return res.status(200).redirect("/login");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating user");
  }
};

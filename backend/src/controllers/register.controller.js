import path from "path";
import { pool } from "../db.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getRegister = (req, res) => {
  res.render("register");
};

export const validateRegister = async (req, res) => {
  try {
    const { name, email, password, last_name } = req.body;

    await pool.query(
      "INSERT INTO users (name, last_name, email, password) VALUES (?, ?, ?, ?)",
      [name, last_name, email, password]
    );

    return res.status(200).redirect("/login");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating user");
  }
};

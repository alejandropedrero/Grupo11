import path from "path";
import { pool } from "../db.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getLogin = (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "login.html"));
};

export const validateLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password]
    );

    if (rows.length === 0) {
      return res.status(401).send("Incorrect email or password");
    }

    return res.redirect("/home");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error occurred while logging in");
  }
};

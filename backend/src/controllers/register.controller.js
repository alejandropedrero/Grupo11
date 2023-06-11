import { pool } from "../db.js";
import bcrypt from "bcrypt";

export const validateRegister = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const profile_picture = "https://i.postimg.cc/fT98Tg8Z/23.png"; // Imagen genérica para nuevos usarios

    if (!email || !password || !name) {
      return res
        .status(400)
        .json({ error: "Debes completar todos los campos" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO users (email, password, name, profile_picture) VALUES (?, ?, ?, ?)",
      [email, hashedPassword, name, profile_picture]
    );

    return res.status(200).json({ message: "Usuario creado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al crear el usuario" });
  }
};

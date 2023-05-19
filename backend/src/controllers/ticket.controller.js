import { pool } from "../db.js";

export const createTicket = async (req, res) => {
  try {
    const { titulo, consulta } = req.body;
  
    if (!titulo || !consulta) {
      return res.status(400).json({ error: "Missing fields" });
    }

    await pool.query(
      "INSERT INTO ticket (titulo, consulta) VALUES (?, ?)",
      [titulo, consulta]
    );

    return res.status(200).json({ message: "Ticket registrado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al enviar el ticket" });
  }
};

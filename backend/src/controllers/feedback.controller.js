import { pool } from "../db.js";
import { format } from "date-fns";

export const addFeedback = async (req, res) => {
  try {
    const { text, recipient_id } = req.body;
    const sender_id = req.headers["x-user-id"];
    const message_date = format(new Date(), "yyyy-MM-dd HH:mm:ss");

    await pool.query(
      "INSERT INTO feedback (sender_id, recipient_id, text, message_date) VALUES (?, ?, ?, ?)",
      [sender_id, recipient_id, text, message_date]
    );

    res.status(201).json({
      message: "Comentario enviado",
      sender_id,
      recipient_id,
      text,
      message_date,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

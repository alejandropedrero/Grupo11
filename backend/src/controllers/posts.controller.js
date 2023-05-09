import { pool } from "../db.js";

export const createPost = async (req, res) => {
  try {
    const { userId, text } = req.body;
    const [result] = await pool.query(
      "INSERT INTO posts (user_id, text) VALUES (?, ?)",
      [userId, text]
    );
    const postId = result.insertId;
    const [rows] = await pool.query(
      "SELECT p.id, p.text, p.created_at, u.name, u.profile_picture FROM posts p INNER JOIN users u ON p.user_id = u.id WHERE p.id = ?",
      [postId]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error occurred while creating the post." });
  }
};

import { pool } from "../db.js";
import { format } from "date-fns";

export const getPosts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM posts");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createPost = async (req, res) => {
  try {
    const { text } = req.body;
    const user_id = req.headers["x-user-id"];
    const post_date = format(new Date(), "yyyy-MM-dd HH:mm:ss");
    await pool.query(
      "INSERT INTO posts (user_id, text, post_date) VALUES (?, ?, ?)",
      [user_id, text, post_date]
    );
    const result = await pool.query("SELECT LAST_INSERT_ID() as id");
    const postId = result[0].id;
    res.status(201).json({
      message: "Post created successfully",
      postId,
      text,
      post_date,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

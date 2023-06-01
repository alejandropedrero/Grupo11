import { pool } from "../db.js";
import { format } from "date-fns";

export const getPosts = async (req, res) => {
  try {
    const query = `
      SELECT
        posts.*,
        users.name AS userName,
        DATE_FORMAT(posts.post_date, '%d-%m-%Y') AS formatted_date
      FROM
        posts
      INNER JOIN
        users ON posts.user_id = users.id
      ORDER BY
        posts.post_date DESC
    `;

    const [rows] = await pool.query(query);
    res.status(200).json(rows);
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

    const [userResult, _] = await pool.query(
      "SELECT name, profile_picture FROM users WHERE id = ?",
      [user_id]
    );
    const userName = userResult[0].name;
    const userProfilePicture = userResult[0].profile_picture;

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
      userName,
      userProfilePicture,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

import { pool } from "../db.js";

export const getEducation = async (req, res) => {
    try {
      const userId = req.params.id;
      const [rows] = await pool.query(
        "SELECT user_id, education, education_institution, education_end FROM education WHERE user_id = ?",
        [userId]
      );
      const educationResults = {
        results: rows,
      };
      if (!rows.length) {
        return res.status(404).json({ error: "User not found" });
      }
  
      res.status(200).json(educationResults);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Error occurred while fetching education." });
    }
  };
  
  //Function to update education data in the database
  export const addEducation = async (req, res) => {
    try {
      const educationData = req.body; //Para hacer una request solo del json del body
      console.log(req.body);
      const userId = req.params.id;
      const query = "INSERT INTO education (user_id, education, education_institution, education_end) VALUES (?, ?, ?, ?)";
      const [rows] = await pool.query(query, [userId,  educationData.education, educationData.education_institution, educationData.education_end]);
      res.status(200).json(rows[0]);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Error occurred while updating education." });
    }
  };
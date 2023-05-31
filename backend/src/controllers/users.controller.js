import { pool } from "../db.js";

export const getUsers = async (req, res) => {
  const [rows] = await pool.query(
    "SELECT id, name, email, profile_picture FROM users"
  );
  res.json(rows);
};

export const getCurrentUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const [rows] = await pool.query(
      "SELECT id, name, email, profile_picture, birthdate, linkedin, time_availability, city, country, job_1, job_1_company, job_1_end, job_1_start, job_2, job_2_company, job_2_end, job_2_start, job_3, job_3_company, job_3_end, job_3_start, education_1, education_1_institution, education_1_end, education_2, education_2_institution, education_2_end, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2 FROM users WHERE id = ?",
      [userId]
    );
    if (!rows.length) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error occurred while fetching the profile." });
  }
};

//Function to update user data in the database
export const updateCurrentUser = async (req, res) => {
  try {
    const userData = req.body; //Para hacer una request solo del json del body
    console.log(req.body) 
    const userId = req.params.id;
    const [rows] = await pool.query(
      "UPDATE users SET name = '" +
        userData.name +
        "', email = '" +
        userData.email +
        "', city = '" +
        userData.city +
        "', country = '" +
        userData.country +
        "', birthdate = '" +
        userData.birthdate +
        "', time_availability = '" +
        userData.time_availability +
        "', linkedin = '" +
        userData.linkedin +
        "' WHERE id = " +
        userId +
        ""
    );
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error occurred while updating the profile." });
  }
};

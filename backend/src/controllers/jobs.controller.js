import { pool } from "../db.js";

export const getJobs = async (req, res) => {
  try {
    const userId = req.params.id;
    const [rows] = await pool.query(
      "SELECT user_id, job, job_company, job_end, job_start FROM jobs WHERE user_id = ?",
      [userId]
    );
    const jobsResults = {
      results: rows,
    };
    if (!rows.length) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(jobsResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error occurred while fetching jobs." });
  }
};

//Function to update job data in the database
export const addJob = async (req, res) => {
  try {
    const jobData = req.body;
    console.log(req.body);
    const userId = req.params.id;
    const query =
    "INSERT INTO jobs (user_id, job, job_company, job_end, job_start) VALUES (?, ?, ?, ?, ?)";
    const [rows] = await pool.query(query, [userId, jobData.job, jobData.job_company, jobData.job_end, jobData.job_start]);
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error occurred while updating jobs." });
  }
};

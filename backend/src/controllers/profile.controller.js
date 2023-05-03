import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getProfile = (req, res) => {
  res.sendFile(path.join(__dirname, "../../../frontend/views/profile.html"));
};

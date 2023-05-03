import { createPool } from "mysql2/promise";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "./env/.env") });

// createConnection mantiene solo un hilo de conexión
// createPool crea un conjunto de conexiones reutilizables

export const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.PORT,
  database: process.env.DB_DATABASE,
});

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Conectado a la base de datos");
    connection.release();
  } catch (error) {
    console.log(error);
  }
})();

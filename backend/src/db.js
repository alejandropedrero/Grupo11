import { createPool } from "mysql2/promise";

// createConnection mantiene solo un hilo de conexión
// createPool crea un conjunto de conexiones reutilizables

export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "root",
  port: 3306,
  database: "tecladb",
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

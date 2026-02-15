import pool from "./pool";

async function getAllGuitars() {
  const { rows } = await pool.query("SELECT * FROM guitars");
  return rows;
}

export { getAllGuitars };

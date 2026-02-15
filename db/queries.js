import pool from "./pool.js";

async function getAllGuitars() {
  const { rows } = await pool.query("SELECT * FROM guitars");
  return rows;
}

async function getAllFlutes() {
  const { rows } = await pool.query("SELECT * FROM flutes");
  return rows;
}
async function getAllOuds() {
  const { rows } = await pool.query("SELECT * FROM ouds");
  return rows;
}

export { getAllGuitars, getAllFlutes, getAllOuds };

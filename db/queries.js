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

const allowedTables = ["guitars", "ouds", "flutes"];
async function deleteIns(name, tableName) {
  if (!allowedTables.includes(tableName)) {
    throw new Error("Invalid table name");
  }
  try {
    const rows = await pool.query(`DELETE FROM ${tableName} WHERE name = $1`, [
      name,
    ]);
    return rows;
  } catch (err) {
    console.error("Delete failed: ", err);
    throw err;
  }
}
async function updateIns(newName, oldName, tableName) {
  if (!allowedTables.includes(tableName)) {
    throw new Error("Invalid table Name");
  }
  try {
    const result = await pool.query(
      `UPDATE ${tableName} SET name = $1 WHERE name = $2`,
      [newName, oldName],
    );
    return result;
  } catch (err) {
    console.error(`Update failed: `, err);
    throw err;
  }
}

async function addIns(name, tableName) {
  if (!allowedTables.includes(tableName)) {
    throw new Error("Invalid table name");
  }
  try {
    const result = await pool.query(
      `INSERT INTO ${tableName} (name) VALUES ($1)`,
      [name],
    );
    return result;
  } catch (err) {
    console.error("Failed to add new instrument: ", err);
    throw err;
  }
}

export {
  getAllGuitars,
  getAllFlutes,
  getAllOuds,
  deleteIns,
  addIns,
  updateIns,
};

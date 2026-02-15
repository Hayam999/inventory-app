import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  user: "hayam",
  database: "music_instruments",
  password: "hayam999",
  port: 5432,
});
export default pool;

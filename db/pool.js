import Pool from "pg";

module.exports = new Pool({
  host: "localhost",
  user: "hayam",
  database: "music_instruments",
  password: "hayam999",
  port: 5432,
});

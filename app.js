import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import process from "node:process";
import flutesRouter from "./routes/flutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", { message: "Welcome to the insturments store" });
});
app.use("/flutes", flutesRouter);

const PORT = 3001;
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

const server = app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Server running on http://localhost:${PORT}`);
});

// Graceful shutdown on Ctrl+C
process.on("SIGINT", () => {
  console.log("\nShutting down gracefully...");
  server.close(() => {
    console.log("Port released. Bye!");
    process.exit(0);
  });
});

process.on("SIGTERM", () => {
  server.close(() => process.exit(0));
});

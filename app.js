import express from "express";
import path from "node:path";
const app = express();
import flutesRouter from "./routes/flutes.js";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/flutes", flutesRouter);

const PORT = 5173;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log("Hello from express app");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

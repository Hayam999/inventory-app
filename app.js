import express from "express";

const app = express();
import flutesRouter from "./routes/flutes.js";

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

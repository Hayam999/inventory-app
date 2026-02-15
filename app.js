import express from "express";

const app = express();

app.get("/", (req, res) => res.send("Hello world"));

const PORT = 5173;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log("Hello from express app");
});

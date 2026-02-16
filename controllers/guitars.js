import { getAllGuitars } from "../db/queries.js";

async function getGuitarsController(req, res) {
  const guitars = await getAllGuitars();
  if (!guitars) {
    res.status(404).send("Guitars not found");
    return;
  }
  res.send(`Guitars: ${guitars}`);
}

export { getGuitarsController };

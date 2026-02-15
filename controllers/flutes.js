import { getAllFlutes } from "../db/queries.js";

async function getFlutesController(req, res) {
  const flutes = await getAllFlutes();

  if (!flutes) {
    res.status(404).send("Flutes not found");
    return;
  }
  res.send(`flutes: ${flutes}`);
}

export { getFlutesController };

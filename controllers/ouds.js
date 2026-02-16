import { getAllOuds } from "../db/queries.js";

async function getOudsController(req, res) {
  const ouds = await getAllOuds();

  if (!ouds) {
    res.status(404).send("Ouds not found");
    return;
  }
  res.send(`Ouds: ${ouds}`);
}

export { getOudsController };

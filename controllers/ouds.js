import { getAllOuds } from "../db/queries.js";

async function getOudsController(req, res, next) {
  try {
    const ouds = await getAllOuds();

    if (!ouds || ouds.length === 0) {
      res.status(404).send("Ouds not found");
      return;
    }
    res.locals.instruments = ouds.map((o) => o.name);
    next();
  } catch (err) {
    next(err);
  }
}

export { getOudsController };

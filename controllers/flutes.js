import { getAllFlutes } from "../db/queries.js";

async function getFlutesController(req, res, next) {
  try {
    const flutes = await getAllFlutes();

    if (!flutes || flutes.length === 0) {
      res.status(404).send("Flutes not found");
      return;
    }
    res.locals.instruments = flutes.map((f) => f.name);

    next();
  } catch (err) {
    next(err);
  }
}

export { getFlutesController };

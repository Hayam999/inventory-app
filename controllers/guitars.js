import { getAllGuitars } from "../db/queries.js";

async function getGuitarsController(req, res, next) {
  try {
    const guitars = await getAllGuitars();
    if (!guitars || guitars.length === 0) {
      res.status(404).send("Guitars not found");
      return;
    }
    res.locals.instruments = guitars.map((g) => g.name);
    next();
  } catch (err) {
    next(err);
  }
}

export { getGuitarsController };

import { getAllFlutes } from "../db/queries.js";
import { deleteIns } from "../db/queries.js";

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
async function deleteFluteController(req, res, next) {
  try {
    const { name } = req.params;
    await deleteIns(name, "flutes");
    next();
  } catch (err) {
    console.error("Failed to delete the flute: ", err);
    throw err;
  }
}

export { getFlutesController, deleteFluteController };

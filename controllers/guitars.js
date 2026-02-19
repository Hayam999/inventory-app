import { getAllGuitars, deleteIns } from "../db/queries.js";

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

async function deleteGuitarController(req, res, next) {
  try {
    const { name } = req.params;
    await deleteIns(name, "guitars");
    next();
  } catch (err) {
    console.error("Failed to delete the guitar: ", err);
    throw err;
  }
}

export { getGuitarsController, deleteGuitarController };

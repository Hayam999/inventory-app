import { getAllOuds, deleteIns, updateIns, addIns } from "../db/queries.js";

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

async function deleteOudController(req, res, next) {
  try {
    const { name } = req.params;
    await deleteIns(name, "ouds");
    next();
  } catch (err) {
    console.error("Failed to delete the Oud: ", err);
    throw err;
  }
}

async function updateOudController(req, res, next) {
  try {
    const { name } = req.params;
    const newName = req.body.newName;

    await updateIns(newName, name, "ouds");
    next();
  } catch (err) {
    console.error("Failed to update the oud: ", err);
    throw err;
  }
}

async function addOudController(req, res, next) {
  try {
    const name = req.body.typeName;

    await addIns(name, "ouds");
    next();
  } catch (err) {
    console.error("Failed to add the oud: ", err);
    throw err;
  }
}

export {
  getOudsController,
  deleteOudController,
  updateOudController,
  addOudController,
};

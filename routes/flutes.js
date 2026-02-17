import { Router } from "express";
import { getFlutesController } from "../controllers/flutes.js";

const flutesRouter = Router();

flutesRouter.get("/", getFlutesController, (req, res) => {
  res.render("instrument", { instrumentName: "Flute" });
});

export default flutesRouter;

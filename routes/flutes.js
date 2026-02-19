import { Router } from "express";
import {
  getFlutesController,
  deleteFluteController,
} from "../controllers/flutes.js";
const flutesRouter = Router();

const renderFlutes = (req, res) => {
  res.render("instrument", {
    instrumentName: "flute",
  });
};

flutesRouter.get("/", getFlutesController, renderFlutes);
flutesRouter.delete("/delete/:name", deleteFluteController, renderFlutes);

export default flutesRouter;

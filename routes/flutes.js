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
flutesRouter.post("/delete/:name", deleteFluteController, (req, res) => {
  res.redirect("/flutes");
});

export default flutesRouter;

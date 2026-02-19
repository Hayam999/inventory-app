import { Router } from "express";
import {
  getOudsController,
  deleteOudController,
  updateOudController,
  addOudController,
} from "../controllers/ouds.js";
const oudsRouter = Router();

oudsRouter.get("/", getOudsController, (req, res) => {
  res.render("instrument", { instrumentName: "Oud" });
});

oudsRouter.post("/delete/:name", deleteOudController, (req, res) => {
  res.redirect("/ouds");
});

oudsRouter.put("/update/:name", updateOudController, (req, res) => {
  res.redirect("/ouds");
});

oudsRouter.post("/add", addOudController, (req, res) => {
  res.redirect("/ouds");
});
export default oudsRouter;

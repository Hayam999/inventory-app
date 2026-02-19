import { Router } from "express";
import {
  getGuitarsController,
  deleteGuitarController,
  updateGuitarController,
  addGuitarController,
} from "../controllers/guitars.js";
const guitarsRouter = Router();

guitarsRouter.get("/", getGuitarsController, (req, res) => {
  res.render("instrument", { instrumentName: "Guitar" });
});
guitarsRouter.post("/delete/:name", deleteGuitarController, (req, res) => {
  res.redirect("/guitars");
});

guitarsRouter.put("/update/:name", updateGuitarController, (req, res) => {
  res.redirect("/guitars");
});
guitarsRouter.post("/add", addGuitarController, (req, res) => {
  res.redirect("/guitars");
});

export default guitarsRouter;

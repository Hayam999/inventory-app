import { Router } from "express";
import {
  getGuitarsController,
  deleteGuitarController,
} from "../controllers/guitars.js";
const guitarsRouter = Router();

guitarsRouter.get("/", getGuitarsController, (req, res) => {
  res.render("instrument", { instrumentName: "Guitar" });
});
guitarsRouter.post("/delete/:name", deleteGuitarController, (req, res) => {
  res.redirect("/guitars");
});

export default guitarsRouter;

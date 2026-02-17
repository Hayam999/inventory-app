import { Router } from "express";
import { getGuitarsController } from "../controllers/guitars.js";
const guitarsRouter = Router();

guitarsRouter.get("/", getGuitarsController, (req, res) => {
  res.render("instrument", { instrumentName: "Guitar" });
});

export default guitarsRouter;

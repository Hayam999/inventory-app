import { Router } from "express";
import { getGuitarsController } from "../controllers/guitars.js";
const guitarsRouter = Router();

guitarsRouter.get("/", getGuitarsController);

export default guitarsRouter;

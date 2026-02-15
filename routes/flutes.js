import { Router } from "express";
import { getFlutesController } from "../controllers/flutes.js";
const flutesRouter = Router();

flutesRouter.get("/", getFlutesController);

export default flutesRouter;

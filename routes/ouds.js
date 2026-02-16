import { Router } from "express";
import { getOudsController } from "../controllers/ouds.js";
const oudsRouter = Router();

oudsRouter.get("/", getOudsController);

export default oudsRouter;

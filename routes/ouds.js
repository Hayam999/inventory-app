import { Router } from "express";
import { getOudsController } from "../controllers/ouds.js";
const oudsRouter = Router();

oudsRouter.get("/", getOudsController, (req, res) => {
  res.render("instrument", { instrumentName: "Oud" });
});

export default oudsRouter;

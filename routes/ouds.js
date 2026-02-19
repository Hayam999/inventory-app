import { Router } from "express";
import { getOudsController, deleteOudController } from "../controllers/ouds.js";
const oudsRouter = Router();

oudsRouter.get("/", getOudsController, (req, res) => {
  res.render("instrument", { instrumentName: "Oud" });
});

oudsRouter.post("/delete/:name", deleteOudController, (req, res) => {
  res.redirect("/ouds");
});

export default oudsRouter;

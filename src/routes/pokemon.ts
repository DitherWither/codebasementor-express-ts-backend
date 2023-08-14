import { NextFunction, Request, Response, Router } from "express";
import pokedex from "../db/pokedex.json";

const router = Router();

/* GET All Pokemon */
router.get(
  "/",
  function (req: Request, res: Response, next: NextFunction): void {
    res.json(pokedex);
  }
);

/* GET Pokemon by Id. */
router.get(
  "/:id",
  function (req: Request, res: Response, next: NextFunction): void {
    const id  = Number(req.params.id ?? "undefined");

    if (Number.isNaN(id)) {
      res.status(400).json({ error: "Invalid ID" });
      return;
    }

    const pokemon = pokedex.find((e) => e.id === +id);

    if (pokemon == undefined) {
      res.status(404).json({error: "Not Found"})
      return
    }

    res.status(200).json(pokemon);
    return;
  }
);

/* GET Pokemon by English Name */
router.get(
  "/name/:name",
  function (req: Request, res: Response, next: NextFunction): void {
    // TODO: Implement this route. See swagger docs for details, by visiting http://localhost:3000/api-docs
    res.status(501).json({ message: "Not Implemented" });
    return;
  }
);

/* GET Pokemon by Type */
router.get(
  "/type/:type",
  function (req: Request, res: Response, next: NextFunction): void {
    // TODO: Implement this route. See swagger docs for details, by visiting http://localhost:3000/api-docs
    res.status(501).json({ message: "Not Implemented" });
    return;
  }
);

/* GET Pokemon by HP */
router.get(
  "/hp",
  function (req: Request, res: Response, next: NextFunction): void {
    // TODO: Implement this route. See swagger docs for details, by visiting http://localhost:3000/api-docs
    res.status(501).json({ message: "Not Implemented" });
    return;
  }
);

export default router;

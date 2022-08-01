import { Router } from "express";
import { createIngridient, findAllIngridients, findIngridientByName } from "./service/IngridientService";


export const router = Router();


router.get("/ingridients", (req, res) => {
    return res.json(findAllIngridients());
});

router.get("/ingridients/:name", (req, res) => {
    return res.json(findIngridientByName(req.param.name));
});

router.post("/ingridients/create", (req, res) => {
    let saved = createIngridient(req.body);
    return res.status(201).json(saved);
});


import { Router } from "express";
import { stubIngridients } from "./database/stubIngridients";
import { stubRecipes } from "./database/stubRecipes";
import { findSuggestions, takeSuggestions } from "./service/SuggestionService";

export const router = Router();

router.get("/ingridients", (req, res) => {
    return res.json(stubIngridients);
});

router.get("/ingridients/:name", (req, res) => {
    var ingridient = stubIngridients.find(i => i.name == req.params.name);
    return res.json(ingridient);
});

router.get("/recipes", (req, res) => {
    return res.json(stubRecipes);
});

router.get("/suggestions", (req, res) => {
    return res.json(findSuggestions());
});

router.post("/suggestions", (req, res) => {
    takeSuggestions(req.body);
    return res.status(200).json(stubIngridients);
});


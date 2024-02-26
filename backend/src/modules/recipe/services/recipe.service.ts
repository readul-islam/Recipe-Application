import { Request } from "express";
import { Recipe } from "../../../models/recipe.model";

export const createRecipeService = async(req:Request)=>{
const saved = await Recipe.create({
    ...req.body,
})

}
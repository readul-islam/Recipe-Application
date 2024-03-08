import { Request } from "express";
import { Gallery } from "../../../models/gallery.model";

export const uploadImage = async (req:Request)=>{
const uploaded = await Gallery.create({
    ...req.body
});
return uploaded
};



export const getImage = async (req:Request)=>{

console.log(req.query);

return await Gallery.find({userId: req.query.userId})

}
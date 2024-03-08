import { z } from "zod";

export const imageUploadValidationSchema = z.object({
    img:z.string(),
    userId:z.string()
});

export const getImagesValidationSchema = z.object({
    userId:z.string(),
});
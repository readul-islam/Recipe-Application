import express from 'express'
import ImageController from './controller/gallery.auth'
import { validator } from '../../middleware'
import { getImagesValidationSchema, imageUploadValidationSchema } from './helper/validator'


const imgRouter = express.Router()
const router = express.Router()

imgRouter.post(
  '/add',
  validator(imageUploadValidationSchema),
ImageController.uploadImage
)
imgRouter.get(
  '/get',
  // validator(getImagesValidationSchema),
ImageController.getImage
)


router.use('/image', imgRouter)

export default router
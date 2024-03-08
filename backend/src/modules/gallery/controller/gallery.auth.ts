import { STATUS } from '../../../config'
import CatchAsync from '../../../utils/catchAsync'

import { getImage, uploadImage } from '../services'

// handleRequestWrapper is a custom wrapper that used for avoid try catch repetition
class ImageController extends CatchAsync {
  // auth registration
  uploadImage = this.handleRequestWrapper(
    uploadImage, // service
    STATUS.CREATED, // status code
    'image Uploaded successfully', // success message
  )

  // auth login
  getImage = this.handleRequestWrapper(
    getImage,
    STATUS.OK,
    'Image retrieved successfully',
  )
}

export default new ImageController()

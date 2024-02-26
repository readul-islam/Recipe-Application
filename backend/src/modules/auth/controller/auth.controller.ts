import { STATUS } from '../../../config'
import CatchAsync from '../../../utils/catchAsync'
import { loginService, registerService } from '../service/auth.service'

// handleRequestWrapper is a custom wrapper that used for avoid try catch repetition
class AuthController extends CatchAsync {
  // auth registration
  register = this.handleRequestWrapper(
    registerService, // service
    STATUS.CREATED, // status code
    'User registered successfully', // success message
  )

  // auth login
  login = this.handleRequestWrapper(
    loginService,
    STATUS.OK,
    'User logged in successfully',
  )
}

export default new AuthController()

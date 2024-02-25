import { Request, RequestHandler, Response, NextFunction } from 'express'
import { SuccessResponse } from './common'

class CatchAsync {
  protected handleRequestWrapper(
    handler: (req: Request) => Promise<any>,
    statusCode: number,
    successMessage: string,
  ) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const result = await handler(req)
        SuccessResponse(res, successMessage, statusCode, result)
      } catch (error) {
        next(error)
      }
    }
  }
}

export default CatchAsync

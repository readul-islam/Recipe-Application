// SuccessResponse

import { Response } from 'express'

type TSuccessResponse = (
  res: Response,
  message: string,
  code: number,
  data: any,
) => void

// successResponse
const SuccessResponse: TSuccessResponse = (res, message, code = 200, data) => {
  res.status(code).json({
    code: code,
    success: true,
    message: message,
    data: data,
  })
}

export { SuccessResponse }

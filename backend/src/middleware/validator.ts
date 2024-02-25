import { NextFunction, Request, Response } from 'express'
import { AnyZodObject, ZodSchema } from 'zod'
import { isEmpty } from 'lodash'
const validator = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      let data = {}

      if (req.method === 'GET' || req.method === 'DELETE')
        data = isEmpty(req.query) ? req.params : req.query
      if (
        req.method === 'POST' ||
        req.method === 'PUT' ||
        req.method === 'PATCH'
      )
        data = req.body
      await schema.parseAsync(data)

      next()
    } catch (error) {
      next(error)
    }
  }
}
export default validator

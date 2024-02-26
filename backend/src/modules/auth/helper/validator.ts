import { z } from 'zod'
import zodCustomError from '../../../utils/zodCustomError'
const passwordValidator = (field: string) => {
  return z
    .string({
      required_error: `password is required`,
    })
    .superRefine((val, ctx) => {
      if (val.length < 6) {
        ctx.addIssue({
          code: z.ZodIssueCode.too_small,
          minimum: 8,
          type: 'string',
          inclusive: true,
          message: `${field} must be 😡 at least 6 characters`,
        })
      } else if (!/[a-z]/.test(val)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `${field} must contain at least one lowercase letter.`,
        })
      } else if (!/[A-Z]/.test(val)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `${field} must contain at least one uppercase letter.`,
        })
      } else if (!/\d/.test(val)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `${field} must contain at least one digit.`,
        })
      } else if (!/[@$!%*?&]/.test(val)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `${field} must contain at least one special character (@$!%*?&).`,
        })
      }
    })
}
export const registerSchemaValidator = z.object({
  password: passwordValidator('password').optional(),
  email: z
    .string({
      required_error: 'email is required',
    })
    .email({ message: 'email must be a valid email' }),
  provider: z.enum(
    ['google', 'local'],
    zodCustomError('provider', 'google or local'),
  ),
  imageUrl: z.string().optional(),
  emailVerified: z.boolean().optional(),
  needPasswordChange: z.boolean().optional(),
})

export const loginSchemaValidator = z.object({})

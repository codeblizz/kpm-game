import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Must be a valid email',
  }),
  password: z
    .string()
    .min(3, { message: 'Min. 3 characters' })
    .max(12, 'Max. 12 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/,
      'At least a capital, small letter, & special character'
    ),
});

export const RegisterSchema = z.object({
  fullName: z.string().min(1, { message: 'FullName is required' }),
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Must be a valid email',
  }),
  password: z
    .string()
    .min(3, { message: 'Min. 3 characters' })
    .max(12, 'Max. 12 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/,
      'At least a capital, small letter, & special character'
    ),
});

// extracting the type
export type ILogin = z.infer<typeof LoginSchema>;
export type IRegister = z.infer<typeof RegisterSchema>;

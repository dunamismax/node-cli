import vine from '@vinejs/vine';

export const createUserSchema = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(2).maxLength(100),
    email: vine.string().email().normalizeEmail(),
    age: vine.number().min(18).max(120).optional(),
    skills: vine.array(vine.string().trim()).optional(),
    bio: vine.string().trim().maxLength(500).optional()
  })
);

export const updateUserSchema = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(2).maxLength(100).optional(),
    email: vine.string().email().normalizeEmail().optional(),
    age: vine.number().min(18).max(120).optional(),
    skills: vine.array(vine.string().trim()).optional(),
    bio: vine.string().trim().maxLength(500).optional()
  })
);
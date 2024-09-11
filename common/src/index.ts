import zod from 'zod';

export const urlBody = zod.object({
    orignalUrl : zod.string().url(),
    userId: zod.string()
});

export const signupBody = zod.object({
    email: zod.string().email(),
    userName: zod.string(),
    password: zod.string().min(6)
});

export const signinBody = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6)
});

export type UrlBody = zod.infer<typeof urlBody>;
export type SignupBody = zod.infer<typeof signupBody>;
export type SigninBody = zod.infer<typeof signinBody>;
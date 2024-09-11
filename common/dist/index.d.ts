import zod from 'zod';
export declare const urlBody: zod.ZodObject<{
    orignalUrl: zod.ZodString;
    userId: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    orignalUrl: string;
    userId: string;
}, {
    orignalUrl: string;
    userId: string;
}>;
export declare const signupBody: zod.ZodObject<{
    email: zod.ZodString;
    userName: zod.ZodString;
    password: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    email: string;
    userName: string;
    password: string;
}, {
    email: string;
    userName: string;
    password: string;
}>;
export declare const signinBody: zod.ZodObject<{
    email: zod.ZodString;
    password: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type UrlBody = zod.infer<typeof urlBody>;
export type SignupBody = zod.infer<typeof signupBody>;
export type SigninBody = zod.infer<typeof signinBody>;

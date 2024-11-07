import {z} from "zod";

export const loginSchema = z.object({
    emailOrUsername: z.string(),
    password: z.string(),
});

export const registerFormOneSchema = z.object({
    first_name: z.string().min(1,{message:"First name is required"}),
    last_name: z.string().min(1, { message: "Last name is required" }),
    gender: z.string().min(1, { message: "Gender is required" }).optional(),
    email: z.string().email({ message: "Invalid email. Please enter a valid email address" }),
    phone: z.string().min(9, { message: "Phone number is required" }).max(12,{message:"Incorrect Phone number length"}),
    password: z.string().min(1,{message:"Password is required"}),
    password_confirmation: z.string().min(1, { message: "Password must match" })
}).refine((data) => data.password === data.password_confirmation, {
    path: ["password_confirmation"],
    message: "Passwords do not match",});

export const registerFormTwoSchema = z.object({
    country_code: z.string().min(1, { message: "Country is required" }),
    state_code: z.string().min(1, { message: "State is required" }),
    address: z.string().min(1, { message: "Address is required" }),
    institution: z.string().min(1,{message:"Institution is required"}),
    institution_type: z.string().min(1,{message:"Institution type is required"}),
    year_of_admission: z.string().min(1,{message:"Institution type is required"}),
    accept_terms_and_condition: z.string().optional()
})

export const registerSchema = z.object({
    registerFormOneSchema,registerFormTwoSchema
})
export type LoginDto = z.infer<typeof loginSchema>;
export type RegisterFormOneDto = z.infer<typeof registerFormOneSchema>;
export type RegisterFormTwoDto = z.infer<typeof registerFormTwoSchema>;
export type RegisterDto = z.infer<typeof registerSchema>;
export type AuthUser = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    lastLogin: Date;
    createdAt: Date;
    updatedAt: Date;
};

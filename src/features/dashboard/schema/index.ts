import {z} from "zod";

export const createServiceRequestSchema = z.object({
    request_type_id: z.number().min(1,{message:"Select a service type"}),
    body: z.string().min(1,{message:"Please fill the body"}),
    pricing_id: z.number().min(1,{message:"Select a service type"}),
});
export type CreateServiceRequestSchema = z.infer<typeof createServiceRequestSchema>;

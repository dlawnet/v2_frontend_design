import {create} from 'zustand';
import {
    RegisterFormOneDto,
    registerFormOneSchema,
    RegisterFormTwoDto,
    registerFormTwoSchema
} from "@app/features/authentication";
import {z} from "zod";

interface RegisterFormState {
    formOneData: z.infer<typeof registerFormOneSchema>;
    formTwoData: z.infer<typeof registerFormTwoSchema>;
    updateFormOneData: (data: Partial<z.infer<typeof registerFormOneSchema>>) => void;
    updateFormTwoData: (data: Partial<z.infer<typeof registerFormTwoSchema>>) => void;
}


export const useRegisterStore = create<RegisterFormState & { getCombinedData: () => RegisterFormOneDto & RegisterFormTwoDto }>((set, get) => ({
    formOneData: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
        gender: undefined,
    },
    formTwoData: {
        country_code: "",
        state_code: "",
        address: "",
        institution: "",
        institution_type: "",
        year_of_admission: "",
        accept_terms_and_condition: "",
    },
    updateFormOneData: (data) =>
        set((state) => ({ formOneData: { ...state.formOneData, ...data } })),
    updateFormTwoData: (data) =>
        set((state) => ({ formTwoData: { ...state.formTwoData, ...data } })),
    getCombinedData: () => ({
        ...get().formOneData,
        ...get().formTwoData,
    }),
}));

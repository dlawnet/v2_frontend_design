import { axios } from "@app/lib/axios";
import {useMutation} from "@tanstack/react-query";

export const createServiceRequest = async (data: any): Promise<any> => {
    return axios.post('/service-requests', data);
};

export const useCreateServiceRequest = ()=> {
    return useMutation({
        mutationFn: (data) =>
            createServiceRequest(data),
    });
};

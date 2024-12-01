import { axios } from "@app/lib/axios";

export const createServiceRequest = async (data: any): Promise<any> => {
    return axios.post('/service-requests', data);
};

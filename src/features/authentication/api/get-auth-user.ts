import {axios} from "@app/lib/axios";

export const getAuthUser = (): Promise<any> => {
    return axios.get('/auth/me');
};

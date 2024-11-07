import {LoginDto} from "../schema";
import {axios} from "@app/lib/axios";

export const loginWithEmailAndPassword = (
    data: LoginDto
): Promise<any> => {
    return axios.post('/auth/login', data);
};

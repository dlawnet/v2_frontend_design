import {axios} from "@app/lib/axios";
import {RegisterDto} from "@app/features/authentication";

export const registerWithEmailAndPassword = (
    data: RegisterDto
): Promise<any> => {
    return axios.post('/auth/register', data);
};

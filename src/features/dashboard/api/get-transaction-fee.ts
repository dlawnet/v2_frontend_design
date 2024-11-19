import {axios} from "@app/lib/axios"
import { useQuery } from '@tanstack/react-query';

export const getActivationFee=async():Promise<any> =>{
    return axios.get('/account/activation-fee');
}
export const useGetActivationFee = ()=>{
    return useQuery({
        queryKey:['getActivationFee'],
        queryFn:async ()=>await getActivationFee()
    });
}

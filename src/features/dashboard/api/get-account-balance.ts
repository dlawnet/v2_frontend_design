import {axios} from "@app/lib/axios"
import { useQuery } from '@tanstack/react-query';

export const getAccountBalance=async():Promise<any> =>{
    return axios.get('/account/balance');
}
export const useGetAccountBalance = ()=>{
    return useQuery({
        queryKey:['getAccountBalance'],
        queryFn:async ()=>await getAccountBalance()
    });
}

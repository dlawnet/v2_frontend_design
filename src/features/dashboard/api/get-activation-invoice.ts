import {axios} from "@app/lib/axios"
import { useQuery } from '@tanstack/react-query';

export const getActivationInvoice=async():Promise<any> =>{
    return axios.get('/account/generate-invoice');
}
export const useGetActivationInvoice = ()=>{
    return useQuery({
        queryKey:['getActivationInvoice'],
        queryFn:async ()=>await getActivationInvoice()
    });
}

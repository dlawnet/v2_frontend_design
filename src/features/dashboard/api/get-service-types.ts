import {axios} from "@app/lib/axios"
import { useQuery } from '@tanstack/react-query';

export const getServiceTypes=async():Promise<any> =>{
    return axios.get('/service-types');
}
export const useGetServiceTypes = ()=>{
    return useQuery({
        queryKey:['getServiceTypes'],
        queryFn:async ()=>await getServiceTypes()
    });
}

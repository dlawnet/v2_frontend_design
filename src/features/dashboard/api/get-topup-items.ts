import {axios} from "@app/lib/axios"
import { useQuery } from '@tanstack/react-query';

export const getTopUpItems=async():Promise<any> =>{
    return axios.get('/top-ups');
}
export const useGetTopUpItems = ()=>{
    return useQuery({
        queryKey:['getTopUpItems'],
        queryFn:async ()=>await getTopUpItems()
    });
}

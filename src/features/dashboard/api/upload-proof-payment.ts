import {axios} from "@app/lib/axios"
import {useMutation, useQuery} from '@tanstack/react-query';
import {queryClient} from "@app/lib/react-query";

export const postUploadProofPayment=async(reference_number:number,data:any):Promise<any> =>{
    return axios.get(`/account/transactions/upload-proof/${reference_number}`,data);
}
export const usePostUploadProofPayment = (reference_number:number)=> {
    return useMutation({
        mutationFn: (data) =>
            postUploadProofPayment(reference_number, data),
    });
};

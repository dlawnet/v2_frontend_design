import {DefaultOptions, QueryClient, UseMutationOptions, UseQueryOptions} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {PromiseValue} from "type-fest";

const queryConfig: DefaultOptions = {
    queries: {
        refetchOnWindowFocus: false,
        retry: true,
    },
};

export const queryClient = new QueryClient({
    defaultOptions: queryConfig,
});

export type ExtractFnReturnType<
    FnType extends (...args: any) => any
> = PromiseValue<ReturnType<FnType>>;

export type QueryConfig<
    QueryFnType extends (...args: any) => any
> = Omit<
    UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
    'queryKey' | 'queryFn'
>;

export type MutationConfig<
    MutationFnType extends (...args: any) => any
> = UseMutationOptions<
    ExtractFnReturnType<MutationFnType>,
    AxiosError,
    Parameters<MutationFnType>[0]
>;

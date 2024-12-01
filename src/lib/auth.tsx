import {configureAuth} from "react-query-auth";
import sessionTokenStore from "@app/stores/session-token-store";
import {
    AuthUser,
    getAuthUser,
    LoginDto,
    loginWithEmailAndPassword,
    RegisterDto,
    registerWithEmailAndPassword
} from "@app/features/authentication";

async function handleUserResponse(response: { data: any }) {
    const { data } = response;
    console.log("login", data);
    sessionTokenStore.setToken(data);
    return data;
}

async function userFn() {
    const token = sessionTokenStore.getToken();
    if (token) {
        try {
            return await getAuthUser();
        } catch (error) {
            console.error("Failed to fetch authenticated user:", error);
            sessionTokenStore.clearToken(); 
            return null;
        }
    }
    return null;
}


async function loginFn(data: LoginDto) {
    const response = await loginWithEmailAndPassword(data);
    return await handleUserResponse(response);
}

async function registerFn(data: RegisterDto) {
    return await registerWithEmailAndPassword(data);
}

async function logoutFn() {
    sessionTokenStore.clearToken();
    window.location.replace('/auth/login');
}

const authConfig = {
    userFn,
    loginFn,
    registerFn,
    logoutFn,
};

export const {
    useUser,
    useLogin,
    useRegister,
    useLogout,
    AuthLoader,
} = configureAuth<
    AuthUser | null,
    unknown,
    LoginDto,
    RegisterDto
>(authConfig);


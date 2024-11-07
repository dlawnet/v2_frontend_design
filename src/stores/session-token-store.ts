const tokenPrefix = 'dlawnet_';

const sessionTokenStore = {
    getToken: () => {
        try {
            return JSON.parse(
                window.localStorage.getItem(
                    `${tokenPrefix}token`
                ) as string
            );
        } catch (e) {
            return '';
        }
    },
    setToken: (token: string) => {
        window.localStorage.setItem(
            `${tokenPrefix}token`,
            JSON.stringify(token)
        );
    },
    clearToken: () => {
        window.localStorage.removeItem(
            `${tokenPrefix}token`
        );
    },
};

export default sessionTokenStore;

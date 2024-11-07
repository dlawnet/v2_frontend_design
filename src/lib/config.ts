export const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;
export const IS_DEVELOPMENT =
    process.env.APP_ENV === 'development';
export const IS_PRODUCTION =
    process.env.APP_ENV === 'production';

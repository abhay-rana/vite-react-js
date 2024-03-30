export const APP_MODE = import.meta.env.MODE; // ["production","development"]
export const ProjectUrl = 'http://localhost:8000';
// Define base URL for assets
export const BASE_IMAGE_URL = import.meta.env.PROD
    ? '/assets'
    : '/public/assets';

import { lazy } from 'react';

// export const MainPageAsync = lazy(() => import('./MainPage'));
export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // TODO: убрать задержку, это для проверки Suspense
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));

import {lazy} from "react";

// export const AboutPageAsync = lazy(() => import('./AboutPage'));
export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    //TODO: убрать задержку, это для проверки Suspense
    setTimeout(() => resolve(import('./AboutPage')), 1500)
}))
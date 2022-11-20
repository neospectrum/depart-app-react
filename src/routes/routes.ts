import { InfoPage } from "../pages/InfoPage";
import { HomePage } from "../pages/HomePage";
import { CoursesPage } from "../pages/CoursesPage";
import { SciencePage } from "../pages/SciencePage";

export enum RouteNames {
    HOME_ROUTE = '/',
    INFO_ROUTE = '/about',
    COURSES_ROUTE = '/courses',
    SCIENCE_ROUTE = '/science',
}

export const publicRoutes = [
    { path: RouteNames.HOME_ROUTE, component: HomePage },
    { path: RouteNames.INFO_ROUTE, component: InfoPage },
    { path: RouteNames.COURSES_ROUTE, component: CoursesPage },
    { path: RouteNames.SCIENCE_ROUTE, component: SciencePage },
];

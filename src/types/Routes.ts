import { RouteConfig } from "../configurations/routeConfig";

export interface Route {
    linkName: string;
    path: RouteConfig;
    icon: JSX.Element;
}

export type Routes = Route[];

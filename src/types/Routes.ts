import { RouteConfig } from "../configurations/routeConfig";

export interface Route {
    linkName: string;
    path: RouteConfig;
}

export type Routes = Route[];

import { Route } from "@angular/router";
import { Home } from "./home/home";
import { Details } from "./details/details";

const routeConfig: Route[] = [
    {
        path: '',
        component: Home,
        title: 'Home page',
    },
    {
        path: 'details/:id',
        component: Details,
        title: 'Home Details',
    }

];

export default routeConfig;
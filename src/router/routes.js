import {
    ABOUTUS_ROUTE, ADMIN_ROUTE,
    FAQ_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE, PARTNER_ROUTE,
    PROTEZ_ROUTE,
    SERVICES_ROUTE,
    TEAM_ROUTE,
} from "../utils/constsRoute";

import ProtezPage from "../pages/Design/ProtezPage/ProtezPage";
import TeamPage from "../pages/Design/TeamPage/TeamPage";
import aboutUsPage from "../pages/Design/AboutUsPage/AboutUsPage";
import MainPage from "../pages/Design/MainPage/MainPage";
import servicesPage from "../pages/Design/ServicesPage/ServicesPage";
import Login from "../pages/Design/LoginPage/components/Login/Login";
import Faq from "../pages/Design/Faq/Faq";
import PartnersPage from "../pages/Design/PartnersPage/PartnersPage";
import Admin from "../pages/Admin/Admin";
import ElementVisit from "../pages/Admin/UI/Elements/ElementVisit/ElementVisit";

export const authRoutes =[
    {
        path: ADMIN_ROUTE,
        Component:Admin

    },

]
export const publicRoutes =[
    {
        path: PROTEZ_ROUTE,
        Component:ProtezPage
    },
    {
        path: TEAM_ROUTE,
        Component:TeamPage
    },
    {
        path: ABOUTUS_ROUTE,
        Component:aboutUsPage
    },
    {
        path: MAIN_ROUTE,
        Component:MainPage
    },
    {
        path: SERVICES_ROUTE,
        Component:servicesPage
    },
    {
        path: LOGIN_ROUTE,
        Component:Login
    },
    {
        path: FAQ_ROUTE,
        Component:Faq
    },
    {
        path: PARTNER_ROUTE,
        Component:PartnersPage
    }
]
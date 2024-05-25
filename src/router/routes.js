import {
    ABOUTUS_ROUTE, ADMIN_ROUTE, BLOG_ROUTE,
    FAQ_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE, PARTNER_ROUTE, PATIENT_ROUTE,
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
import PatientPage from "../pages/Design/PatientPage/PatientPage";
import BlogPage from "../pages/Design/BlogPage/BlogPage";

export const authRoutes =[
    {
        path: ADMIN_ROUTE,
        Component:Admin
    },
]
export const publicRoutes =[
    {
        path: BLOG_ROUTE,
        Component:BlogPage
    },
    {
        path: PROTEZ_ROUTE,
        Component:ProtezPage
    },
    {
        path: PATIENT_ROUTE,
        Component:PatientPage
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
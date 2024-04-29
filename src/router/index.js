import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashBoard_charities from "@/views/DashBoard_charities.vue";
import DashBoard_Admin from "@/views/DashBoard_Admin.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/DashBoard_charities",
        name: "DashBoard_charities",
        component: DashBoard_charities,
    },
    {
        path: "/DashBoard_Admin",
        name: "DashBoard_Admin",
        component: DashBoard_Admin,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

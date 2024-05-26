import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashBoard_charities from "@/views/DashBoard_charities.vue";
import DashBoard_Admin from "@/views/DashBoard_Admin.vue";
import Settings_Admin from "@/views/Settings_Admin.vue";
import Reset_Password from "@/views/Reset_Password.vue";
import Report_DashBoard from "@/views/Report_DashBoard.vue";
import Report_DashBoard_Charities from "@/views/Report_DashBoard_Charities.vue";
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

    {
        path: "/Settings_Admin",
        name: "/Settings_Admin",
        component: Settings_Admin,
    },
    {
        path: "/Reset_Password",
        name: "Reset_Password",
        component: Reset_Password,
    },
    {
        path: "/Report_DashBoard",
        name: "Report_DashBoard",
        component: Report_DashBoard,
    },
    {
        path: "/Report_DashBoard_Charities",
        name: "Report_DashBoard_Charities",
        component: Report_DashBoard_Charities,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

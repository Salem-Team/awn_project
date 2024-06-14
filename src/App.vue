<template>
    <nav>
        <TheHeader />
    </nav>

    <router-view style="margin-top: 100px !important" />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import "bootstrap/dist/css/bootstrap.css";

export default {
    data() {
        return {
            theme: "",
            modtheme: true,
        };
    },
    components: {
        TheHeader,
    },
    methods: {
        toggleTheme() {
            if (this.modtheme) {
                this.theme = "dark";
                this.modtheme = false;
            } else {
                this.theme = "Light";
                this.modtheme = true;
            }
        },
    },
};
</script>

<style lang="scss">
* {
    direction: rtl !important;
}
:root {
    --main-color: #0088ff;
    --secound-color: #eee;
    --therd-color: #7a7a7a;
}
body {
    direction: rtl;
    font-family: "Cairo", sans-serif;
    font-variation-settings: "slnt" 0;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
}
ul {
    margin: 0;
    list-style: none;
    padding: 0;
}
a {
    text-decoration: none;
}
.container {
    width: 90%;
    margin: auto;
}
/* أنماط CSS للثيم المظلم */
.dark-theme {
    background-color: #333;
    color: #fff;
}

/* أنماط CSS للثيم الفاتح */
.light-theme {
    background-color: #fff;
    color: #333;
}
.dach_cher {
    display: none;
    background-color: #ffdddd;
    color: #d8000c;
    border: 1px solid #d8000c;
    padding: 10px;
    margin: 20px 0;
    text-align: center;
    border-radius: 5px;
    font-size: 16px;
}

.dach_cher.show {
    display: block;
    animation: fadeIn 0.5s;
}
p {
    margin: 0;
}
input:focus {
    outline: none;
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.Vue-Toastification__toast--success {
    background: var(--main-color) !important;
    color: white !important;
    z-index: 1000000000000000000000000000000;
}
body.dark-mode {
    background-color: #183153;
    color: #ffffff;
}
body.dark-mode .header {
    background: #183153;
    box-shadow: 0 0 10px;
    color: black;
}
// .v-field {
//     color: var(--main-color);
// }
body.dark-mode .v-field {
    color: white;
}
body.dark-mode .v-navigation-drawer {
    background: #183153 !important;
}
body.dark-mode .v-navigation-drawer__content {
    background-color: #183153;
    color: #ffffff;
}
body.dark-mode .v-tabs {
    background-color: #465a75 !important;
    color: #ffffff;
}
body.dark-mode .v-divider {
    // background-color: ;
    color: #465a75 !important;
}
body.dark-mode .container_0 {
    background: #183153;
    color: #ffffff;
}
body.dark-mode .box {
    background: #465a75 !important;
    color: #ffffff;
}
body.dark-mode .box .name,
body.dark-mode .box .permissions_1 {
    color: #ffffff !important;
}
body.dark-mode .v-card {
    background: #465a75 !important;
    color: #ffffff;
}
body.dark-mode .salheat .v-field__field,
body.dark-mode .salheat .v-field__append-inner i {
    color: #465a75 !important;
}
.salheat .v-field__field,
.salheat .v-field__append-inner i {
    color: var(--main-color) !important;
}
body.dark-mode .User_box {
    background: #465a75 !important;
}
body.dark-mode svg {
    color: white !important;
}
body.dark-mode .masaaed {
    color: white !important;
}
body.dark-mode hr {
    color: #465a75 !important;
}

body.dark-mode .Vue-Toastification__toast--success {
    background: #183153 !important;
    color: white !important;
    z-index: 1000000000000000000000000000000;
}
// body.dark-mode .v-field {
// }
body.dark-mode .v-sheet {
    background: #183153 !important;
    color: white !important;
}
body.dark-mode .tafasel {
    color: white !important;
}
body.dark-mode .details {
    background: #183153 !important;
}
.v-slide-group__next,
.v-slide-group__prev {
    display: none !important;
}
</style>

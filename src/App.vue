<template>
    <v-theme-provider class="pa-10" :theme="this.theme" with-background>
        <nav>
            <TheHeader @execute-toggle-theme="toggleTheme" />
        </nav>
        <router-view style="margin-top: 100px !important" />
    </v-theme-provider>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import "bootstrap/dist/css/bootstrap.css";
// import { ref } from "vue";

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
</style>

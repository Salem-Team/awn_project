<template>
    <!-- navigation-drawer  -->
    <v-layout>
        <v-navigation-drawer permanent rail expand-on-hover location="right">
            <v-list nav class="pt-16 pa-5 px-2">
                <v-list-item
                    link
                    @click="$router.push('/')"
                    prepend-icon="mdi-home-outline"
                    >الصفحة الرئيسية
                </v-list-item>

                <v-list-item link prepend-icon="mdi-chart-pie-outline">
                    التقارير</v-list-item
                >
                <v-list-item link prepend-icon="mdi-cog-outline">
                    الاعدادات</v-list-item
                >

                <!-- <br /> -->
                <!-- <br /> -->
                <!-- <br /> -->
                <!-- <v-list-item
                        class="text-red lighten-2"
                        link
                        @click="Sign_Out"
                        prepend-icon="mdi-export"
                    >
                        تسجيل خروج
                    </v-list-item> -->
            </v-list>
        </v-navigation-drawer>
    </v-layout>
</template>

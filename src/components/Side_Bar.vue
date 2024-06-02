<template>
    <!-- navigation-drawer  -->
    <v-layout>
        <v-navigation-drawer rail permanent location="right">
            <v-list nav class="pt-16 pa-5 px-2">
                <v-list-item
                    link
                    @click="$router.push('/')"
                    prepend-icon="mdi-home-outline"
                >
                </v-list-item>
                <v-list-item
                    v-if="User.type === 'owner'"
                    link
                    @click="$router.push('/Report_DashBoard')"
                    prepend-icon="mdi-chart-pie-outline"
                >
                </v-list-item>
                <v-list-item
                    v-if="User.type === 'admin'"
                    link
                    @click="$router.push('/Report_DashBoard_Charities')"
                    prepend-icon="mdi-chart-pie-outline"
                >
                </v-list-item>
                <v-list-item
                    link
                    prepend-icon="mdi-cog-outline"
                    @click="$router.push('/Settings_Admin')"
                >
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-layout>
</template>
<script scoped>
// firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDF7ohgD5ohpCZwHQz1wmsPixR7dv19ETo",
    authDomain: "awn--project.firebaseapp.com",
    projectId: "awn--project",
    storageBucket: "awn--project.appspot.com",
    messagingSenderId: "477381368618",
    appId: "1:477381368618:web:8a62011671fc3a3eeb1c53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default {
    mounted() {
        this.Check_User();
    },
    data() {
        return {
            User: {
                User_State: true,
                type: "",
            },
        };
    },
    methods: {
        async Check_User() {
            if (localStorage.getItem("id")) {
                const docRef = doc(db, "Users", localStorage.getItem("id"));
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    this.User.User_State = false;
                    if (docSnap.data().type === "owner") {
                        this.User.type = "owner";
                        console.log(this.User.type);
                    } else if (docSnap.data().type === "admin") {
                        this.User.type = "admin";
                    } else if (docSnap.data().type === "assistant") {
                        this.User.type = "assistant";
                    }
                } else {
                    // docSnap.data() will be undefined in this case
                    console.log("No such document!");
                }
            }
        },
    },
};
</script>

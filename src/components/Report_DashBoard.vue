<template>
    <!-- Cards for financial data -->
    <v-container class="d-flex justify-space-evenly">
        <!-- Card for required amount -->
        <v-card class="card text-center bg-primary" prepend-icon="mdi-cash">
            <v-card-title>المطلوب</v-card-title>
            <v-card-text class="text-center">{{ this.required }}</v-card-text>
        </v-card>
        <!-- Card for income -->
        <v-card
            class="card text-center bg-orange-lighten-2"
            prepend-icon="mdi-cash-plus"
        >
            <v-card-title>الدخل</v-card-title>
            <v-card-text class="text-center">{{ this.incom }}</v-card-text>
        </v-card>
        <!-- Card for deficit -->
        <v-card
            class="card text-center bg-cyan-lighten-2"
            prepend-icon="mdi-cash-minus"
        >
            <v-card-title>العجز</v-card-title>
            <v-card-text class="text-center">{{
                this.required - this.incom
            }}</v-card-text>
        </v-card>
    </v-container>
</template>

<script scoped>
import { ref } from "vue";
// Get  data
import { getFirestore, getDocs, collection } from "@firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";

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
    inject: ["Emitter"],
    data() {
        return {
            text: "لا توجد بيانات",
            empty: false,
            deficit: 0,
            required: 0,
            incom: 0,
            Cases: [],
            value: ref(80),
        };
    },
    mounted() {
        this.Get_data();
        // Method to check internet connection status
        this.startInternetCheckerUse();
    },
    methods: {
        // Method to check internet connection status
        startInternetCheckerUse() {
            this.Emitter.emit("startInternetChecker");
        },
        // Get data for cases
        async Get_data() {
            try {
                this.Cases = [];
                const querySnapshot = await getDocs(collection(db, "Cases"));
                querySnapshot.forEach((doc) => {
                    this.Cases.push(doc.data());
                });
                this.sumFinancialData();
                if (this.Cases.length === 0) {
                    this.empty = true;
                    // Method to check internet connection status
                    this.startInternetCheckerUse();
                } else {
                    this.empty = false;
                }
            } catch (error) {
                console.error("Error adding document: ", error);
                this.$refs.childComponentRef.startInternetChecke();
            }
        },
        // Loop through each case to extract financial_info
        sumFinancialData() {
            this.deficit = 0;
            this.required = 0;
            this.incom = 0;
            this.Cases.forEach((Case) => {
                if (!isNaN(parseInt(Case.financial_info.deficit))) {
                    this.deficit += parseInt(Case.financial_info.deficit || 0);
                }
                if (!isNaN(parseInt(Case.financial_info.required))) {
                    this.required += parseInt(
                        Case.financial_info.required || 0
                    );
                }
                if (!isNaN(parseInt(Case.financial_info.incom))) {
                    this.incom += parseInt(Case.financial_info.incom || 0);
                }
            });
            this.value = Math.round((this.incom / this.required) * 100);
        },
    },
};
</script>

<style scoped>
.card {
    width: 190px !important;
}
#barChart {
    margin: auto;
    width: 1500px !important;
    height: 800px !important;
}
.chart-container {
    overflow: auto;
}
</style>

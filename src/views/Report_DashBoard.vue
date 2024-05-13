<template>
    <Side_Bar />
    <v-container class="d-flex justify-space-evenly mt-16">
        <v-card
            class="card text-center mt-16 bg-primary"
            prepend-icon="mdi-currency-usd"
        >
            <v-card-title>العجز</v-card-title>
            <v-card-body class="text-center">{{ value }}</v-card-body>
        </v-card>
        <v-card
            class="card text-center mt-16 bg-cyan-lighten-2"
            prepend-icon="mdi-account"
        >
            <v-card-title>عدد الحالات</v-card-title>
            <v-card-body class="text-center">{{ Cases_length }}</v-card-body>
        </v-card>
        <v-card
            class="card text-center mt-16 bg-orange-lighten-2"
            prepend-icon="mdi-account-multiple"
        >
            <v-card-title>الحالات المشتركة</v-card-title>
            <v-card-body class="text-center">{{ value }}</v-card-body>
        </v-card>
    </v-container>
    <v-container class="d-flex align-center justify-space-around">
        <div class="">
            <p class="text-center mb-10">نسبة إكمال العجز</p>
            <v-progress-circular
                class="mt-0"
                bg-color="orange"
                :model-value="value"
                :rotate="360"
                :size="270"
                :width="45"
                color="primary"
                style="font-size: 32px"
            >
                <template v-slot:default="{ value }">
                    <strong>{{ value }}%</strong>
                </template>
            </v-progress-circular>
        </div>
        <div style="width: 30%">
            <canvas id="myChart" width="2px" height="2px"></canvas>
        </div>
    </v-container>
    <v-container><v-divider></v-divider></v-container>
    <v-container style="width: 70%">
        <canvas id="barChart" width="2px" height="2px"></canvas>
    </v-container>
</template>

<script scoped>
import { ref } from "vue";
import Chart from "chart.js/auto";
import Side_Bar from "@/components/Side_Bar.vue";
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
    components: {
        Side_Bar,
    },
    data() {
        return {
            deficit: 0,
            required: 0,
            incom: 0,
            Cases_length: 0,
            Cases: [],
            value: ref(80),
        };
    },
    mounted() {
        this.Get_data();
    },
    methods: {
        async Get_data() {
            this.Cases = [];
            const querySnapshot = await getDocs(collection(db, "Cases"));
            querySnapshot.forEach((doc) => {
                this.Cases.push(doc.data());
            });
            this.Cases_length = this.Cases.length;
            this.sumFinancialData();
            // Render both charts after getting data
            this.renderChart();
            this.renderBarChart();
        },

        sumFinancialData() {
            this.Cases.forEach((Case) => {
                this.deficit += Case.financial_info.deficit;
                this.required += Case.financial_info.required;
                this.incom += Case.financial_info.incom;
            });
        },
        renderChart() {
            const ctx = document.getElementById("myChart");
            new Chart(ctx, {
                type: "doughnut",
                data: {
                    labels: ["العجز", "المطلوب", "الدخل"],
                    datasets: [
                        {
                            data: [30, 50, 20],
                            backgroundColor: ["#00CCCC", "#0066CC", "orange"],
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: "top",
                        },
                        title: {
                            display: true,
                            text: "المعلومات المالية",
                        },
                    },
                },
            });
        },
        renderBarChart() {
            const ctx = document.getElementById("barChart");
            // Initialize chart data arrays
            const labels = [];
            const data = [];

            // Loop through each case to extract financial_info
            this.Cases.forEach((Case, index) => {
                labels.push(`${Case.personal_info.name} (${index + 1})`);

                // Push three values for each case
                data.push(
                    Case.financial_info.required,
                    -Case.financial_info.incom,
                    Case.financial_info.deficit
                );
            });

            // Create datasets array with three datasets
            const datasets = [
                {
                    label: "المطلوب",
                    backgroundColor: "#0066CC",
                    borderWidth: 1,
                    data: [],
                },
                {
                    label: "الدخل",
                    backgroundColor: "orange",
                    borderWidth: 1,
                    data: [],
                },
                {
                    label: "العجز",
                    backgroundColor: "#00CCCC",
                    borderWidth: 1,
                    data: [],
                },
            ];

            // Populate datasets with data
            data.forEach((value, index) => {
                const datasetIndex = index % 3; // Cycle through the three datasets
                datasets[datasetIndex].data.push(value);
            });

            // Render the chart
            new Chart(ctx, {
                type: "bar",
                data: {
                    labels: labels,
                    datasets: datasets,
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: "top",
                        },
                        title: {
                            display: true,
                            text: "المعلومات المالية الخاصة بكل حالة",
                        },
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: "Value",
                            },
                        },
                    },
                },
            });
        },
    },
};
</script>

<style scoped>
.card {
    width: 190px !important;
}
</style>

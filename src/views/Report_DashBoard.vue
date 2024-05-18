<template>
    <div><Side_Bar /></div>
    <v-container class="d-flex justify-space-evenly mt-16">
        <v-card
            class="card text-center mt-16 bg-primary"
            prepend-icon="mdi-cash"
        >
            <v-card-title>المطلوب</v-card-title>
            <v-card-text class="text-center">{{ this.required }}</v-card-text>
        </v-card>
        <v-card
            class="card text-center mt-16 bg-orange-lighten-2"
            prepend-icon="mdi-cash-plus"
        >
            <v-card-title>الدخل</v-card-title>
            <v-card-text class="text-center">{{ this.incom }}</v-card-text>
        </v-card>
        <v-card
            class="card text-center mt-16 bg-cyan-lighten-2"
            prepend-icon="mdi-cash-minus"
        >
            <v-card-title>العجز</v-card-title>
            <v-card-text class="text-center">{{
                this.required - this.incom
            }}</v-card-text>
        </v-card>
    </v-container>
    <v-container class="d-flex justify-space-evenly mb-4">
        <v-card
            class="card text-center mt-3 bg-grey-lighten-3"
            prepend-icon="mdi-account"
        >
            <v-card-title>عدد الحالات</v-card-title>
            <v-card-text class="text-center">{{ Cases_length }}</v-card-text>
        </v-card>
        <v-card
            class="card text-center mt-3 bg-grey-lighten-3"
            prepend-icon="mdi-account-multiple"
        >
            <v-card-title>الحالات المشتركة</v-card-title>
            <v-card-text class="text-center">80</v-card-text>
        </v-card>
    </v-container>
    <v-container class="d-flex align-center justify-space-around">
        <div>
            <p class="text-center mb-10">نسبة إكمال العجز</p>
            <v-progress-circular
                class="mt-0"
                bg-color="#00CCCC"
                :model-value="value"
                :rotate="360"
                :size="270"
                :width="45"
                color="orange"
                style="font-size: 32px"
            >
                <template v-slot:default="{ value }">
                    <strong>{{ value }}%</strong>
                </template>
            </v-progress-circular>
        </div>
        <div class="chart-container" style="width: 30%">
            <canvas id="myChart" width="2px" height="2px"></canvas>
        </div>
    </v-container>
    <v-container><v-divider></v-divider></v-container>
    <v-container
        style="width: 100%; height: 100%; overflow-y: auto; overflow-x: auto"
    >
        <canvas id="barChart"></canvas>
    </v-container>
</template>

<script scoped>
import { ref } from "vue";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
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
            this.deficit = 0;
            this.required = 0;
            this.incom = 0;
            this.Cases.forEach((Case) => {
                if (!isNaN(parseInt(Case.financial_info.deficit))) {
                    this.deficit += parseInt(Case.financial_info.deficit);
                }
                if (!isNaN(parseInt(Case.financial_info.required))) {
                    this.required += parseInt(Case.financial_info.required);
                }
                if (!isNaN(parseInt(Case.financial_info.incom))) {
                    this.incom += parseInt(Case.financial_info.incom);
                }
            });
            this.value = Math.round((this.incom / this.required) * 100);
        },

        renderChart() {
            const ctx = document.getElementById("myChart");
            new Chart(ctx, {
                type: "doughnut",
                data: {
                    labels: ["العجز", "المطلوب", "الدخل"],
                    datasets: [
                        {
                            data: [
                                this.required - this.incom,
                                this.required,
                                this.incom,
                            ],
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
            const data1 = [];
            const value1 = [];
            // Loop through each case to extract financial_info
            this.Cases.forEach((Case, index) => {
                labels.push(`${Case.personal_info.name} (${index + 1} )`);
                data.push(
                    Case.financial_info.required - Case.financial_info.incom
                );
                data1.push(Case.financial_info.incom);
                const incomRatio =
                    Case.financial_info.required !== 0
                        ? (Case.financial_info.incom /
                              Case.financial_info.required) *
                          100
                        : NaN;
                value1.push(isNaN(incomRatio) ? null : Math.round(incomRatio));
            });
            new Chart(ctx, {
                type: "bar",
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: "العجز",
                            data: data,
                            backgroundColor: "#00CCCC",
                            stack: 0,
                            order: 2, // Set the order to 2 to place it behind
                        },
                        {
                            label: "الدخل",
                            data: data1,
                            backgroundColor: "orange",
                            stack: 0,
                            order: 1, // Set the order to 1 to place it in front
                        },
                    ],
                },
                options: {
                    responsive: true,
                    plugins: {
                        datalabels: {
                            color: "#0066CC", // Set the color of data labels
                            anchor: "end", // Position the data labels at the end of the bars
                            align: "top", // Align the data labels to the top of the bars
                            formatter: function (value, context) {
                                if (
                                    value1[context.dataIndex] !== null &&
                                    context.datasetIndex === 0
                                ) {
                                    // Print the value for the second dataset only if it's not null
                                    return value1[context.dataIndex] + "%";
                                } else {
                                    return "";
                                }
                            },
                        },

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
                            stack: true,
                            title: {
                                display: true,
                                text: "المطلوب",
                            },
                        },
                    },
                },
                plugins: [ChartDataLabels], // Enable the datalabels plugin
            });
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
    width: 1000px !important;
    height: 600px !important;
}
.chart-container {
    overflow: auto;
}
</style>

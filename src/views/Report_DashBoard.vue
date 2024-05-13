<template>
    <div>
        <Side_Bar />
        <v-container class="d-flex align-center justify-space-evenly mt-4">
            <v-card class="card text-center">
                <v-card-title>العجز</v-card-title>
                <v-card-body class="text-center">{{ value }}</v-card-body>
            </v-card>
            <v-card class="card text-center">
                <v-card-title>عدد الحالات</v-card-title>
                <v-card-body class="text-center">{{
                    Cases_length
                }}</v-card-body>
            </v-card>
            <v-card class="card text-center">
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
        <v-container><DashboardCharitys ref="childComponentRef" /></v-container>
    </div>
</template>

<script scoped>
import { ref } from "vue";
import Chart from "chart.js/auto";
import Side_Bar from "@/components/Side_Bar.vue";
import DashboardCharitys from "@/components/Dashboard_Charitys_report.vue";
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
        DashboardCharitys,
    },
    data() {
        return {
            incom: 8,
            Cases_length: 0,
            Cases: [],
            value: ref(80),
        };
    },
    mounted() {
        this.renderChart();
        this.Get_data();
        this.$nextTick(() => {
            if (this.$refs.childComponentRef) {
                this.$refs.childComponentRef.Get_data();
            } else {
                console.error("Child component reference not found.");
            }
        });
    },
    methods: {
        async Get_data() {
            this.Cases = [];
            const querySnapshot = await getDocs(collection(db, "Cases"));
            querySnapshot.forEach((doc) => {
                this.Cases.push(doc.data());
            });
            this.Cases_length = this.Cases.length;
        },
        renderChart() {
            const ctx = document.getElementById("myChart");
            new Chart(ctx, {
                type: "doughnut",
                data: {
                    labels: ["العجز", "المطلوب", "الدخل"],
                    datasets: [
                        {
                            data: [this.incom, 19, 3],
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
    },
};
</script>

<style scoped>
.card {
    width: 190px !important;
}
</style>

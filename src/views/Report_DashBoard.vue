<template>
    <!-- Sidebar component -->
    <div><Side_Bar /></div>
    <!-- Cards for financial data -->
    <v-container class="d-flex justify-space-evenly mt-16">
        <!-- Card for required amount -->
        <v-card
            class="card text-center mt-16 bg-primary"
            prepend-icon="mdi-cash"
        >
            <v-card-title>المطلوب</v-card-title>
            <v-card-text class="text-center">{{ this.required }}</v-card-text>
        </v-card>
        <!-- Card for income -->
        <v-card
            class="card text-center mt-16 bg-orange-lighten-2"
            prepend-icon="mdi-cash-plus"
        >
            <v-card-title>الدخل</v-card-title>
            <v-card-text class="text-center">{{ this.incom }}</v-card-text>
        </v-card>
        <!-- Card for deficit -->
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

    <!-- Cards for case data -->
    <v-container class="d-flex justify-space-evenly mb-4">
        <!-- Card for number of cases -->
        <v-card
            class="card text-center mt-3 bg-grey-lighten-3"
            prepend-icon="mdi-account"
        >
            <v-card-title>عدد الحالات</v-card-title>
            <v-card-text class="text-center">{{ Cases_length }}</v-card-text>
        </v-card>
        <!-- Card for common cases -->
        <v-card
            class="card text-center mt-3 bg-grey-lighten-3"
            prepend-icon="mdi-account-multiple"
        >
            <v-card-title>الحالات المشتركة</v-card-title>
            <v-card-text class="text-center">80</v-card-text>
        </v-card>
    </v-container>
    <!-- Offline and empty data handling -->
    <Offline_error>
        <template v-slot:default>
            <!-- Show empty error if no data -->
            <Empty_error v-if="empty == true" :text="text" />
            <v-container v-else-if="empty !== true">
                <!-- Container for progress circular and chart -->
                <v-container class="d-flex align-center justify-space-around">
                    <!-- Progress circular -->
                    <div class="progress-circular">
                        <p class="text-center mb-10">نسبة إكمال العجز</p>
                        <!-- Progress circular component -->
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
                    <!-- Chart -->
                    <div style="width: 30%">
                        <canvas id="myChart" width="2px" height="2px"></canvas>
                    </div>
                </v-container>
                <v-container><v-divider></v-divider></v-container>
            </v-container>
        </template>
    </Offline_error>
    <div class="dach_cher mt-15"></div>

    <v-container
        class="chart-container dach_cher6"
        style="width: 100%; height: 100%; overflow-y: auto; overflow-x: auto"
    >
        <DashboardCharitys_report ref="childComponentRef" />
    </v-container>
</template>

<script scoped>
import { ref } from "vue";
import Offline_error from "@/components/Offline_error.vue";
import DashboardCharitys_report from "@/components/DashboardCharitys_report.vue";
import Empty_error from "@/components/Empty_error.vue";
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
        Empty_error,
        Offline_error,
        DashboardCharitys_report,
    },
    inject: ["Emitter"],
    data() {
        return {
            text: "لا توجد بيانات",
            empty: false,
            deficit: 0,
            required: 0,
            incom: 0,
            Cases_length: 0,
            Cases: [],
            value: ref(80),
        };
    },
    mounted() {
        this.$refs.childComponentRef.Get_data();
        this.Get_data();
        // Method to check internet connection status
        this.startInternetCheckerUse();
        // Add event listeners to handle online/offline status changes
        window.addEventListener("online", this.updateOnlineStatus);
        window.addEventListener("offline", this.updateOnlineStatus);
    },
    methods: {
        updateOnlineStatus() {
            const messageBox = document.querySelector(".dach_cher");
            const messageBox2 = document.querySelector(".dach_cher6");
            if (!navigator.onLine) {
                messageBox.innerHTML =
                    "الإنترنت غير متصل. يرجى التحقق من الاتصال الخاص بك";
                messageBox.classList.add("show");
                messageBox2.classList.add("d-none");
            } else {
                window.location.reload();
                messageBox.classList.remove("show");
                messageBox.innerHTML = "";
            }
        },
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
                this.Cases_length = this.Cases.length;
                this.sumFinancialData();
                if (this.Cases.length === 0) {
                    this.empty = true;
                    // Method to check internet connection status
                    this.startInternetCheckerUse();
                } else {
                    this.empty = false;
                }
                // Render both charts after getting data
                this.renderChart();
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
        // Render doughnut chart using Chart.js
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
                // Chart options
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
#barChart {
    margin: auto;
    width: 1500px !important;
    height: 800px !important;
}
.chart-container {
    overflow: auto;
}
</style>

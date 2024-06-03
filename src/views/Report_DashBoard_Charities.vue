<template>
    <div><Side_Bar /></div>
    <v-container class="d-flex justify-space-evenly mb-4 mt-16">
        <v-card
            class="card text-center mt-3 bg-grey-lighten-3"
            prepend-icon="mdi-account"
        >
            <v-card-title>عدد الحالات</v-card-title>
            <v-card-text class="text-center">{{ Cases_length }}</v-card-text>
        </v-card>
        <v-card
            class="card text-center mt-3 bg-grey-lighten-3"
            prepend-icon="mdi-charity"
        >
            <v-card-title>عدد الجمعيات</v-card-title>
            <v-card-text class="text-center">{{
                CharitiesDB_length
            }}</v-card-text>
        </v-card>
    </v-container>
    <Offline_error ref="childComponentRef">
        <template v-slot:default>
            <Empty_error v-if="empty == true" />
            <v-container
                class="chart-container"
                style="
                    width: 100%;
                    height: 100%;
                    overflow-y: auto;
                    overflow-x: auto;
                "
            >
                <canvas id="barChart" v-if="empty !== true"></canvas>
            </v-container>
        </template>
    </Offline_error>
</template>

<script scoped>
import Offline_error from "@/components/Offline_error.vue";
import Empty_error from "@/components/Empty_error.vue";
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
        Empty_error,
        Offline_error,
    },
    inject: ["Emitter"],
    data() {
        return {
            empty: false,
            CharitiesDB_length: 0,
            CharitiesDB: [],
            Cases_length: 0,
            Cases: [],
            value: ref(80),
        };
    },
    mounted() {
        this.Get_Data1();
        this.Get_Data();
    },
    methods: {
        // Get Data
        async Get_Data1() {
            try {
                const querySnapshot = await getDocs(
                    collection(db, "Charities")
                );
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    const charityData = doc.data();
                    this.CharitiesDB.push(charityData);
                });
                this.CharitiesDB_length = this.CharitiesDB.length;
                if (this.CharitiesDB.length === 0) {
                    this.empty = true;
                    this.$refs.childComponentRef.startInternetChecke();
                } else {
                    this.empty = false;
                }
                console.log(this.CharitiesDB);
            } catch (error) {
                console.error("Error adding document: ", error);
                this.$refs.childComponentRef.startInternetChecke();
            }
        },
        async Get_Data() {
            try {
                this.Cases = [];
                const querySnapshot = await getDocs(collection(db, "Cases"));
                querySnapshot.forEach((doc) => {
                    this.Cases.push(doc.data());
                });
                this.Cases_length = this.Cases.length;
                if (this.Cases.length === 0) {
                    this.empty = true;
                } else {
                    this.empty = false;
                }
                this.renderBarChart();
            } catch (error) {
                console.error("Error adding document: ", error);
                this.$refs.childComponentRef.startInternetChecke();
            }
        },

        renderBarChart() {
            const ctx = document.getElementById("barChart");
            // Initialize chart data arrays
            const labels = [];
            const data = [];
            const value1 = [];
            // Loop through each charity to extract info
            this.CharitiesDB.forEach((charity, index) => {
                labels.push(`${charity.title} (${index + 1} )`);
                data.push(charity.cases_number || 0);
            });
            new Chart(ctx, {
                type: "bar",
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: "الحالات",
                            data: data,
                            backgroundColor: "#0066CC",
                            stack: 0,
                            order: 2, // Set the order to 2 to place it behind
                        },
                    ],
                },
                options: {
                    responsive: true,
                    plugins: {
                        datalabels: {
                            color: "#00CCCC", // Set the color of data labels
                            anchor: "top", // Position the data labels at the end of the bars
                            align: "right", // Align the data labels to the top of the bars
                            formatter: function (value, context) {
                                if (
                                    value1[context.dataIndex] !== null &&
                                    context.datasetIndex === 0
                                ) {
                                    // Print the value for the second dataset only if it's not null
                                    return (
                                        value1[context.dataIndex] ||
                                        0 + "%" + " "
                                    );
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
                            text: "عدد الحالات في كل جمعية",
                        },
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            stack: true,
                            title: {
                                display: true,
                                text: "عدد الحالات",
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
    width: 1500px !important;
    height: 600px !important;
}
.chart-container {
    overflow: auto;
}
</style>

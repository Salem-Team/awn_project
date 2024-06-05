<template>
    <!-- Handle offline error and empty data -->
    <Offline_error>
        <template v-slot:default>
            <!-- Show empty error if no data -->
            <Empty_error v-if="empty == true" />
            <!-- Iterate over paginated charities -->
            <div
                v-else-if="empty !== true"
                class="box px-5 py-3 mt-5 border rounded"
                v-for="(charity, index) in paginatedCharities"
                :key="charity.id"
            >
                <!-- Display serial number -->
                <span>{{ (currentPage - 1) * 5 + index + 1 }}</span>
                <!-- Lazy load content -->
                <v-lazy
                    :min-height="200"
                    :options="{ threshold: 0.7 }"
                    transition="fade-transition"
                >
                    <!-- Charity information -->
                    <div class="Charities">
                        <v-container class="Charities_container mt-4">
                            <!-- Display charity title and cases number -->
                            <div class="Charity">
                                <div
                                    class="d-flex align-center flex-wrap justify-around"
                                >
                                    <h3>اسم الجمعية :</h3>
                                    <p>{{ charity.title }}</p>
                                    <v-spacer></v-spacer>
                                    <h3>عدد الحالات :</h3>
                                    <p>{{ charity.cases_number || 0 }}</p>
                                </div>
                            </div>
                            <!-- Display charity specialties -->
                            <v-container
                                class="text-right d-flex align-center flex-wrap justify-around"
                                v-model="Charities.Charities_specialty"
                            >
                                <h3
                                    class="mb-2 text-right d-flex align-center flex-wrap justify-around"
                                >
                                    تخصص الجمعية:
                                </h3>
                                <v-card
                                    elevation="2"
                                    v-for="(
                                        activity, index_1
                                    ) in charity.Charities_specialty"
                                    :key="index_1"
                                    class="ma-2 pa-3"
                                    rounded="lg"
                                    :value="activity"
                                    >{{ activity }}</v-card
                                >
                            </v-container>
                            <br />
                            <!-- Display charity description -->
                            <div
                                class="d-flex align-center flex-wrap justify-around"
                            >
                                <h3>وصف قصير للجمعية :</h3>
                                <p>{{ charity.description }}</p>
                            </div>
                            <br />
                            <!-- Display charity social media links -->
                            <h3>منصات التواصل :</h3>
                            <br />
                            <!-- Return the icon according to the charity social media links -->
                            <div class="d-flex align-center justify-between">
                                <a
                                    v-if="
                                        charity.facebook && charity.facebookLink
                                    "
                                    :href="charity.facebookLink"
                                    ><v-icon>mdi-facebook</v-icon></a
                                >
                                <a
                                    v-if="
                                        charity.youtube && charity.youtubeLink
                                    "
                                    :href="charity.youtubeLink"
                                    ><v-icon>mdi-youtube</v-icon></a
                                >
                                <a
                                    v-if="
                                        charity.linkedin && charity.linkedinLink
                                    "
                                    :href="charity.linkedinLink"
                                    ><v-icon>mdi-linkedin</v-icon></a
                                >
                                <a
                                    v-if="
                                        charity.whatsapp && charity.whatsappLink
                                    "
                                    :href="charity.whatsappLink"
                                    ><v-icon>mdi-whatsapp</v-icon></a
                                >
                                <a
                                    v-if="
                                        charity.instagram &&
                                        charity.instagramLink
                                    "
                                    :href="charity.instagramLink"
                                    ><v-icon>mdi-instagram</v-icon></a
                                >
                            </div>
                        </v-container>
                    </div>
                </v-lazy>
            </div>
            <!-- Display loading progress -->
            <div>
                <v-progress-linear
                    color="primary"
                    indeterminate
                    v-if="loading"
                ></v-progress-linear>
            </div>
            <!-- Display pagination -->
            <div class="text-center">
                <v-pagination
                    v-model="currentPage"
                    next-icon="mdi-menu-left"
                    prev-icon="mdi-menu-right"
                    :length="Math.ceil(CharitiesDB.length / 5)"
                    :total-visible="5"
                ></v-pagination>
            </div>
        </template>
    </Offline_error>
</template>

<script>
import { ref } from "vue";
import Offline_error from "@/components/Offline_error.vue";
import Empty_error from "@/components/Empty_error.vue";
// Get Data
import { getDocs, getFirestore, collection } from "@firebase/firestore";
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
    components: { Empty_error, Offline_error },
    inject: ["Emitter"],
    data() {
        return {
            empty: false,
            currentPage: 1,
            loading: false, // Loading state
            activities: ref(["كفالة", "إطعام"]),
            // ref to store the Charities data
            Charities: {}, // Initialize as an empty object
            CharitiesDB: [],
        };
    },
    mounted() {
        // Method to check internet connection status
        this.startInternetCheckerUse();
        //call the function
        this.Get_Data();
    },
    computed: {
        paginatedCharities() {
            const start = (this.currentPage - 1) * 5;
            const end = start + 5;
            return this.CharitiesDB.slice(start, end);
        },
    },
    methods: {
        // Method to check internet connection status
        startInternetCheckerUse() {
            this.Emitter.emit("startInternetChecker");
        },
        // Get Data
        async Get_Data() {
            try {
                this.loading = true; // Set loading to true before fetching data
                const querySnapshot = await getDocs(
                    collection(db, "Charities")
                );
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    const charityData = doc.data();
                    this.detectSocialMediaType(charityData);
                    this.CharitiesDB.push(charityData);
                });
                this.loading = false; // Set loading to false after data is loaded
                if (this.CharitiesDB.length === 0) {
                    this.empty = true;
                    // Method to check internet connection status
                    this.startInternetCheckerUse();
                } else {
                    this.empty = false;
                }
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        },
        //fuction to detect the Social_media link type
        detectSocialMediaType(charity) {
            const whatsappRegex = /^(https?):\/\/(www\.)?api\.whatsapp\.com/i;
            const youtubeRegex = /^(https?):\/\/(www\.)?youtube\.com/i;
            const linkedinRegex = /^(https?):\/\/(www\.)?linkedin\.com/i;
            const facebookRegex = /^(https?):\/\/(www\.)?facebook\.com/i;
            const instagramRegex = /^(https?):\/\/(www\.)?instagram\.com/i;

            if (charity.Social_media && Array.isArray(charity.Social_media)) {
                charity.Social_media.forEach((link) => {
                    if (whatsappRegex.test(link)) {
                        console.log("WhatsApp");
                        charity.whatsapp = true;
                        charity.whatsappLink = link;
                    } else if (youtubeRegex.test(link)) {
                        console.log("Youtube");
                        charity.youtube = true;
                        charity.youtubeLink = link;
                    } else if (linkedinRegex.test(link)) {
                        console.log("LinkedIn");
                        charity.linkedin = true;
                        charity.linkedinLink = link;
                    } else if (facebookRegex.test(link)) {
                        console.log("Facebook");
                        charity.facebook = true;
                        charity.facebookLink = link;
                    } else if (instagramRegex.test(link)) {
                        console.log("Instagram");
                        charity.instagram = true;
                        charity.instagramLink = link;
                    }
                });
            }
        },
    },
};
</script>

<style lang="scss" scoped></style>

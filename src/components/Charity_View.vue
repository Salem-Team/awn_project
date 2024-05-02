<template>
    <div
        class="box px-5 py-3 mt-5 border rounded"
        v-for="(charity, index) in CharitiesDB"
        :key="charity"
    >
        <span>{{ index + 1 }}</span>
        <div class="Charities">
            <v-container class="Charities_container mt-4">
                <!--get the Charities data from the database-->
                <div class="Charity">
                    <div class="d-flex align-center flex-wrap justify-around">
                        <h3>اسم الجمعية :</h3>
                        <p>{{ charity.title }}</p>
                        <v-spacer></v-spacer>
                        <h3>عدد الحالات :</h3>
                        <p>{{ charity.cases_number || 0 }}</p>
                    </div>
                </div>
                <!--the Charities_specialty-->
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
                <!--the Charities_descripetion-->
                <div class="d-flex align-center flex-wrap justify-around">
                    <h3>وصف قصيرللجمعية :</h3>
                    <p>{{ charity.description }}</p>
                </div>
                <br />
                <!--the Charities_Package_type-->
                <div class="d-flex align-center flex-wrap justify-around">
                    <h3>نوع الإشتراك :</h3>
                    <p>{{ charity.Package_type }}</p>
                </div>
                <br />
                <!--the Charities_Social_media-->
                <h3>منصات التواصل :</h3>
                <br />
                <!-- return the icon according to the Charities_Social_media links-->

                <div class="d-flex align-center justify-between">
                    <a v-if="facebook" :href="facebookLink"
                        ><v-icon>mdi-facebook</v-icon></a
                    >
                    <a v-if="youtube" :href="youtubeLink"
                        ><v-icon>mdi-youtube</v-icon></a
                    >
                    <a v-if="linkedin" :href="linkedinLink"
                        ><v-icon>mdi-linkedin</v-icon></a
                    >
                    <a v-if="whatsapp" :href="whatsappLink"
                        ><v-icon>mdi-whatsapp</v-icon></a
                    >
                    <a v-if="instagram" :href="instagramLink"
                        ><v-icon>mdi-instagram</v-icon></a
                    >
                </div>
            </v-container>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
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
    data() {
        return {
            whatsapp: false,
            linkedin: false,
            facebook: false,
            youtube: false,
            instagram: false,
            facebookLink: null,
            youtubeLink: null,
            linkedinLink: null,
            instagramLink: null,
            whatsappLink: null,
            activities: ref(["كفالة", "إطعام"]),
            // ref to store the Charities data
            Charities: {
                cases_number: "1000",
                title: "الرحمن الرحيم",
                Social_media: [],
                descripetion: "جمعية خيرية لمساعدة المحتاجين",

                Charities_specialty: ["إطعام"],
                Package_type: "1000 جنية مصري  500 حالة",
            },
            CharitiesDB: [],
        };
    },
    mounted() {
        //call the function
        this.Get_Data();
    },
    methods: {
        // Get Data
        async Get_Data() {
            const querySnapshot = await getDocs(collection(db, "Charities"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                this.CharitiesDB.push(doc.data());
                this.Charities.Social_media.push(doc.data().Social_media);
            });
            console.log(this.Charities.Social_media);
            this.detectSocialMediaType();
        },
        //fuction to detect the Social_media link type
        detectSocialMediaType() {
            this.CharitiesDB.forEach((charity) => {
                charity.Social_media.forEach((link) => {
                    const whatsappRegex =
                        /^(https?):\/\/(www\.)?api\.whatsapp\.com/i;
                    const youtubeRegex = /^(https?):\/\/(www\.)?youtube\.com/i;
                    const linkedinRegex =
                        /^(https?):\/\/(www\.)?linkedin\.com/i;
                    const facebookRegex =
                        /^(https?):\/\/(www\.)?facebook\.com/i;
                    const instagramRegex =
                        /^(https?):\/\/(www\.)?instagram\.com/i;

                    if (whatsappRegex.test(link)) {
                        console.log("WhatsApp");
                        this.whatsapp = true;
                        this.whatsappLink = link;
                    } else if (youtubeRegex.test(link)) {
                        console.log("Youtube");
                        this.youtube = true;
                        this.youtubeLink = link;
                    } else if (linkedinRegex.test(link)) {
                        console.log("LinkedIn");
                        this.linkedin = true;
                        this.linkedinLink = link;
                    } else if (facebookRegex.test(link)) {
                        console.log("Facebook");
                        this.facebook = true;
                        this.facebookLink = link;
                    } else if (instagramRegex.test(link)) {
                        console.log("Instagram");
                        this.instagram = true;
                        this.instagramLink = link;
                    }
                });
            });
        },
    },
};
</script>

<style lang="scss" scoped></style>

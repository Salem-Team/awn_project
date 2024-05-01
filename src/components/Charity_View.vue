<template>
    <v-window v-model="tab">
        <v-window-item v-for="index in 5" :key="index" :value="`${index}`">
            <div class="Charities">
                <v-container class="Charities_container mt-4">
                    <span>{{ index }}</span>
                    <!--get the Charities data from the database-->
                    <div class="Charity mt-2">
                        <div
                            class="d-flex align-center flex-wrap justify-around"
                        >
                            <h3>اسم الجمعية :</h3>
                            <p>{{ Charities.title }}</p>
                            <v-spacer></v-spacer>
                            <h3>عدد الحالات :</h3>
                            <p>{{ Charities.cases_number }}</p>
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
                            v-for="(activity, activityIndex) in activities"
                            :key="activityIndex"
                            class="ma-2 pa-3"
                            rounded="lg"
                            >{{ activity }}</v-card
                        >
                    </v-container>
                    <br />
                    <!--the Charities_description-->
                    <div class="d-flex align-center flex-wrap justify-around">
                        <h3>وصف قصير للجمعية :</h3>
                        <p>{{ Charities.description }}</p>
                    </div>
                    <br />
                    <!--the Charities_Package_type-->
                    <div class="d-flex align-center flex-wrap justify-around">
                        <h3>نوع الإشتراك :</h3>
                        <p>{{ Charities.Package_type }}</p>
                    </div>
                    <br />
                    <!--the Charities_Social_media-->
                    <h3>منصات التواصل :</h3>
                    <br />
                    <!--return the icon according to the Charities_Social_media links-->
                    <div class="d-flex align-center justify-between">
                        <a
                            v-if="facebook"
                            :href="Charities.Social_media[facebookIndex]"
                            ><v-icon>mdi-facebook</v-icon></a
                        >
                        <a
                            v-if="youtube"
                            :href="Charities.Social_media[youtubeIndex]"
                            ><v-icon>mdi-youtube</v-icon></a
                        >
                        <a
                            v-if="linkedin"
                            :href="Charities.Social_media[linkedinIndex]"
                            ><v-icon>mdi-linkedin</v-icon></a
                        >
                        <a
                            v-if="whatsapp"
                            :href="Charities.Social_media[whatsappIndex]"
                            ><v-icon>mdi-whatsapp</v-icon></a
                        >
                        <a
                            v-if="instagram"
                            :href="Charities.Social_media[instagramIndex]"
                            ><v-icon>mdi-instagram</v-icon></a
                        >
                    </div>
                </v-container>
            </div>
        </v-window-item>
    </v-window>
    <div class="d-flex align-center justify-center">
        <v-tabs
            v-model="tab"
            next-icon="mdi-menu-left"
            prev-icon="mdi-menu-right"
        >
            <v-tab v-for="index in 5" :key="index" :value="`${index}`">{{
                index
            }}</v-tab>
        </v-tabs>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    data() {
        return {
            whatsapp: false,
            linkedin: false,
            facebook: false,
            youtube: false,
            instagram: false,
            activities: ref(["كفالة", "إطعام"]),
            tab: null,
            // ref to store the Charities data
            Charities: {
                cases_number: "1000",
                title: "الرحمن الرحيم",
                Social_media: [
                    "https://www.facebook.com/",
                    "https://www.instagram.com",
                ],
                description: "جمعية خيرية لمساعدة المحتاجين",
                Charities_specialty: ["إطعام"],
                Package_type: "1000 جنية مصري  500 حالة",
            },
        };
    },
    mounted() {
        // call the function
        this.detectSocialMediaType();
    },
    methods: {
        // function to detect the Social_media link type
        detectSocialMediaType() {
            const socialMediaLinks = this.Charities.Social_media;
            socialMediaLinks.forEach((link) => {
                const whatsappRegex =
                    /^(https?):\/\/(www\.)?api\.whatsapp\.com/i;
                const youtubeRegex = /^(https?):\/\/(www\.)?youtube\.com/i;
                const linkedinRegex = /^(https?):\/\/(www\.)?linkedin\.com/i;
                const facebookRegex = /^(https?):\/\/(www\.)?facebook\.com/i;
                const instagramRegex = /^(https?):\/\/(www\.)?instagram\.com/i;
                if (whatsappRegex.test(link)) {
                    console.log("WhatsApp");
                    this.whatsapp = true;
                    this.whatsappIndex = socialMediaLinks.indexOf(link);
                } else if (youtubeRegex.test(link)) {
                    console.log("Youtube");
                    this.youtube = true;
                    this.youtubeIndex = socialMediaLinks.indexOf(link);
                } else if (linkedinRegex.test(link)) {
                    console.log("LinkedIn");
                    this.linkedin = true;
                    this.linkedinIndex = socialMediaLinks.indexOf(link);
                } else if (facebookRegex.test(link)) {
                    console.log("Facebook");
                    this.facebook = true;
                    this.facebookIndex = socialMediaLinks.indexOf(link);
                } else if (instagramRegex.test(link)) {
                    console.log("Instagram");
                    this.instagram = true;
                    this.instagramIndex = socialMediaLinks.indexOf(link);
                }
            });
        },
    },
};
</script>

<style lang="scss" scoped></style>

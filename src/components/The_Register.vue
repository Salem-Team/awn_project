<template>
    <div class="The_Register">
        <v-container class="form_container mt-4">
            <!--get the data from the user using v-model-->
            <form ref="form" @submit.prevent="validateForm" class="ma-auto">
                <!--name input-->
                <v-text-field
                    v-model="user.name"
                    variant="outlined"
                    label="اسم الجمعية"
                    class="mt-2"
                    :error-messages="
                        v$.user.name.$errors.map((e) => e.$message)
                    "
                ></v-text-field>
                <!--phone input-->
                <v-text-field
                    v-model="user.phone"
                    label="تليفون الجمعية"
                    type="tel"
                    variant="outlined"
                    :error-messages="
                        v$.user.phone.$errors.map((e) => e.$message)
                    "
                ></v-text-field>
                <!--describetion input-->
                <v-textarea
                    row-height="15"
                    auto-grow
                    rows="3"
                    variant="outlined"
                    v-model="user.describetion"
                    :error-messages="
                        v$.user.describetion.$errors.map((e) => e.$message)
                    "
                    label="وصف قصير للجمعية"
                ></v-textarea>
                <!--address input-->
                <v-text-field
                    variant="outlined"
                    label="العنوان"
                    v-model="user.address"
                    :error-messages="
                        v$.user.address.$errors.map((e) => e.$message)
                    "
                ></v-text-field>
                <div class="d-flex align-center flex-wrap !w-full">
                    <!--license_number input-->
                    <v-text-field
                        variant="outlined"
                        v-model="user.license_number"
                        :error-messages="
                            v$.user.license_number.$errors.map(
                                (e) => e.$message
                            )
                        "
                        label="رقم الشهره"
                    ></v-text-field>
                    <!--year input-->
                    <v-text-field
                        variant="outlined"
                        name="year"
                        v-model="user.year"
                        :error-messages="
                            v$.user.year.$errors.map((e) => e.$message)
                        "
                        label="لسنة"
                    ></v-text-field>
                </div>
                <!--the user can add another email box if needed by clicking the plus button-->
                <div class="d-flex align-center flex-wrap mb-2">
                    <label for="link">لينكات منصات التواصل</label>
                    <v-spacer></v-spacer>
                    <v-btn
                        icon="mdi-plus"
                        variant="text"
                        @click="social++"
                        class="bg-grey-lighten-3"
                        size="small"
                    ></v-btn>
                </div>
                <!--email input-->
                <v-text-field
                    id="link"
                    v-for="(social, index) in social"
                    :key="index"
                    v-model="user.email[index]"
                    placeholder="منصات التواصل"
                    type="text"
                    variant="outlined"
                    :error-messages="
                        v$.user.email.$errors.map((e) => e.$message)
                    "
                ></v-text-field>
                <p class="mb-2 text-right">أنشطة الجمعية ( حدد خيار أو أكثر)</p>
                <!--the user can select multiple items from the group and it will be displayed in a paragraph-->
                <v-chip-group
                    selected-class="bg-grey-lighten-1"
                    multiple
                    mandatory
                    class="text-right"
                    v-model="user.selectedTab"
                    :error-messages="
                        v$.user.selectedTab.value.$errors.map((e) => e.$message)
                    "
                >
                    <v-chip
                        elevation="2"
                        v-for="(activity, index) in activities"
                        :key="index"
                        class="ma-2"
                        rounded="lg"
                        size="x-large"
                        :value="activity"
                        filter
                        >{{ activity }}</v-chip
                    >
                </v-chip-group>
                <p class="mb-4 text-right">{{ user.selectedTab }}</p>
                <v-btn
                    class="me-4"
                    type="submit"
                    style="width: 100%; font-size: 25px"
                >
                    تم
                </v-btn>
            </form>
        </v-container>
    </div>
</template>

<script scoped>
import { ref } from "vue";
import useVuelidate from "@vuelidate/core";
import {
    required,
    maxLength,
    minLength,
    alpha,
    numeric,
    helpers,
} from "@vuelidate/validators";

// Add data
import {
    collection,
    addDoc,
    getFirestore,
    updateDoc,
} from "firebase/firestore";
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
    setup() {
        return {
            // Define a local store for existing data
            existingData: {
                user1: {
                    name: "جمعية الأمل",
                    email: ["alamal@yahoo.com"],
                    license_number: "1234",
                },
                user2: {
                    name: "جمعية رسالة",
                    email: ["resala@yahoo.com"],
                    license_number: "6789",
                },
            },
            v$: useVuelidate(),
        };
    },
    data() {
        return {
            //ref to add another email box
            social: ref(1),
            //activities
            activities: ref(["إطعام", "كفالة", "زواج", "علاج"]),
            //ref to store the user data
            user: {
                name: "",
                email: [""],
                phone: "",
                describetion: "",
                address: "",
                license_number: "",
                selectedTab: [""],
                year: "",
            },
        };
    },
    //form validation
    validations() {
        return {
            user: {
                name: {
                    required: helpers.withMessage("ادخل اسم ", required),
                    maxLength: helpers.withMessage(
                        " ادخل اسم لا يزيد عن 20 حرف",
                        maxLength(20)
                    ),
                    alpha: helpers.withMessage("ادخل حروف فقط", alpha),
                    minLength: helpers.withMessage(
                        " ادخل اسم مكون من 3 حروف على الأقل",
                        minLength(3)
                    ),
                },
                email: {
                    required: helpers.withMessage("ادخل ايميل ", required),
                    maxLength: helpers.withMessage(
                        " ادخل ايميل لا يزيد عن 250 حرف",
                        maxLength(250)
                    ),
                    minLength: helpers.withMessage(
                        " ادخل ايميل مكون من 5 حروف على الأقل",
                        minLength(5)
                    ),
                },
                phone: {
                    required: helpers.withMessage("ادخل رقم ", required),
                    minLength: helpers.withMessage(
                        " ادخل رقم مكون من 8 أرقام على الأقل",
                        minLength(8)
                    ),
                    numeric: helpers.withMessage(" ادخل أرقام فقط", numeric),
                },
                address: {
                    required: helpers.withMessage("ادخل عنوان", required),
                    maxLength: helpers.withMessage(
                        " ادخل عنوان لا يزيد عن 50 حرف",
                        maxLength(50)
                    ),
                    minLength: helpers.withMessage(
                        " ادخل عنوان مكون من 6 حروف على الأقل",
                        minLength(6)
                    ),
                },
                describetion: {
                    required: helpers.withMessage("ادخل وصف", required),
                    maxLength: helpers.withMessage(
                        " ادخل وصف لا يزيد عن 250 حرف",
                        maxLength(250)
                    ),
                    minLength: helpers.withMessage(
                        " ادخل وصف مكون من 10 حروف على الأقل",
                        minLength(10)
                    ),
                },
                license_number: {
                    required: helpers.withMessage("ادخل رقم", required),
                    minLength: helpers.withMessage(
                        " ادخل رقم مكون من 4 أرقام على الأقل",
                        minLength(4)
                    ),
                    numeric: helpers.withMessage(" ادخل أرقام فقط", numeric),
                },
                selectedTab: {
                    value: {
                        required,
                    },
                },
                year: {
                    required: helpers.withMessage("ادخل تاريخ", required),
                    minLength: helpers.withMessage(
                        " ادخل تاريخ مكون من 4 أرقام على الأقل",
                        minLength(4)
                    ),
                    maxLength: helpers.withMessage(
                        " ادخل تاريخ لا يزيد عن 8 أرقام",
                        maxLength(8)
                    ),
                    numeric: helpers.withMessage(
                        " ادخل تاريخ يحتوي على أرقام فقط",
                        numeric
                    ),
                },
            },
        };
    },
    methods: {
        async Add_Charities() {
            try {
                // Add a new document with a generated id.
                const docRef = await addDoc(collection(db, "Charities"), {
                    title: this.user.name,
                    description: this.user.describetion,
                    address: this.user.address,
                    Package_type: "500",
                    Charities_specialty: this.user.selectedTab,
                    Fame_number: this.user.license_number,
                    Fame_year: this.user.year,
                    phone: this.user.phone,
                    Social_media: this.user.email,
                });
                console.log("Document written with ID: ", docRef.id);

                // Update the document with the generated ID
                await updateDoc(docRef, { id: docRef.id });
                console.log("Document updated with ID: ", docRef.id);
                localStorage.setItem("id", docRef.id);
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        },

        // async Add_Charities() {
        //   // Add a new document with a generated id.
        //   const docRef = await addDoc(collection(db, "Charities"), {
        //     id: docRef.id,
        //     title: this.user.name,
        //     description: this.user.describetion,
        //     address: this.user.address,
        //     Package_type: "500",
        //     Charities_specialty: this.user.selectedTab,
        //     Fame_number: this.user.license_number,
        //     Fame_year: this.user.year,
        //     phone: this.user.phone,
        //     Social_media: this.user.email,
        //   });
        //   console.log("Document written with ID: ", docRef.id);
        // },
        async validateForm() {
            this.v$.$validate();
            // Check if the data already exists
            console.log("this.user", this.user);
            this.Add_Charities();
        },
    },
};
</script>
<style lang="scss" scoped>
form {
    width: 50% !important;
}
</style>

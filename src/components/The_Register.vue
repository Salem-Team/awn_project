<template>
    <div class="The_Register">
        <v-container class="form_container mt-4">
            <!--get the data from the Charities using v-model-->
            <form
                ref="form"
                @submit.prevent="validateForm"
                class="ma-auto"
                action="post"
            >
                <!--title input-->
                <v-text-field
                    v-model="Charities.title"
                    variant="outlined"
                    label="اسم الجمعية"
                    class="mt-2"
                    :error-messages="
                        v$.Charities.title.$errors.map((e) => e.$message)
                    "
                ></v-text-field>
                <!--phone input-->
                <v-text-field
                    v-model="Charities.phone"
                    label="تليفون الجمعية"
                    type="tel"
                    variant="outlined"
                    :error-messages="
                        v$.Charities.phone.$errors.map((e) => e.$message)
                    "
                ></v-text-field>
                <!--describetion input-->
                <v-textarea
                    row-height="15"
                    auto-grow
                    rows="3"
                    variant="outlined"
                    v-model="Charities.descripetion"
                    :error-messages="
                        v$.Charities.descripetion.$errors.map((e) => e.$message)
                    "
                    label="وصف قصير للجمعية"
                ></v-textarea>
                <!--address input-->
                <v-text-field
                    variant="outlined"
                    label="العنوان"
                    v-model="Charities.address"
                    :error-messages="
                        v$.Charities.address.$errors.map((e) => e.$message)
                    "
                ></v-text-field>
                <div class="d-flex align-center flex-wrap !w-full">
                    <!--Fame_number input-->
                    <v-text-field
                        variant="outlined"
                        v-model="Charities.Fame_number"
                        :error-messages="
                            v$.Charities.Fame_number.$errors.map(
                                (e) => e.$message
                            )
                        "
                        label="رقم الشهره"
                    ></v-text-field>
                    <!--year input-->
                    <v-text-field
                        variant="outlined"
                        name="year"
                        v-model="Charities.Fame_year"
                        :error-messages="
                            v$.Charities.Fame_year.$errors.map(
                                (e) => e.$message
                            )
                        "
                        label="لسنة"
                    ></v-text-field>
                </div>
                <!--the Charities can add another email box if needed by clicking the plus button-->
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
                <!--Social_media input-->
                <v-text-field
                    id="link"
                    v-for="(social, index) in social"
                    :key="index"
                    v-model="Charities.Social_media[index]"
                    label="منصات التواصل"
                    type="text"
                    variant="outlined"
                ></v-text-field>
                <p class="mb-2 text-right">أنشطة الجمعية ( حدد خيار أو أكثر)</p>
                <!--the Charities can select multiple items from the group and it will be displayed in a paragraph-->
                <v-chip-group
                    selected-class="bg-grey-lighten-1"
                    multiple
                    mandatory
                    class="text-right"
                    v-model="Charities.Charities_specialty"
                    :error-messages="
                        v$.Charities.Charities_specialty.$errors.map(
                            (e) => e.$message
                        )
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
                <p class="mb-4 text-right">
                    {{ Charities.Charities_specialty }}
                </p>
                <p class="mb-2 text-right">أنواع الباقات</p>
                <!--the Charities can select multiple items from the group and it will be displayed in a paragraph-->
                <v-chip-group
                    selected-class="bg-grey-lighten-1"
                    mandatory
                    class="text-right d-flex"
                    v-model="Charities.Package_type"
                >
                    <v-chip
                        elevation="2"
                        v-for="(Packages, index) in Packages"
                        :key="index"
                        class="ma-2"
                        rounded="lg"
                        size="x-large"
                        :value="Packages"
                        filter
                        >{{ Packages }}</v-chip
                    >
                </v-chip-group>
                <p class="mb-4 text-right">{{ Charities.Package_type }}</p>

                <p class="mb-2 text-right">إضافة مشرف</p>
                <!--title input-->
                <v-text-field
                    v-model="user.name"
                    variant="outlined"
                    label="اسم"
                    class="mt-2"
                    :error-messages="
                        v$.user.name.$errors.map((e) => e.$message)
                    "
                ></v-text-field>
                <v-chip-group
                    selected-class="bg-grey-lighten-1"
                    mandatory
                    class="text-right d-flex"
                    v-model="user.gender"
                >
                    <p class="mt-5 text-right">الجنس :</p>
                    <v-chip
                        elevation="2"
                        class="ma-2"
                        rounded="lg"
                        size="x-large"
                        filter
                        value="ذكر"
                        >ذكر</v-chip
                    >
                    <v-chip
                        elevation="2"
                        class="ma-2"
                        rounded="lg"
                        filter
                        size="x-large"
                        value="أنثى"
                        >أنثى</v-chip
                    >
                </v-chip-group>
                <!--phone input-->
                <div class="d-flex align-center flex-wrap mb-2">
                    <label for="phone">تليفون</label>
                    <v-spacer></v-spacer>
                    <v-btn
                        icon="mdi-plus"
                        variant="text"
                        @click="tel++"
                        class="bg-grey-lighten-3"
                        size="small"
                    ></v-btn>
                </div>
                <!--Phone input-->
                <v-text-field
                    id="phone"
                    v-for="(tel, index) in tel"
                    :key="index"
                    v-model="user.phones[index]"
                    label="تليفون"
                    type="tel"
                    variant="outlined"
                    :error-messages="
                        v$.user.phones.$errors.map((e) => e.$message)
                    "
                ></v-text-field>

                <v-text-field
                    v-model="user.birthday"
                    type="date"
                    variant="outlined"
                    label="تاريخ الميلاد"
                    class="mt-2"
                    :error-messages="
                        v$.user.birthday.$errors.map((e) => e.$message)
                    "
                ></v-text-field>
                <v-text-field
                    v-model="user.email"
                    type="email"
                    placeholder="example@gmail.com"
                    variant="outlined"
                    label="الايميل"
                    class="mt-2"
                    :error-messages="
                        v$.user.email.$errors.map((e) => e.$message)
                    "
                ></v-text-field>

                <v-text-field
                    v-model="user.nationalID"
                    variant="outlined"
                    label="الرقم القومي"
                    class="mt-2"
                    :error-messages="
                        v$.user.nationalID.$errors.map((e) => e.$message)
                    "
                ></v-text-field>
                <v-text-field
                    v-model="user.password"
                    :type="inputType"
                    variant="outlined"
                    label="الباسورد"
                    placeholder="ادخل كلمة
                    سر من 8 حروف أرقام وحرف واحد كبير على الأقل"
                    class="mt-2 mb-0 pb-0"
                    :error-messages="
                        v$.user.password.$errors.map((e) => e.$message)
                    "
                    :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                    @click:append="toggleShowPassword"
                >
                </v-text-field>
                <v-btn
                    class="mt-4"
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
    numeric,
    helpers,
} from "@vuelidate/validators";

// Add data
import {
    collection,
    addDoc,
    getFirestore,
    updateDoc,
} from "@firebase/firestore";
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
    props: { IsActive: Object },
    setup() {
        return {
            v$: useVuelidate(),
        };
    },
    data() {
        return {
            showPassword: false, // define showPassword
            Active: this.IsActive,
            tel: ref(1),
            //ref to add another email box
            social: ref(1),
            //activities
            activities: ref(["إطعام", "كفالة", "زواج", "علاج"]),
            Packages: ref([
                "1000 جنية مصري  500 حالة",
                "2000 جنية مصري  1000 حالة",
                "3000 جنية مصري  200 حالة أو أكثر",
            ]),
            //ref to store the Charities data
            Charities: {
                title: "الرحمن الرحيم",
                Social_media: [],
                phone: "01099877866",
                descripetion: "جمعية خيرية لمساعدة المحتاجين",
                address: "شارع الطيران - مدينة نصر",
                Fame_number: "3566",
                Charities_specialty: ["إطعام"],
                Package_type: "1000 جنية مصري  500 حالة",
                Fame_year: "2020",
            },
            //ref to store the user data
            user: {
                name: "محمود سامي",
                gender: "ذكر",
                phones: ["01011199200"],
                birthday: "2024-04-24",
                email: "mas@gmail.com",
                nationalID: "876898746783876",
                password: "Mo-on-1000",
                charity_ID: "",
            },
        };
    },
    //form validation
    validations() {
        return {
            Charities: {
                title: {
                    required: helpers.withMessage("ادخل اسم ", required),
                    minLength: helpers.withMessage(
                        " ادخل اسم مكون من 3 حروف على الأقل",
                        minLength(3)
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
                descripetion: {
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
                Fame_number: {
                    required: helpers.withMessage("ادخل رقم", required),
                    minLength: helpers.withMessage(
                        " ادخل رقم مكون من 3 أرقام على الأقل",
                        minLength(3)
                    ),
                    numeric: helpers.withMessage(" ادخل أرقام فقط", numeric),
                },
                Charities_specialty: {
                    required,
                },
                Fame_year: {
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
            user: {
                name: {
                    required: helpers.withMessage("ادخل اسم ", required),
                    maxLength: helpers.withMessage(
                        " ادخل اسم لا يزيد عن 20 حرف",
                        maxLength(20)
                    ),
                    minLength: helpers.withMessage(
                        " ادخل اسم مكون من 3 حروف على الأقل",
                        minLength(3)
                    ),
                },
                email: {
                    required: helpers.withMessage("ادخل ايميل ", required),
                    isValidEmail(value) {
                        // Define your regex pattern for the email
                        const regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        return regexPattern.test(value);
                    },
                },
                phones: {
                    required: helpers.withMessage("ادخل رقم ", required),
                },
                nationalID: {
                    required: helpers.withMessage(
                        "ادخل الرقم القومي ",
                        required
                    ),
                    numeric: helpers.withMessage(" ادخل أرقام فقط", numeric),
                    minLength: helpers.withMessage(
                        " ادخل عنوان مكون من 14 أرقام على الأقل",
                        minLength(14)
                    ),
                },
                birthday: {
                    required: helpers.withMessage(
                        "ادخل تاريخ الميلاد",
                        required
                    ),
                },
                gender: {
                    required,
                },
                password: {
                    required: helpers.withMessage("ادخل باسورد", required),
                    isValidPassword(value) {
                        // Define your regex pattern for the password
                        const regexPattern =
                            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
                        this.validate = true;
                        return regexPattern.test(value);
                    },
                },
            },
        };
    },
    computed: {
        // Define a computed property to determine the input type based on showPassword
        inputType() {
            return this.showPassword ? "text" : "password";
        },
    },
    methods: {
        // Define a method to toggle the showPassword flag when the append icon is clicked
        toggleShowPassword() {
            this.showPassword = !this.showPassword;
        },
        async Add_Users() {
            try {
                // Add a new document with a generated id.
                const docRef = await addDoc(collection(db, "Users"), {
                    name: this.user.name,
                    birthday: this.user.birthday,
                    gender: this.user.gender,
                    email: this.user.email,
                    nationalID: this.user.nationalID,
                    phones: this.user.phones,
                    password: this.user.password,
                    type: "owner",
                });

                // Update the document with the generated ID
                await updateDoc(docRef, {
                    id: docRef.id,
                    charity_ID: this.user.charity_ID,
                });
                localStorage.setItem("id", docRef.id);
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        },
        async Add_Charities() {
            try {
                // Add a new document with a generated id.
                const docRef = await addDoc(collection(db, "Charities"), {
                    title: this.Charities.title,
                    description: this.Charities.descripetion,
                    address: this.Charities.address,
                    Package_type: this.Charities.Package_type,
                    Charities_specialty: this.Charities.Charities_specialty,
                    Fame_number: this.Charities.Fame_number,
                    Fame_year: this.Charities.Fame_year,
                    phone: this.Charities.phone,
                    Social_media: this.Charities.Social_media,
                });

                // Update the document with the generated ID
                await updateDoc(docRef, { id: docRef.id });
                this.user.charity_ID = docRef.id;
                // Add  Add_Users
                if (this.user.charity_ID) {
                    this.Add_Users();
                }
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        },

        checkDataExists() {
            // Perform comparison with existing data
            // Return true if data exists, false otherwise
            return !(
                this.Charities.title == "" &&
                this.Charities.descripetion == "" &&
                this.Charities.address == "" &&
                this.Charities.Charities_specialty == "" &&
                this.Charities.Social_media == "" &&
                this.Charities.phone == "" &&
                this.Charities.Fame_number == "" &&
                this.Charities.Fame_year == "" &&
                this.user.name == "" &&
                this.user.gender == "" &&
                this.user.birthday == "" &&
                this.user.email == "" &&
                this.user.nationalID == "" &&
                this.user.phones == "" &&
                this.user.password == ""
            );
        },
        async validateForm() {
            const dataExists = this.checkDataExists();
            this.v$.$validate();
            if (dataExists) {
                this.v$.$validate();
                await this.$nextTick();
                if (!this.v$.$error) {
                    // If no errors, proceed with further processing
                    console.log("Data filled and Form submitted successfully");
                    console.log("Charities", this.Charities);
                    console.log("User", this.user);
                    this.Add_Charities();
                    // close The_Register
                    this.Active = false;
                    this.v$.$reset();
                } else {
                    // If there are validation errors, handle them accordingly
                    console.log("Data not all filled Validation errors found");
                }
            } else {
                console.log("Data required");
            }
        },
    },
};
</script>
<style lang="scss" scoped>
form {
    width: 95% !important;
}
</style>

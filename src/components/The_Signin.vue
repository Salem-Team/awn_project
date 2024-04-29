<template>
    <div class="The_Signin">
        <v-container class="form_container mt-4">
            <!--get the data from the Charities using v-model-->
            <form
                ref="form"
                @submit.prevent="validateForm"
                class="ma-auto"
                action="post"
            >
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
                    @click="Sing_In"
                >
                    تسجيل الدخول
                </v-btn>
            </form>
        </v-container>
    </div>
</template>

<script scoped>
import useVuelidate from "@vuelidate/core";
import { required, minLength, numeric, helpers } from "@vuelidate/validators";

// firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";

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
    props: ["Check_User", "IsActive"],
    setup() {
        return {
            v$: useVuelidate(),
        };
    },
    data() {
        return {
            showPassword: false, // define showPassword
            Active: this.IsActive,
            //ref to store the user data
            user: {
                nationalID: "876898746783876",
                password: "Mo-on-1000",
            },
        };
    },
    //form validation
    validations() {
        return {
            user: {
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
                password: {
                    required: helpers.withMessage("ادخل باسورد", required),
                    isValidPassword(value) {
                        // Define your regex pattern for the password
                        const regexPattern =
                            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
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
        async Sing_In() {
            const querySnapshot = await getDocs(collection(db, "Users"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                if (
                    doc.data().nationalID === this.user.nationalID &&
                    doc.data().password === this.user.password
                ) {
                    console.log(doc.id, " => ", doc.data().nationalID);
                    localStorage.setItem("id", doc.id);
                    setTimeout(() => {
                        this.Check_User();
                    }, 100);
                    // Close Sign IN
                    this.Active = false;
                    this.v$.$reset();
                }
            });
        },
        checkDataExists() {
            // Perform comparison with existing data
            // Return true if data exists, false otherwise
            return !(this.user.nationalID == "" && this.user.password == "");
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
                    console.log("User", this.user);
                    // Close Sign IN
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
    width: 50% !important;
}
</style>

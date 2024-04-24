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
                    type="password"
                    variant="outlined"
                    label="الباسورد"
                    class="mt-2"
                    :error-messages="
                        v$.user.password.$errors.map((e) => e.$message)
                    "
                ></v-text-field>
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
import useVuelidate from "@vuelidate/core";
import { required, minLength, numeric, helpers } from "@vuelidate/validators";
export default {
    setup() {
        return {
            v$: useVuelidate(),
        };
    },
    data() {
        return {
            //ref to store the user data
            user: {
                email: "",
                nationalID: "",
                password: "",
            },
        };
    },
    //form validation
    validations() {
        return {
            user: {
                email: {
                    required: helpers.withMessage("ادخل ايميل ", required),
                    isValidEmail(value) {
                        // Define your regex pattern for the email
                        const regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        return regexPattern.test(value);
                    },
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
    methods: {
        checkDataExists() {
            // Perform comparison with existing data
            // Return true if data exists, false otherwise
            return !(
                this.user.email == "" &&
                this.user.nationalID == "" &&
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
                    console.log("User", this.user);
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

<template>
    <div>
        <!-- <v-card class="mb-4">
            <v-card-text>
                <v-select
                    v-model="steps"
                    :items="[2, 3, 4, 5, 6]"
                    label="# of steps"
                ></v-select>
            </v-card-text>
        </v-card> -->

        <v-stepper v-model="e1" alt-labels>
            <template v-slot:default="{ prev, next }">
                <v-stepper-header>
                    <template v-for="n in steps" :key="`${n}-step`">
                        <v-stepper-item
                            :title="title[n]"
                            :complete="e1 > n"
                            :step="`Step {{ n }}`"
                            :value="n"
                        ></v-stepper-item>

                        <v-divider v-if="n !== steps" :key="n"></v-divider>
                    </template>
                </v-stepper-header>

                <v-stepper-window>
                    <div v-if="e1 === 1">
                        <form @submit.prevent="validateForm1">
                            <div class="form">
                                <div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="form1.namea"
                                            label="الاسم ثلاثي"
                                            variant="outlined"
                                            style="width: 100%"
                                            placeholder="الاسم ثلاثي"
                                            :class="[
                                                `${
                                                    v$.form1.$errors.find(
                                                        (err) =>
                                                            err.$property ==
                                                            'namea'
                                                    )
                                                        ? 'danger'
                                                        : ''
                                                }`,
                                            ]"
                                        ></v-text-field>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="err.$property == 'namea'"
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="form1.nameb"
                                            label="اسم الشهره"
                                            variant="outlined"
                                            style="width: 100%"
                                            placeholder="اسم الشهره"
                                            :class="[
                                                `${
                                                    v$.form1.$errors.find(
                                                        (err) =>
                                                            err.$property ==
                                                            'nameb'
                                                    )
                                                        ? 'danger'
                                                        : ''
                                                }`,
                                            ]"
                                        >
                                        </v-text-field>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="err.$property == 'nameb'"
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="form1.cardNumber"
                                            label="رقم البطاقه"
                                            variant="outlined"
                                            class="mt-2"
                                            style="width: 100%"
                                            placeholder="رقم البطاقه"
                                            :class="[
                                                `${
                                                    v$.form1.$errors.find(
                                                        (err) =>
                                                            err.$property ==
                                                            'cardNumber'
                                                    )
                                                        ? 'danger'
                                                        : ''
                                                }`,
                                            ]"
                                        ></v-text-field>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property ==
                                                    'cardNumber'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-select
                                            v-model="form1.Region"
                                            label="المحافظه"
                                            class="mt-2"
                                            style="width: 100%"
                                            variant="outlined"
                                            placeholder="المحافظه"
                                            :class="[
                                                `${
                                                    v$.form1.$errors.find(
                                                        (err) =>
                                                            err.$property ==
                                                            'Region'
                                                    )
                                                        ? 'danger'
                                                        : ''
                                                }`,
                                            ]"
                                            :items="Governorates"
                                        ></v-select>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="err.$property == 'Region'"
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="form1.HouseNumber"
                                            style="width: 100%"
                                            label="رقم المنزل"
                                            variant="outlined"
                                            placeholder="رقم المنزل"
                                            :class="[
                                                `${
                                                    v$.form1.$errors.find(
                                                        (err) =>
                                                            err.$property ==
                                                            'HouseNumber'
                                                    )
                                                        ? 'danger'
                                                        : ''
                                                }`,
                                            ]"
                                        ></v-text-field>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property ==
                                                    'HouseNumber'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="form1.FloorNumber"
                                            label="رقم الدور"
                                            class="mt-2"
                                            style="width: 100%"
                                            variant="outlined"
                                            placeholder="رقم الدور"
                                            :class="[
                                                `${
                                                    v$.form1.$errors.find(
                                                        (err) =>
                                                            err.$property ==
                                                            'FloorNumber'
                                                    )
                                                        ? 'danger'
                                                        : ''
                                                }`,
                                            ]"
                                        ></v-text-field>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property ==
                                                    'FloorNumber'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-select
                                            v-model="form1.SocialStatus"
                                            class="mt-2"
                                            style="width: 100%"
                                            :items="SocialStatuss"
                                            label="الحاله الجتماعيه  "
                                        ></v-select>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property ==
                                                    'SocialStatus'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="form1.phoneNumber"
                                            class="mt-2"
                                            style="width: 100%"
                                            label="رقم التليفون"
                                            variant="outlined"
                                            placeholder="رقم التليفون"
                                            :class="[
                                                `${
                                                    v$.form1.$errors.find(
                                                        (err) =>
                                                            err.$property ==
                                                            'phoneNumber'
                                                    )
                                                        ? 'danger'
                                                        : ''
                                                }`,
                                            ]"
                                        ></v-text-field>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property ==
                                                    'phoneNumber'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div v-if="e1 === 2">
                        <form @submit.prevent="validateForm2">
                            <div class="form">
                                <div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="form2.Required"
                                            label="المطلوب "
                                            class="mt-2"
                                            style="width: 100%"
                                            variant="outlined"
                                            placeholder="المطلوب "
                                            :class="[
                                                `${
                                                    v$.form2.$errors.find(
                                                        (err) =>
                                                            err.$property ==
                                                            'Required'
                                                    )
                                                        ? 'danger'
                                                        : ''
                                                }`,
                                            ]"
                                        ></v-text-field>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property == 'Required'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="form2.Inside"
                                            label="الداخل "
                                            class="mt-2"
                                            style="width: 100%"
                                            variant="outlined"
                                            placeholder="الداخل "
                                            :class="[
                                                `${
                                                    v$.form2.$errors.find(
                                                        (err) =>
                                                            err.$property ==
                                                            'Inside'
                                                    )
                                                        ? 'danger'
                                                        : ''
                                                }`,
                                            ]"
                                        ></v-text-field>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="err.$property == 'Inside'"
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 100%"
                                    >
                                        <v-text-field
                                            v-model="form2.Impotence"
                                            label="العجز "
                                            class="mt-2"
                                            style="
                                                width: 100%;
                                                pointer-events: none;
                                            "
                                            variant="outlined"
                                            placeholder="العجز "
                                            :class="[
                                                `${
                                                    v$.form2.$errors.find(
                                                        (err) =>
                                                            err.$property ==
                                                            'Impotence'
                                                    )
                                                        ? 'danger'
                                                        : ''
                                                }`,
                                            ]"
                                        ></v-text-field>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property == 'Impotence'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div v-if="e1 === 3">
                        <form @submit.prevent="validateForm3">
                            <div class="form">
                                <div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="form3.PatientName"
                                            label=" اسم المريض "
                                            variant="outlined"
                                            style="width: 100%"
                                            placeholder="اسم المريض"
                                            :class="[
                                                `${
                                                    v$.form1.$errors.find(
                                                        (err) =>
                                                            err.$property ==
                                                            'PatientName'
                                                    )
                                                        ? 'danger'
                                                        : ''
                                                }`,
                                            ]"
                                        ></v-text-field>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property ==
                                                    'PatientName'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="form3.theDisease"
                                            label="  المرض "
                                            variant="outlined"
                                            class="mt-2"
                                            style="width: 100%"
                                            placeholder=" المرض"
                                            :class="[
                                                `${
                                                    v$.form1.$errors.find(
                                                        (err) =>
                                                            err.$property ==
                                                            'theDisease'
                                                    )
                                                        ? 'danger'
                                                        : ''
                                                }`,
                                            ]"
                                        ></v-text-field>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property ==
                                                    'theDisease'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 100%"
                                    >
                                        <v-text-field
                                            v-model="form3.treatment"
                                            label="كيفيه الحصول علي العلاج"
                                            variant="outlined"
                                            class="mt-2"
                                            style="width: 100%"
                                            placeholder="كيفيه الحصول علي العلاج "
                                            :class="[
                                                `${
                                                    v$.form1.$errors.find(
                                                        (err) =>
                                                            err.$property ==
                                                            'treatment'
                                                    )
                                                        ? 'danger'
                                                        : ''
                                                }`,
                                            ]"
                                        ></v-text-field>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property == 'treatment'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 100%"
                                    >
                                        <v-text-field
                                            v-model="form3.Reasontreatment"
                                            label=" السبب في عد العلاج علي نفقه الدوله"
                                            variant="outlined"
                                            class="mt-2"
                                            style="width: 100%"
                                            placeholder="السبب في عد العلاج علي نفقه الدوله"
                                            :class="[
                                                `${
                                                    v$.form1.$errors.find(
                                                        (err) =>
                                                            err.$property ==
                                                            'Reasontreatment'
                                                    )
                                                        ? 'danger'
                                                        : ''
                                                }`,
                                            ]"
                                        ></v-text-field>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property ==
                                                    'Reasontreatment'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <div class="card w-25">
                                        <v-btn
                                            style="
                                                display: block;
                                                margin-bottom: 20px;
                                                margin-right: 20px;
                                            "
                                            v-if="!this.showDiv1"
                                            @click="toggleDiv1"
                                            icon="mdi-plus"
                                            size="small"
                                        >
                                        </v-btn>
                                    </div>
                                </div>
                            </div>
                            <v-divider
                                :thickness="8"
                                v-if="this.showDiv1"
                                class="my-5"
                            ></v-divider>
                            <div class="form" v-if="this.showDiv1">
                                <div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="form3.PatientName"
                                            label=" اسم المريض "
                                            variant="outlined"
                                            style="width: 100%"
                                            placeholder="اسم المريض"
                                            :class="[
                                                `${
                                                    v$.form1.$errors.find(
                                                        (err) =>
                                                            err.$property ==
                                                            'PatientName'
                                                    )
                                                        ? 'danger'
                                                        : ''
                                                }`,
                                            ]"
                                        ></v-text-field>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property ==
                                                    'PatientName'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="form3.theDisease"
                                            label="  المرض "
                                            variant="outlined"
                                            class="mt-2"
                                            style="width: 100%"
                                            placeholder=" المرض"
                                            :class="[
                                                `${
                                                    v$.form1.$errors.find(
                                                        (err) =>
                                                            err.$property ==
                                                            'theDisease'
                                                    )
                                                        ? 'danger'
                                                        : ''
                                                }`,
                                            ]"
                                        ></v-text-field>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property ==
                                                    'theDisease'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 100%"
                                    >
                                        <v-text-field
                                            v-model="form3.treatment"
                                            label="كيفيه الحصول علي العلاج"
                                            variant="outlined"
                                            class="mt-2"
                                            style="width: 100%"
                                            placeholder="كيفيه الحصول علي العلاج "
                                            :class="[
                                                `${
                                                    v$.form1.$errors.find(
                                                        (err) =>
                                                            err.$property ==
                                                            'treatment'
                                                    )
                                                        ? 'danger'
                                                        : ''
                                                }`,
                                            ]"
                                        ></v-text-field>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property == 'treatment'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 100%"
                                    >
                                        <v-text-field
                                            v-model="form3.Reasontreatment"
                                            label=" السبب في عد العلاج علي نفقه الدوله"
                                            variant="outlined"
                                            class="mt-2"
                                            style="width: 100%"
                                            placeholder="السبب في عد العلاج علي نفقه الدوله"
                                            :class="[
                                                `${
                                                    v$.form1.$errors.find(
                                                        (err) =>
                                                            err.$property ==
                                                            'Reasontreatment'
                                                    )
                                                        ? 'danger'
                                                        : ''
                                                }`,
                                            ]"
                                        ></v-text-field>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property ==
                                                    'Reasontreatment'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <div class="card w-25">
                                        <v-btn
                                            style="
                                                display: block;
                                                margin-bottom: 20px;
                                                margin-right: 20px;
                                            "
                                            v-if="!this.showDiv2"
                                            @click="toggleDiv2"
                                            icon="mdi-plus"
                                            size="small"
                                        >
                                        </v-btn>
                                    </div>
                                </div>
                            </div>
                            <v-divider
                                :thickness="8"
                                v-if="this.showDiv2"
                                class="my-5"
                            ></v-divider>
                            <div class="form" v-if="this.showDiv2">
                                <div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="form3.PatientName"
                                            label=" اسم المريض "
                                            variant="outlined"
                                            style="width: 100%"
                                            placeholder="اسم المريض"
                                            :class="[
                                                `${
                                                    v$.form1.$errors.find(
                                                        (err) =>
                                                            err.$property ==
                                                            'PatientName'
                                                    )
                                                        ? 'danger'
                                                        : ''
                                                }`,
                                            ]"
                                        ></v-text-field>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property ==
                                                    'PatientName'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="form3.theDisease"
                                            label="  المرض "
                                            variant="outlined"
                                            class="mt-2"
                                            style="width: 100%"
                                            placeholder=" المرض"
                                            :class="[
                                                `${
                                                    v$.form1.$errors.find(
                                                        (err) =>
                                                            err.$property ==
                                                            'theDisease'
                                                    )
                                                        ? 'danger'
                                                        : ''
                                                }`,
                                            ]"
                                        ></v-text-field>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property ==
                                                    'theDisease'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 100%"
                                    >
                                        <v-text-field
                                            v-model="form3.treatment"
                                            label="كيفيه الحصول علي العلاج"
                                            variant="outlined"
                                            class="mt-2"
                                            style="width: 100%"
                                            placeholder="كيفيه الحصول علي العلاج "
                                            :class="[
                                                `${
                                                    v$.form1.$errors.find(
                                                        (err) =>
                                                            err.$property ==
                                                            'treatment'
                                                    )
                                                        ? 'danger'
                                                        : ''
                                                }`,
                                            ]"
                                        ></v-text-field>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property == 'treatment'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 100%"
                                    >
                                        <v-text-field
                                            v-model="form3.Reasontreatment"
                                            label=" السبب في عد العلاج علي نفقه الدوله"
                                            variant="outlined"
                                            class="mt-2"
                                            style="width: 100%"
                                            placeholder="السبب في عد العلاج علي نفقه الدوله"
                                            :class="[
                                                `${
                                                    v$.form1.$errors.find(
                                                        (err) =>
                                                            err.$property ==
                                                            'Reasontreatment'
                                                    )
                                                        ? 'danger'
                                                        : ''
                                                }`,
                                            ]"
                                        ></v-text-field>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property ==
                                                    'Reasontreatment'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <div class="card w-25">
                                        <v-btn
                                            style="
                                                display: block;
                                                margin-bottom: 20px;
                                                margin-right: 20px;
                                            "
                                            v-if="!this.showDiv2"
                                            @click="toggleDiv2"
                                            icon="mdi-plus"
                                            size="small"
                                        >
                                        </v-btn>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div v-if="e1 === 4">
                        <form @submit.prevent="validateForm4">
                            <div class="form">
                                <div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-select
                                            v-model="form4.numberRooms"
                                            :items="numberRooms"
                                            class="mt-2"
                                            style="width: 100%"
                                            label=" عدد الغرف"
                                        ></v-select>

                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property ==
                                                    'numberRooms'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-select
                                            v-model="form4.ApartmentType"
                                            :items="items"
                                            class="mt-2"
                                            style="width: 100%"
                                            label="الشقه ملك ام ايجار"
                                        ></v-select>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property ==
                                                    'ApartmentType'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-select
                                            v-model="form4.BathroomType"
                                            :items="amam"
                                            class="mt-2"
                                            style="width: 100%"
                                            label="الحمام خاص ام مشترك"
                                        ></v-select>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;

                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property ==
                                                    'BathroomType'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-select
                                            v-model="form4.FloorType"
                                            :items="kitchen"
                                            class="mt-2"
                                            style="width: 100%"
                                            label="  نوع الارضيه "
                                        ></v-select>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property == 'FloorType'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="form4.Descriptionkitchen"
                                            label="  وصف شامل للمطبخ "
                                            class="mt-2"
                                            style="width: 100%"
                                            variant="outlined"
                                            placeholder="وصف شامل للمطبخ"
                                        ></v-text-field>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property ==
                                                    'Descriptionkitchen'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="form4.DescriptionRoom1"
                                            label="  وصف سريع للغرفه رقم 1 "
                                            variant="outlined"
                                            class="mt-2"
                                            style="width: 100%"
                                            placeholder="وصف سريع للغرفه رقم 1 "
                                        ></v-text-field>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                width: 100%;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property ==
                                                    'DescriptionRoom1'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="form4.DescriptionRoom2"
                                            v-show="form4.numberRooms > 1"
                                            label="  وصف سريع للغرفه رقم 2 "
                                            class="mt-2"
                                            style="width: 100%"
                                            variant="outlined"
                                            placeholder="وصف سريع للغرفه رقم 2 "
                                        ></v-text-field>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                margin-right: 273px;
                                                margin-bottom: 17px;
                                                color: red;
                                            "
                                            v-show="showDiv1"
                                        >
                                            <span
                                                v-if="
                                                    err.$property ==
                                                    'DescriptionRoom2'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>

                                    <v-text-field
                                        v-model="form4.DescriptionRoom3"
                                        label="  وصف سريع للغرفه رقم 3 "
                                        v-show="form4.numberRooms > 2"
                                        class="mt-2"
                                        style="width: 45%"
                                        variant="outlined"
                                        placeholder="وصف سريع للغرفه رقم 3 "
                                    ></v-text-field>
                                    <span
                                        v-show="showDiv2"
                                        v-for="err in v$.$errors"
                                        :key="err.$uid"
                                        style="
                                            display: block;
                                            margin-right: 273px;
                                            margin-bottom: 17px;
                                            color: red;
                                        "
                                    >
                                        <span
                                            v-if="
                                                err.$property ==
                                                'DescriptionRoom3'
                                            "
                                            >{{ err.$message }}</span
                                        >
                                    </span>
                                </div>

                                <div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="form4.DescriptionRoom2"
                                            v-show="form4.numberRooms > 3"
                                            label="  وصف سريع للغرفه رقم 4 "
                                            class="mt-2"
                                            style="width: 100%"
                                            variant="outlined"
                                            placeholder="وصف سريع للغرفه رقم 4 "
                                        ></v-text-field>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                margin-right: 273px;
                                                margin-bottom: 17px;
                                                color: red;
                                            "
                                            v-show="showDiv1"
                                        >
                                            <span
                                                v-if="
                                                    err.$property ==
                                                    'DescriptionRoom4'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>

                                    <v-text-field
                                        v-model="form4.DescriptionRoom3"
                                        label="  وصف سريع للغرفه رقم 5 "
                                        v-show="form4.numberRooms > 4"
                                        class="mt-2"
                                        style="width: 45%"
                                        variant="outlined"
                                        placeholder="وصف سريع للغرفه رقم 5 "
                                    ></v-text-field>
                                    <span
                                        v-show="showDiv2"
                                        v-for="err in v$.$errors"
                                        :key="err.$uid"
                                        style="
                                            display: block;
                                            margin-right: 273px;
                                            margin-bottom: 17px;
                                            color: red;
                                        "
                                    >
                                        <span
                                            v-if="
                                                err.$property ==
                                                'DescriptionRoom5'
                                            "
                                            >{{ err.$message }}</span
                                        >
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div v-if="e1 === 5">
                        <form @submit.prevent="validateForm5">
                            <div class="form">
                                <div class="height: 59px;">
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-checkbox
                                            v-model="form5.medical"
                                            label="طبي"
                                            value="طبي"
                                        ></v-checkbox>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                margin-right: 273px;
                                                margin-bottom: 17px;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property == 'medical'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>

                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-checkbox
                                            v-model="form5.Husband"
                                            label="زوج"
                                            value="زوج"
                                        ></v-checkbox>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                margin-right: 273px;
                                                margin-bottom: 17px;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property == 'Husband'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-checkbox
                                            v-model="form5.clothes"
                                            label="ملابس"
                                            value="ملابس"
                                        ></v-checkbox>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                margin-right: 273px;
                                                margin-bottom: 17px;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property == 'clothes'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                </div>
                                <div class="height: 59px;">
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-checkbox
                                            v-model="form5.salaries"
                                            label="مرتبات"
                                            value="مرتبات"
                                        ></v-checkbox>

                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                margin-right: 273px;
                                                margin-bottom: 17px;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property == 'salaries'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>

                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-checkbox
                                            v-model="form5.Blankets"
                                            label="بطاطين"
                                            value="بطاطين"
                                        ></v-checkbox>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                margin-right: 273px;
                                                margin-bottom: 17px;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property == 'Blankets'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-checkbox
                                            v-model="form5.FoodBag"
                                            label="شنطه غذائيه"
                                            value="شنطه غذائيه"
                                        ></v-checkbox>
                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                margin-right: 273px;
                                                margin-bottom: 17px;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property == 'FoodBag'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                </div>
                                <div class="height: 59px;">
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-checkbox
                                            v-model="form5.MonthlyWarranty"
                                            label="كفاله شهريه"
                                            value="كفاله شهريه"
                                        ></v-checkbox>

                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                margin-right: 273px;
                                                margin-bottom: 17px;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property ==
                                                    'MonthlyWarranty'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>

                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-checkbox
                                            v-model="form5.Appliances"
                                            label="اجهزه منزليه"
                                            value="اجهزه منزليه"
                                        ></v-checkbox>

                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                margin-right: 273px;
                                                margin-bottom: 17px;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property ==
                                                    'Appliances'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-checkbox
                                            v-model="form5.MonthlyWarranty2"
                                            label="كفاله "
                                            value="كفاله "
                                        ></v-checkbox>

                                        <span
                                            v-for="err in v$.$errors"
                                            :key="err.$uid"
                                            style="
                                                display: block;
                                                margin-right: 273px;
                                                margin-bottom: 17px;
                                                color: red;
                                            "
                                        >
                                            <span
                                                v-if="
                                                    err.$property ==
                                                    'MonthlyWarranty2'
                                                "
                                                >{{ err.$message }}</span
                                            >
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </v-stepper-window>

                <v-stepper-actions
                    :disabled="disabled"
                    @click:next="next"
                    @click:prev="prev"
                    type="submit"
                ></v-stepper-actions>
            </template>
        </v-stepper>
    </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import {
    required,
    minLength,
    maxLength,
    // alpha,
    numeric,
    // regex,
    // between,
    helpers,
} from "@vuelidate/validators";

export default {
    data() {
        return {
            formError: false,
            formError2: false,
            formError3: false,
            formError4: false,
            formError5: false,

            currentStep: 1, // الخطوة الحالية

            e1: 1,
            steps: 5,
            numberRooms: [1, 2, 3, 4, 5],
            title: [
                "",
                "المعلومات الشخصية",
                "المعلومات المالية",
                "الأمراض",
                "حالة المسكن",
                "إحتياجات الأسرة",
            ],
            Case: {
                personal_info: {
                    name: "",
                    nickname: "",
                    nationalID: "",
                    governorate: "",
                },
            },
            Governorates: [
                "القاهرة",
                "الإسكندرية",
                "الجيزة",
                "القليوبية",
                "بورسعيد",
                "السويس",
                "أسيوط",
                "الإسماعيلية",
                "أسوان",
                "الفيوم",
                "دمياط",
                "الدقهلية",
                "الأقصر",
                "البحيرة",
                "المنيا",
                "قنا",
                "الشرقية",
                "سوهاج",
                "المنوفية",
                "الغربية",
                "مطروح",
                "كفر الشيخ",
                "شمال سيناء",
                "الوادي الجديد",
                "البحر الأحمر",
                "جنوب سيناء",
            ],
            showDiv1: false,
            showDiv2: false,
            showDiv3: false,
            showDiv4: false,
            currentForm1: false,
            form1: {
                namea: "",
                nameb: "",
                cardNumber: "",
                Region: "",
                HouseNumber: "",
                FloorNumber: "",
                SocialStatus: "",
                phoneNumber: "",
            },
            form2: {
                Required: "",
                Inside: "",
                Impotence: "",
                TreatmentExpenses: "",
            },

            form3: {
                PatientName: "",
                theDisease: "",
                treatment: "",
                Reasontreatment: "",
            },
            form4: {
                numberRooms: 1,
                ApartmentType: "",
                BathroomType: "",
                FloorType: "",
                Descriptionkitchen: "",
                DescriptionRoom1: "",
                DescriptionRoom2: "",
                DescriptionRoom3: "",
                DescriptionRoom4: "",
                DescriptionRoom5: "",
            },
            form5: {
                medical: "",
                Husband: "",
                clothes: "",
                salaries: "",
                Blankets: "",
                FoodBag: "",
                MonthlyWarranty: "",
                Appliances: "",
                MonthlyWarranty2: "",
            },
            items: ["ملك", "ايجار"],
            amam: ["مشترك", "خاص"],
            SocialStatuss: ["متزوج", "اعزب"],
            kitchen: ["بلاط", "سراميك", "بورسلين"],

            tab: null,
            testform1: [],
            testform2: [],
            testform3: [],
            testform4: [],
            testform5: [],
        };
    },

    computed: {
        disabled() {
            return this.e1 === 1 ? "prev" : this.e1 === 5 ? "next" : undefined;
        },
    },
    inject: ["Emitter"],
    setup() {
        return { v$: useVuelidate() };
    },

    validations() {
        return {
            form1: {
                namea: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    minLength: helpers.withMessage(
                        "لا يجب ان تقل عن 10 حروف ",
                        minLength(10)
                    ),
                    maxLength: helpers.withMessage(
                        "لا يجب ان تذيد عن 100 حروف ",
                        maxLength(100)
                    ),

                    regex: helpers.withMessage(
                        "يجب أن تحتوي على حروف عربية فقط",
                        /[\u0600-\u06FF\s]+/
                    ),
                },
                nameb: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    regex: helpers.withMessage(
                        "يجب أن تحتوي على حروف عربية فقط",
                        /[\u0600-\u06FF\s]+/
                    ),
                    minLength: helpers.withMessage(
                        "لا يجب ان تقل عن 3 حروف ",
                        minLength(3)
                    ),
                    maxLength: helpers.withMessage(
                        "لا يجب ان تذيد عن 100 حروف ",
                        maxLength(100)
                    ),
                },
                cardNumber: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    numeric: helpers.withMessage(
                        "  يجب ان تكون ارقام فقط",
                        numeric
                    ),
                },
                Region: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    regex: helpers.withMessage(
                        "يجب أن تحتوي على حروف عربية فقط",
                        /[\u0600-\u06FF\s]+/
                    ),
                },
                HouseNumber: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    numeric: helpers.withMessage(
                        "  يجب ان تكون ارقام فقط",
                        numeric
                    ),
                },
                FloorNumber: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    numeric: helpers.withMessage(
                        "  يجب ان تكون ارقام فقط",
                        numeric
                    ),
                },

                SocialStatus: {
                    required: helpers.withMessage("حقل مطلوب", required),
                },
                phoneNumber: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    // between: between(, 120),
                    numeric: helpers.withMessage(
                        "  يجب ان تكون ارقام فقط",
                        numeric
                    ),
                },
            },
            form2: {
                Required: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    numeric: helpers.withMessage(
                        "  يجب ان تكون ارقام فقط",
                        numeric
                    ),
                },
                Inside: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    numeric: helpers.withMessage(
                        "  يجب ان تكون ارقام فقط",
                        numeric
                    ),
                },
                Impotence: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    numeric: helpers.withMessage(
                        "  يجب ان تكون ارقام فقط",
                        numeric
                    ),
                },
                TreatmentExpenses: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    numeric: helpers.withMessage(
                        "  يجب ان تكون ارقام فقط",
                        numeric
                    ),
                },
            },
            form3: {
                PatientName: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    regex: helpers.withMessage(
                        "يجب أن تحتوي على حروف عربية فقط",
                        /[\u0600-\u06FF\s]+/
                    ),
                },
                theDisease: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    regex: helpers.withMessage(
                        "يجب أن تحتوي على حروف عربية فقط",
                        /[\u0600-\u06FF\s]+/
                    ),
                },
                treatment: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    regex: helpers.withMessage(
                        "يجب أن تحتوي على حروف عربية فقط",
                        /[\u0600-\u06FF\s]+/
                    ),
                },
                Reasontreatment: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    regex: helpers.withMessage(
                        "يجب أن تحتوي على حروف عربية فقط",
                        /[\u0600-\u06FF\s]+/
                    ),
                },
            },
            form4: {
                numberRooms: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    numeric: helpers.withMessage(
                        "  يجب ان تكون ارقام فقط",
                        numeric
                    ),
                },
                ApartmentType: {
                    required: helpers.withMessage("حقل مطلوب", required),
                },
                BathroomType: {
                    required: helpers.withMessage("حقل مطلوب", required),
                },
                FloorType: {
                    required: helpers.withMessage("حقل مطلوب", required),
                },
                Descriptionkitchen: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    regex: helpers.withMessage(
                        "يجب أن تحتوي على حروف عربية فقط",
                        /[\u0600-\u06FF\s]+/
                    ),
                },
                DescriptionRoom1: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    regex: helpers.withMessage(
                        "حقل مطلوب",
                        /[\u0600-\u06FF\s]+/
                    ),
                },
                DescriptionRoom2: {
                    regex: helpers.withMessage(
                        "حقل مطلوب",
                        /[\u0600-\u06FF\s]+/
                    ),
                },
                DescriptionRoom3: {
                    regex: helpers.withMessage(
                        "يجب أن تحتوي على حروف عربية فقط",
                        /[\u0600-\u06FF\s]+/
                    ),
                },
                DescriptionRoom4: {
                    regex: helpers.withMessage(
                        "يجب أن تحتوي على حروف عربية فقط",
                        /[\u0600-\u06FF\s]+/
                    ),
                },
                DescriptionRoom5: {
                    regex: helpers.withMessage(
                        "يجب أن تحتوي على حروف عربية فقط",
                        /[\u0600-\u06FF\s]+/
                    ),
                },
            },
            form5: {
                medical: {},
                Husband: {},
                clothes: {},
                salaries: {},
                Blankets: {},
                FoodBag: {},
                MonthlyWarranty: {},
                Appliances: {},
                MonthlyWarranty2: {},
            },
        };
    },
    methods: {
        // async validateAndNext() {
        //     let isValid = false;

        //     if (this.currentStep === 1) {
        //         isValid = await this.validateForm1();
        //     } else if (this.currentStep === 2) {
        //         isValid = await this.validateForm2();
        //     } else if (this.currentStep === 3) {
        //         isValid = await this.validateForm3();
        //     }
        //     if (!isValid) {
        //         this.formError = true;
        //         return;
        //     } else {
        //         this.formError = false;
        //         this.currentStep++;
        //     }
        // },
        // prev() {
        //     this.currentStep--;
        //     this.formError = false;
        // },
        async validateForm1() {
            const res = await this.v$.form1.$validate();
            if (res) {
                this.testform1.push(
                    { namea: this.form1.namea },
                    { nameb: this.form1.nameb },
                    { cardNumber: this.form1.cardNumber },
                    { Region: this.form1.Region },
                    { HouseNumber: this.form1.HouseNumber },
                    { FloorNumber: this.form1.FloorNumber },
                    { theAddress: this.form1.theAddress },
                    { SocialStatus: this.form1.SocialStatus },
                    { phoneNumber: this.form1.phoneNumber }
                );
                this.e1++;
                console.log(this.testform1);
                this.v$.$reset();
                this.form1.namea = "";
                this.form1.nameb = "";
                this.form1.cardNumber = "";
                this.form1.Region = "";
                this.form1.HouseNumber = "";
                this.form1.FloorNumber = "";
                this.form1.SocialStatus = "";
                this.form1.phoneNumber = "";
                this.testform1 = [];
            }
        },
        async validateForm2() {
            const res = await this.v$.form2.$validate();
            if (res) {
                this.testform2.push(
                    { Required: this.form2.Required },
                    { Inside: this.form2.Inside },
                    { Impotence: this.form2.Required - this.form2.Impotence },
                    { TreatmentExpenses: this.form2.TreatmentExpenses }
                );
                this.e1++;
                console.log(this.testform2);

                this.v$.$reset();
                this.form2.Required = "";
                this.form2.Inside = "";
                this.form2.Impotence = "";
                this.form2.TreatmentExpenses = "";

                this.testform2 = [];
            }
        },
        async validateForm3() {
            const res = await this.v$.form3.$validate();
            if (res) {
                this.testform3.push(
                    { PatientName: this.form3.PatientName },
                    { theDisease: this.form3.theDisease },
                    { treatment: this.form3.treatment },
                    {
                        Reasontreatment: this.form3.Reasontreatment,
                    }
                );
                this.e1++;
                console.log(this.testform3);
                this.v$.$reset();
                this.form3.PatientName = "";
                this.form3.theDisease = "";
                this.form3.treatment = "";
                this.form3.Reasontreatment = "";

                this.testform3 = [];
            }
        },
        async validateForm4() {
            const res = await this.v$.form4.$validate();
            if (res) {
                this.testform4.push(
                    { numberRooms: this.form4.numberRooms },
                    { ApartmentType: this.form4.ApartmentType },
                    { BathroomType: this.form4.BathroomType },
                    { FloorType: this.form4.FloorType },
                    { Descriptionkitchen: this.form4.Descriptionkitchen },
                    { DescriptionRoom1: this.form4.DescriptionRoom1 }
                );
                this.e1++;
                if (this.showDiv1) {
                    this.testform4.push({
                        DescriptionRoom2: this.form4.DescriptionRoom2,
                    });
                }
                if (this.showDiv2) {
                    this.testform4.push({
                        DescriptionRoom3: this.form4.DescriptionRoom3,
                    });
                }
                if (this.showDiv3) {
                    this.testform4.push({
                        DescriptionRoom4: this.form4.DescriptionRoom4,
                    });
                }
                if (this.showDiv4) {
                    this.testform4.push({
                        DescriptionRoom5: this.form4.DescriptionRoom5,
                    });
                }

                console.log(this.testform4);
                this.v$.$reset();
                this.form4.numberRooms = "";
                this.form4.ApartmentType = "";
                this.form4.BathroomType = "";
            }
            this.form4.FloorType = "";
            this.form4.Descriptionkitchen = "";
            this.form4.DescriptionRoom1 = "";
            this.form4.DescriptionRoom2 = "";
            this.form4.DescriptionRoom3 = "";
            this.form4.DescriptionRoom4 = "";
            this.form4.DescriptionRoom5 = "";

            this.testform4 = [];
        },
        async validateForm5() {
            const res = await this.v$.form5.$validate();
            if (res) {
                this.testform5.push(
                    { medical: this.form5.medical },
                    { Husband: this.form5.Husband },
                    { clothes: this.form5.clothes },
                    { salaries: this.form5.salaries },
                    { Blankets: this.form5.Blankets },
                    { FoodBag: this.form5.FoodBag },
                    { MonthlyWarranty: this.form5.MonthlyWarranty },
                    { Appliances: this.form5.Appliances },
                    { MonthlyWarranty2: this.form5.MonthlyWarranty2 }
                );
                this.e1++;
                console.log(this.testform5);
                this.v$.$reset();
                this.form5.medical = "";
                this.form5.Husband = "";
                this.form5.clothes = "";
                this.form5.salaries = "";
                this.form5.Blankets = "";
                this.form5.FoodBag = "";
                this.form5.MonthlyWarranty = "";
                this.form5.Appliances = "";

                this.testform5 = [];
            }
        },

        reloadPage() {
            window.location.reload();
        },

        toggleDiv1() {
            this.showDiv1 = !this.showDiv1; // تغيير حالة العنصر ما بين الظهور والاختفاء
        },
        toggleDiv2() {
            this.showDiv2 = !this.showDiv2; // تغيير حالة العنصر ما بين الظهور والاختفاء
        },
        toggleDiv3() {
            this.showDiv3 = !this.showDiv3; // تغيير حالة العنصر ما بين الظهور والاختفاء
        },
        toggleDiv4() {
            this.showDiv4 = !this.showDiv4; // تغيير حالة العنصر ما بين الظهور والاختفاء
        },
        calculateDifference() {
            // حساب الفرق بين Required و Inside
            this.form2.Impotence = this.form2.Required - this.form2.Inside;
        },
    },
    watch: {
        "form2.Required": function () {
            this.calculateDifference();
        },
        "form2.Inside": function () {
            this.calculateDifference();
        },
    },
    // mounted() {
    //     console.log(
    //         document.querySelector(".v-stepper-actions").children[1].click()
    //     );
    // },
};
</script>
<style lang="scss" scoped>
.form {
    & > div {
        display: flex;
        gap: 10px;
        justify-content: space-between;
        width: 100%;
    }
}
</style>

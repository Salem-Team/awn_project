<template>
    <v-container style="direction: rtl">
        <v-row>
            <v-col>
                <v-card style="padding: 50px" :theme="this.theme">
                    <h1 class="mx-auto w-100 text-center mb-5 text-primary">
                        الاعدادات
                    </h1>

                    <div
                        class="div w-100"
                        style="display: flex; justify-content: end"
                    >
                        <v-btn
                            class="text-start"
                            icon
                            @click="isEditing = !isEditing"
                        >
                            <v-fade-transition leave-absolute>
                                <v-icon v-if="isEditing">mdi-close</v-icon>

                                <v-icon v-else>mdi-pencil</v-icon>
                            </v-fade-transition>
                        </v-btn>
                        <v-switch
                            label="تغير الثيم"
                            inset
                            @click="toggleTheme"
                            size="x-large"
                            :model-value="true"
                            color="primary"
                            class="mx-4"
                        ></v-switch>
                    </div>
                    <div
                        class="d-flex flex-row"
                        style="
                            font-size: 20px;
                            font-family: 'Cairo', sans-serif;
                            font-variation-settings: 'slnt' 0;
                            font-optical-sizing: auto;
                            font-weight: 400;
                            font-style: normal;
                        "
                    >
                        <v-tabs
                            v-model="tab"
                            color="primary"
                            direction="vertical"
                            class="tabtest1"
                        >
                            <v-tab
                                prepend-icon="mdi-account"
                                value="option-1"
                                style="
                                    font-size: 20px;
                                    font-family: 'Cairo', sans-serif;
                                    font-variation-settings: 'slnt' 0;
                                    font-optical-sizing: auto;
                                    font-weight: 400;
                                    font-style: normal;
                                "
                                class="my-2"
                                ><h1
                                    style="
                                        font-size: 20px;
                                        font-family: 'Cairo', sans-serif;
                                        font-variation-settings: 'slnt' 0;
                                        font-optical-sizing: auto;
                                        font-weight: 400;
                                        font-style: normal;
                                    "
                                >
                                    معلومات العامه
                                </h1></v-tab
                            >
                            <v-tab
                                prepend-icon="mdi-lock"
                                text="معلومات الحمايه"
                                value="option-2"
                                style="font-size: 20px"
                                class="my-2"
                            ></v-tab>
                            <v-tab
                                prepend-icon="mdi-access-point"
                                text=" الجمعيه"
                                v-if="owneer"
                                value="option-3"
                                style="
                                    font-size: 20px;
                                    font-family: 'Cairo', sans-serif;
                                    font-variation-settings: 'slnt' 0;
                                    font-optical-sizing: auto;
                                    font-weight: 400;
                                    font-style: normal;
                                "
                                class="my-2"
                            ></v-tab>
                            <v-tab
                                prepend-icon="mdi-account-box"
                                text=" اضافه مساعدين"
                                v-if="owneer"
                                value="option-4"
                                style="font-size: 20px"
                                class="my-2"
                            ></v-tab
                            ><v-tab
                                prepend-icon="mdi-plus"
                                text="  الاشتراك"
                                v-if="owneer"
                                value="option-5"
                                style="font-size: 20px"
                                class="my-2"
                            ></v-tab>
                        </v-tabs>

                        <v-window
                            v-model="tab"
                            style="width: 100%; margin-right: 40px"
                        >
                            <v-window-item value="option-1" style="width: 100%">
                                <v-sheet class="mx-auto" style="width: 100%">
                                    <form @submit.prevent="validateForm1">
                                        <div class="form">
                                            <div>
                                                <div
                                                    class="mt-2 d-flex flex-column"
                                                    style="width: 100%"
                                                >
                                                    <v-text-field
                                                        v-model="form1.name"
                                                        label="الاسم "
                                                        variant="outlined"
                                                        style="width: 100%"
                                                        placeholder="الاسم "
                                                        :class="[
                                                            `${
                                                                v$.form1.$errors.find(
                                                                    (err) =>
                                                                        err.$property ==
                                                                        'name'
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
                                                                'name'
                                                            "
                                                            >{{
                                                                err.$message
                                                            }}</span
                                                        >
                                                    </span>
                                                </div>
                                                <div
                                                    class="mt-2 d-flex flex-column"
                                                    style="width: 100%"
                                                >
                                                    <v-text-field
                                                        v-model="form1.email"
                                                        label="الايميل"
                                                        variant="outlined"
                                                        style="width: 100%"
                                                        placeholder=" الايميل"
                                                        :class="[
                                                            `${
                                                                v$.form1.$errors.find(
                                                                    (err) =>
                                                                        err.$property ==
                                                                        'email'
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
                                                            v-if="
                                                                err.$property ==
                                                                'email'
                                                            "
                                                            >{{
                                                                err.$message
                                                            }}</span
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
                                                        v-model="
                                                            form1.phoneNumber
                                                        "
                                                        label="التليفون "
                                                        variant="outlined"
                                                        class="mt-2"
                                                        style="width: 100%"
                                                        placeholder=" التليفون"
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
                                                            >{{
                                                                err.$message
                                                            }}</span
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
                                                        v-model="
                                                            form1.cardNumber
                                                        "
                                                        style="width: 100%"
                                                        label="الرقم القومي"
                                                        variant="outlined"
                                                        placeholder="الرقم القومي"
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
                                                            >{{
                                                                err.$message
                                                            }}</span
                                                        >
                                                    </span>
                                                </div>
                                            </div>
                                            <div
                                                class="card w-25 text-start p-4"
                                                style="margin-right: auto"
                                            >
                                                <v-btn
                                                    append-icon="mdi-arrow-left"
                                                    variant="outlined"
                                                    type="submit"
                                                    color="primary"
                                                    style="
                                                        font-size: 35px;
                                                        padding: 34px;
                                                    "
                                                    block
                                                >
                                                    التالي
                                                </v-btn>
                                            </div>
                                        </div>
                                    </form>
                                </v-sheet>
                            </v-window-item>

                            <v-window-item value="option-2" style="width: 100%">
                                <v-sheet class="mx-auto" style="width: 100%">
                                    <form @submit.prevent="validateForm2">
                                        <div class="form">
                                            <div>
                                                <div
                                                    class="mt-2 d-flex flex-column"
                                                    style="width: 100%"
                                                >
                                                    <v-text-field
                                                        :append-icon="
                                                            show1
                                                                ? 'mdi-eye'
                                                                : 'mdi-eye-off'
                                                        "
                                                        :rules="[
                                                            rules.required,
                                                            rules.min,
                                                        ]"
                                                        :type="
                                                            show1
                                                                ? 'text'
                                                                : 'password'
                                                        "
                                                        hint="At least 8 characters"
                                                        v-model="form2.password"
                                                        label="الباسورد"
                                                        name="input-10-1"
                                                        placeholder="ادخل كلمة سر من 8 حروف أرقام وحرف واحد كبير على الأقل"
                                                        counter
                                                        @click:append="
                                                            show1 = !show1
                                                        "
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
                                                                'password'
                                                            "
                                                            >{{
                                                                err.$message
                                                            }}</span
                                                        >
                                                    </span>
                                                    <div
                                                        class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4"
                                                    >
                                                        <v-Checkbox
                                                            label="تذكرني"
                                                        ></v-Checkbox>
                                                        <a
                                                            class="ms-2 mb-1"
                                                            href=""
                                                        >
                                                            هل نسيت كلمة المرور؟
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="mt-2 d-flex flex-column"
                                                    style="width: 100%"
                                                >
                                                    <h2 class="text-disabled">
                                                        07952572059 : id
                                                    </h2>
                                                </div>
                                            </div>
                                            <div
                                                class="card text-start w-25 p-4"
                                                style="margin-right: auto"
                                            >
                                                <v-btn
                                                    append-icon="mdi-arrow-left"
                                                    variant="outlined"
                                                    type="submit"
                                                    color="primary"
                                                    style="
                                                        font-size: 35px;
                                                        padding: 34px;
                                                    "
                                                    block
                                                >
                                                    التالي
                                                </v-btn>
                                            </div>
                                        </div>
                                    </form>
                                </v-sheet>
                            </v-window-item>
                            <v-window-item value="option-3" style="width: 100%">
                                <v-sheet class="mx-auto" style="width: 100%">
                                    <form @submit.prevent="validateForm3">
                                        <div class="form">
                                            <v-row>
                                                <v-col>
                                                    <div>
                                                        <div
                                                            class="mt-2 d-flex flex-column"
                                                            style="width: 100%"
                                                        >
                                                            <h2
                                                                class="mt-0 mb-10 text-primary"
                                                            >
                                                                معلومات الجمعيه
                                                            </h2>
                                                            <v-text-field
                                                                v-model="
                                                                    form3.nameassociation
                                                                "
                                                                label="اسم الجمعيه"
                                                                variant="outlined"
                                                                style="
                                                                    width: 100%;
                                                                "
                                                                placeholder="الاسم "
                                                                :class="[
                                                                    `${
                                                                        v$.form1.$errors.find(
                                                                            (
                                                                                err
                                                                            ) =>
                                                                                err.$property ==
                                                                                'nameassociation'
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
                                                                        'nameassociation'
                                                                    "
                                                                    >{{
                                                                        err.$message
                                                                    }}</span
                                                                >
                                                            </span>
                                                        </div>
                                                        <div
                                                            class="d-flex flex-column"
                                                            style="width: 100%"
                                                        >
                                                            <v-text-field
                                                                v-model="
                                                                    form3.theaddress
                                                                "
                                                                label="العنوان"
                                                                variant="outlined"
                                                                style="
                                                                    width: 100%;
                                                                "
                                                                placeholder=" العنوان"
                                                                :class="[
                                                                    `${
                                                                        v$.form1.$errors.find(
                                                                            (
                                                                                err
                                                                            ) =>
                                                                                err.$property ==
                                                                                'theaddress'
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
                                                                    v-if="
                                                                        err.$property ==
                                                                        'theaddress'
                                                                    "
                                                                    >{{
                                                                        err.$message
                                                                    }}</span
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
                                                                v-model="
                                                                    form3.Associationnumber
                                                                "
                                                                label="رقم الجمعيه "
                                                                variant="outlined"
                                                                style="
                                                                    width: 100%;
                                                                "
                                                                placeholder=" رقم الجمعيه"
                                                                :class="[
                                                                    `${
                                                                        v$.form1.$errors.find(
                                                                            (
                                                                                err
                                                                            ) =>
                                                                                err.$property ==
                                                                                'Associationnumber'
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
                                                                        'Associationnumber'
                                                                    "
                                                                    >{{
                                                                        err.$message
                                                                    }}</span
                                                                >
                                                            </span>
                                                        </div>
                                                    </div>
                                                </v-col>
                                                <v-col>
                                                    <div>
                                                        <div
                                                            class="mt-2 d-flex flex-column"
                                                            style="width: 100%"
                                                        >
                                                            <div
                                                                class="social-boxes p-20 rad-10"
                                                            >
                                                                <h2
                                                                    class="mt-0 mb-10 text-primary"
                                                                >
                                                                    لينكات
                                                                    التواصل
                                                                </h2>

                                                                <div
                                                                    class="d-flex align-center"
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            form3.Facebook
                                                                        "
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        label="Facebook Username"
                                                                        variant="outlined"
                                                                        append-inner-icon="mdi-facebook"
                                                                        placeholder="Facebook Username"
                                                                        :class="[
                                                                            `${
                                                                                v$.form1.$errors.find(
                                                                                    (
                                                                                        err
                                                                                    ) =>
                                                                                        err.$property ==
                                                                                        'Facebook'
                                                                                )
                                                                                    ? 'danger'
                                                                                    : ''
                                                                            }`,
                                                                        ]"
                                                                    ></v-text-field>
                                                                </div>
                                                                <span
                                                                    v-for="err in v$.$errors"
                                                                    :key="
                                                                        err.$uid
                                                                    "
                                                                    style="
                                                                        display: block;
                                                                        width: 100%;
                                                                        color: red;
                                                                    "
                                                                >
                                                                    <span
                                                                        v-if="
                                                                            err.$property ==
                                                                            'Facebook'
                                                                        "
                                                                        >{{
                                                                            err.$message
                                                                        }}</span
                                                                    >
                                                                </span>
                                                                <div
                                                                    class="d-flex align-center"
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            form3.Twitter
                                                                        "
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        label="Twitter Username"
                                                                        variant="outlined"
                                                                        append-inner-icon="mdi-twitter"
                                                                        placeholder="Twitter Username"
                                                                        :class="[
                                                                            `${
                                                                                v$.form1.$errors.find(
                                                                                    (
                                                                                        err
                                                                                    ) =>
                                                                                        err.$property ==
                                                                                        'Twitter'
                                                                                )
                                                                                    ? 'danger'
                                                                                    : ''
                                                                            }`,
                                                                        ]"
                                                                    ></v-text-field>
                                                                </div>
                                                                <span
                                                                    v-for="err in v$.$errors"
                                                                    :key="
                                                                        err.$uid
                                                                    "
                                                                    style="
                                                                        display: block;
                                                                        width: 100%;
                                                                        color: red;
                                                                    "
                                                                >
                                                                    <span
                                                                        v-if="
                                                                            err.$property ==
                                                                            'Twitter'
                                                                        "
                                                                        >{{
                                                                            err.$message
                                                                        }}</span
                                                                    >
                                                                </span>
                                                                <div
                                                                    class="d-flex align-center"
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            form3.whatsapp
                                                                        "
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        label="whatsapp Username"
                                                                        variant="outlined"
                                                                        append-inner-icon="mdi-whatsapp"
                                                                        placeholder="whatsapp Username"
                                                                        :class="[
                                                                            `${
                                                                                v$.form1.$errors.find(
                                                                                    (
                                                                                        err
                                                                                    ) =>
                                                                                        err.$property ==
                                                                                        'whatsapp'
                                                                                )
                                                                                    ? 'danger'
                                                                                    : ''
                                                                            }`,
                                                                        ]"
                                                                    ></v-text-field>
                                                                </div>
                                                                <span
                                                                    v-for="err in v$.$errors"
                                                                    :key="
                                                                        err.$uid
                                                                    "
                                                                    style="
                                                                        display: block;
                                                                        width: 100%;
                                                                        color: red;
                                                                    "
                                                                >
                                                                    <span
                                                                        v-if="
                                                                            err.$property ==
                                                                            'whatsapp'
                                                                        "
                                                                        >{{
                                                                            err.$message
                                                                        }}</span
                                                                    >
                                                                </span>
                                                                <div
                                                                    class="d-flex align-center"
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            form3.Youtube
                                                                        "
                                                                        style="
                                                                            width: 50%;
                                                                        "
                                                                        label="Youtube Username"
                                                                        variant="outlined"
                                                                        append-inner-icon="mdi-youtube"
                                                                        placeholder="Youtube Username"
                                                                        :class="[
                                                                            `${
                                                                                v$.form1.$errors.find(
                                                                                    (
                                                                                        err
                                                                                    ) =>
                                                                                        err.$property ==
                                                                                        'Youtube'
                                                                                )
                                                                                    ? 'danger'
                                                                                    : ''
                                                                            }`,
                                                                        ]"
                                                                    ></v-text-field>
                                                                </div>
                                                                <span
                                                                    v-for="err in v$.$errors"
                                                                    :key="
                                                                        err.$uid
                                                                    "
                                                                    style="
                                                                        display: block;
                                                                        width: 100%;
                                                                        color: red;
                                                                    "
                                                                >
                                                                    <span
                                                                        v-if="
                                                                            err.$property ==
                                                                            'Youtube'
                                                                        "
                                                                        >{{
                                                                            err.$message
                                                                        }}</span
                                                                    >
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </v-col>
                                            </v-row>
                                            <div
                                                class="card w-25 text-start p-4"
                                                style="margin-right: auto"
                                            >
                                                <v-btn
                                                    append-icon="mdi-arrow-left"
                                                    variant="outlined"
                                                    type="submit"
                                                    color="primary"
                                                    style="
                                                        font-size: 35px;
                                                        padding: 34px;
                                                    "
                                                    block
                                                >
                                                    التالي
                                                </v-btn>
                                            </div>
                                        </div>
                                    </form>
                                </v-sheet></v-window-item
                            >
                            <v-window-item value="option-4" style="width: 100%">
                                <form @submit.prevent="validateForm4">
                                    <div style="display: flex">
                                        <v-row class="mb-5">
                                            <v-col
                                                cols="6"
                                                dot-color="red-lighten-2"
                                                icon="mdi-star"
                                            >
                                                <v-card>
                                                    <v-card-title
                                                        class="text-h6 bg-red-lighten-2 text-center"
                                                    >
                                                        اسلام ابوسيف
                                                    </v-card-title>
                                                    <v-card-text
                                                        style="
                                                            margin-right: 0px !important;
                                                        "
                                                        class="bg-white text--primary text-center"
                                                    >
                                                        <div>
                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    label="اضافه الحالات من الفورم"
                                                                    value="اضافه الحالات من الفورم"
                                                                    color="red-lighten-2"
                                                                    v-model="
                                                                        form4
                                                                            .FirstPerson
                                                                            .select1
                                                                    "
                                                                ></v-checkbox>
                                                            </div>

                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    label="اضافه الحالات من الاكسيل"
                                                                    value="اضافه الحالات من الاكسيل"
                                                                    color="red-lighten-2"
                                                                    v-model="
                                                                        form4
                                                                            .FirstPerson
                                                                            .select2
                                                                    "
                                                                ></v-checkbox>
                                                            </div>

                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    v-model="
                                                                        form4
                                                                            .FirstPerson
                                                                            .select3
                                                                    "
                                                                    label="الاطلاع علي تقارير"
                                                                    value="الاطلاع علي تقارير"
                                                                    color="red-lighten-2"
                                                                ></v-checkbox>
                                                            </div>
                                                        </div>
                                                    </v-card-text>
                                                </v-card>
                                            </v-col>
                                            <v-col
                                                cols="6"
                                                dot-color="purple-lighten-2"
                                                icon="mdi-star"
                                            >
                                                <v-card>
                                                    <v-card-title
                                                        class="text-h6 bg-purple-lighten-2 text-center"
                                                    >
                                                        محمد محمود
                                                    </v-card-title>
                                                    <v-card-text
                                                        style="
                                                            margin-right: 0px !important;
                                                        "
                                                        class="bg-white text--primary text-center"
                                                    >
                                                        <div>
                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    v-model="
                                                                        form4
                                                                            .TwoPerson
                                                                            .select1
                                                                    "
                                                                    label="اضافه الحالات من الفورم"
                                                                    value="اضافه الحالات من الفورم"
                                                                    color="purple-lighten-2"
                                                                ></v-checkbox>
                                                            </div>

                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    v-model="
                                                                        form4
                                                                            .TwoPerson
                                                                            .select2
                                                                    "
                                                                    label="اضافه الحالات من الاكسيل"
                                                                    value="اضافه الحالات من الاكسيل"
                                                                    color="purple-lighten-2"
                                                                ></v-checkbox>
                                                            </div>

                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    v-model="
                                                                        form4
                                                                            .TwoPerson
                                                                            .select3
                                                                    "
                                                                    label="الاطلاع علي تقارير"
                                                                    value="الاطلاع علي تقارير"
                                                                    color="purple-lighten-2"
                                                                ></v-checkbox>
                                                            </div>
                                                        </div>
                                                    </v-card-text>
                                                </v-card>
                                            </v-col>
                                            <v-col
                                                cols="6"
                                                dot-color="green-lighten-1"
                                                icon="mdi-star"
                                            >
                                                <v-card>
                                                    <v-card-title
                                                        class="text-h6 bg-green-lighten-1 text-center"
                                                    >
                                                        اسلام ابوسيف
                                                    </v-card-title>
                                                    <v-card-text
                                                        style="
                                                            margin-right: 0px !important;
                                                        "
                                                        class="bg-white text--primary text-center"
                                                    >
                                                        <div>
                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    label="اضافه الحالات من الفورم"
                                                                    value="اضافه الحالات من الفورم"
                                                                    color="green-lighten-1"
                                                                    v-model="
                                                                        form4
                                                                            .ThreePerson
                                                                            .select1
                                                                    "
                                                                ></v-checkbox>
                                                            </div>

                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    v-model="
                                                                        form4
                                                                            .ThreePerson
                                                                            .select2
                                                                    "
                                                                    label="اضافه الحالات من الاكسيل"
                                                                    value="اضافه الحالات من الاكسيل"
                                                                    color="green-lighten-1"
                                                                ></v-checkbox>
                                                            </div>

                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    v-model="
                                                                        form4
                                                                            .ThreePerson
                                                                            .select3
                                                                    "
                                                                    label="الاطلاع علي تقارير"
                                                                    value="الاطلاع علي تقارير"
                                                                    color="green-lighten-1"
                                                                ></v-checkbox>
                                                            </div>
                                                        </div>
                                                    </v-card-text>
                                                </v-card>
                                            </v-col>
                                            <v-col
                                                cols="6"
                                                dot-color="indigo-lighten-2"
                                                icon="mdi-star"
                                            >
                                                <v-card>
                                                    <v-card-title
                                                        class="text-h6 bg-indigo-lighten-2 text-center"
                                                    >
                                                        اسلام ابوسيف
                                                    </v-card-title>
                                                    <v-card-text
                                                        class="bg-white text--primary text-center"
                                                        style="
                                                            margin-right: 0px !important;
                                                        "
                                                    >
                                                        <div>
                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    label="اضافه الحالات من الفورم"
                                                                    value="اضافه الحالات من الفورم"
                                                                    color="indigo-lighten-2"
                                                                    v-model="
                                                                        form4
                                                                            .FourPerson
                                                                            .select1
                                                                    "
                                                                ></v-checkbox>
                                                            </div>

                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    label="اضافه الحالات من الاكسيل"
                                                                    value="اضافه الحالات من الاكسيل"
                                                                    color="indigo-lighten-2"
                                                                    v-model="
                                                                        form4
                                                                            .FourPerson
                                                                            .select2
                                                                    "
                                                                ></v-checkbox>
                                                            </div>

                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    label="الاطلاع علي تقارير"
                                                                    value="الاطلاع علي تقارير"
                                                                    color="indigo-lighten-2"
                                                                    v-model="
                                                                        form4
                                                                            .FourPerson
                                                                            .select3
                                                                    "
                                                                ></v-checkbox>
                                                            </div>
                                                        </div>
                                                    </v-card-text>
                                                </v-card>
                                            </v-col>
                                        </v-row>
                                    </div>

                                    <div
                                        class="card w-25 text-start p-4"
                                        style="margin-right: auto"
                                    >
                                        <v-btn
                                            append-icon="mdi-arrow-left"
                                            variant="outlined"
                                            type="submit"
                                            color="primary"
                                            style="
                                                font-size: 35px;
                                                padding: 34px;
                                            "
                                            block
                                        >
                                            التالي
                                        </v-btn>
                                    </div>
                                </form>
                            </v-window-item>
                            <v-window-item value="option-5" style="width: 100%">
                                <v-sheet class="mx-auto" style="width: 100%">
                                    <form @submit.prevent="validateForm5">
                                        <v-item-group
                                            mandatory
                                            value="5000"
                                            v-model="form5.togglecard"
                                        >
                                            <v-container>
                                                <v-row>
                                                    <v-col cols="12" md="4">
                                                        <v-item
                                                            v-slot="{
                                                                isSelected,
                                                                toggle,
                                                            }"
                                                        >
                                                            <v-card
                                                                :color="
                                                                    isSelected
                                                                        ? 'green-lighten-1'
                                                                        : ''
                                                                "
                                                                class="d-flex align-center"
                                                                height="200"
                                                                dark
                                                                @click="toggle"
                                                            >
                                                                <v-scroll-y-transition>
                                                                    <div
                                                                        class="text-h4 flex-grow-1 text-center"
                                                                    >
                                                                        <h1>
                                                                            5000
                                                                        </h1>
                                                                        <p
                                                                            class="my-2"
                                                                        >
                                                                            حاله
                                                                        </p>
                                                                    </div>
                                                                </v-scroll-y-transition>
                                                            </v-card>
                                                        </v-item> </v-col
                                                    ><v-col cols="12" md="4">
                                                        <v-item
                                                            v-slot="{
                                                                isSelected,
                                                                toggle,
                                                            }"
                                                        >
                                                            <v-card
                                                                :color="
                                                                    isSelected
                                                                        ? 'green-lighten-1'
                                                                        : ''
                                                                "
                                                                class="d-flex align-center"
                                                                height="200"
                                                                dark
                                                                @click="toggle"
                                                            >
                                                                <v-scroll-y-transition>
                                                                    <div
                                                                        class="text-h4 flex-grow-1 text-center"
                                                                    >
                                                                        <h1>
                                                                            1000
                                                                        </h1>
                                                                        <p
                                                                            class="my-2"
                                                                        >
                                                                            حاله
                                                                        </p>
                                                                    </div>
                                                                </v-scroll-y-transition>
                                                            </v-card>
                                                        </v-item> </v-col
                                                    ><v-col cols="12" md="4">
                                                        <v-item
                                                            v-slot="{
                                                                isSelected,
                                                                toggle,
                                                            }"
                                                        >
                                                            <v-card
                                                                :color="
                                                                    isSelected
                                                                        ? 'green-lighten-1'
                                                                        : ''
                                                                "
                                                                class="d-flex align-center"
                                                                height="200"
                                                                dark
                                                                @click="toggle"
                                                            >
                                                                <v-scroll-y-transition>
                                                                    <div
                                                                        class="text-h4 flex-grow-1 text-center"
                                                                    >
                                                                        <h1>
                                                                            3000
                                                                        </h1>
                                                                        <p
                                                                            class="my-2"
                                                                        >
                                                                            حاله
                                                                        </p>
                                                                    </div>
                                                                </v-scroll-y-transition>
                                                            </v-card>
                                                        </v-item>
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                        </v-item-group>
                                        <v-row class="mt-5">
                                            <v-col>
                                                <v-text-field
                                                    v-model="form5.cardnumber"
                                                    style="width: 100%"
                                                    label="رقم البطاقه"
                                                    variant="outlined"
                                                    append-inner-icon="mdi-ticket"
                                                    placeholder="رقم البطاقه"
                                                    :class="[
                                                        `${
                                                            v$.form1.$errors.find(
                                                                (err) =>
                                                                    err.$property ==
                                                                    'cardnumber'
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
                                                            'cardnumber'
                                                        "
                                                        >{{
                                                            err.$message
                                                        }}</span
                                                    >
                                                </span>
                                            </v-col>
                                        </v-row>

                                        <div
                                            class="card w-25 text-start p-4"
                                            style="margin-right: auto"
                                        >
                                            <v-btn
                                                append-icon="mdi-arrow-left"
                                                variant="outlined"
                                                type="submit"
                                                color="primary"
                                                style="
                                                    font-size: 35px;
                                                    padding: 34px;
                                                "
                                                block
                                            >
                                                التالي
                                            </v-btn>
                                        </div>
                                    </form>
                                </v-sheet>
                            </v-window-item>
                        </v-window>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
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
    data: () => ({
        showPassword: false,
        owneer: true,
        owneerform: [],
        isEditing: null,
        tab: "option-1",
        rules: {
            required: (value) => !!value || "Required.",
            min: (v) => v.length >= 8 || "Min 8 characters",
            emailMatch: () => `The email and password you entered don't match`,
        },
        form1: {
            name: "",
            email: "",
            phoneNumber: "",
            cardNumber: "",
        },
        form2: {
            password: "",
        },

        form3: {
            nameassociation: "",
            theaddress: "",
            Associationnumber: "",
            Facebook: "",
            Twitter: "",
            whatsapp: "",
            Youtube: "",
        },
        form4: {
            FirstPerson: {
                select1: "",
                select2: "",
                select3: "",
            },
            TwoPerson: {
                select1: "",
                select2: "",
                select3: "",
            },
            ThreePerson: {
                select1: "",
                select2: "",
                select3: "",
            },
            FourPerson: {
                select1: "",
                select2: "",
                select3: "",
            },
        },
        form5: {
            toggle5000: 500,
            cardnumber: "",
        },
        numberRooms: ["تليفون", "كمبيوتر"],
        select: null,
        checkbox: false,
        theme: "",
        modtheme: true,
        testform1: [],
        testform2: [],
        testform3: [],
        testform4: [],
        testform5: [],
        items: [
            {
                color: "red-lighten-2",
                icon: "mdi-star",
                name: "اسلام ابوسيف",
                select1: "",
                select2: "",
                select3: "",
            },
            {
                color: "purple-lighten-2",
                icon: "mdi-book-variant",
                name: "محمد محمود",
                select1: "",
                select2: "",
                select3: "",
            },
            {
                color: "green-lighten-1",
                icon: "mdi-airballoon",
                name: "خالد ابراهيم",
                select1: "",
                select2: "",
                select3: "",
            },
            {
                color: "indigo-lighten-2",
                icon: "mdi-layers-triple",
                name: "سمير خالد ",
                select1: "",
                select2: "",
                select3: "",
            },
        ],
    }),
    setup() {
        return { v$: useVuelidate() };
    },
    validations() {
        return {
            form1: {
                name: {
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
                email: {
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
                phoneNumber: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    numeric: helpers.withMessage(
                        "  يجب ان تكون ارقام فقط",
                        numeric
                    ),
                },
                cardNumber: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    regex: helpers.withMessage(
                        "يجب أن تحتوي على حروف عربية فقط",
                        /[\u0600-\u06FF\s]+/
                    ),
                },
            },
            form2: {
                password: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    numeric: helpers.withMessage(
                        "  يجب ان تكون ارقام فقط",
                        numeric
                    ),
                },
            },
            form3: {
                nameassociation: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    regex: helpers.withMessage(
                        "اللغه العربيه مدعمه",
                        /[\u0600-\u06FF\s]+/
                    ),
                },
                theaddress: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    regex: helpers.withMessage(
                        "اللغه العربيه مدعمه",
                        /[\u0600-\u06FF\s]+/
                    ),
                },
                Associationnumber: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    numeric: helpers.withMessage("ارقام فقط", numeric),
                },

                Facebook: {
                    required: helpers.withMessage("حقل مطلوب", required),
                },

                Twitter: {
                    required: helpers.withMessage("حقل مطلوب", required),
                },
                whatsapp: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    numeric: helpers.withMessage("ارقام فقط", numeric),
                },
                Youtube: {
                    required: helpers.withMessage("حقل مطلوب", required),
                },
            },
            form4: {
                FirstPerson: {},
                TwoPerson: {},
                ThreePerson: {},
                FourPerson: {},
            },
            form5: {
                togglecard: {},
                cardnumber: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    numeric: helpers.withMessage(
                        "  يجب ان تكون ارقام فقط",
                        numeric
                    ),
                },
                // toggle3000: {},
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
        toggleTheme() {
            if (this.modtheme) {
                this.theme = "dark";
                this.modtheme = false;
            } else {
                this.theme = "Light";
                this.modtheme = true;
            }
        },
        toggleShowPassword() {
            this.showPassword = !this.showPassword;
        },
        async validateForm1() {
            const res = await this.v$.form1.$validate();
            if (res) {
                this.testform1.push(
                    { name: this.form1.name },
                    { email: this.form1.email },
                    { phoneNumber: this.form1.phoneNumber },
                    { cardNumber: this.form1.cardNumber }
                );
                this.owneerform.push({ Generalinformation: this.testform1 });
                const arr = document.querySelectorAll(
                    ".v-slide-group__content .v-btn"
                )[1];
                arr.click();
                this.v$.$reset();
                this.form1.name = "";
                this.form1.email = "";
                this.form1.phoneNumber = "";
                this.form1.cardNumber = "";

                this.testform1 = [];
            }
        },
        async validateForm2() {
            const res = await this.v$.form2.$validate();
            if (res) {
                this.testform2.push({ password: this.form2.password });
                this.owneerform.push({ Protectioninformation: this.testform2 });
                const arr = document.querySelectorAll(
                    ".v-slide-group__content .v-btn"
                )[2];
                arr.click();

                this.v$.$reset();
                this.form2.password = "";

                this.testform2 = [];
            }
        },
        async validateForm3() {
            const res = await this.v$.form3.$validate();
            if (res) {
                this.testform3.push(
                    { nameassociation: this.form3.nameassociation },
                    { theaddress: this.form3.theaddress },
                    { Associationnumber: this.form3.Associationnumber },
                    {
                        Facebook: this.form3.Facebook,
                    },
                    {
                        Twitter: this.form3.Twitter,
                    },
                    {
                        whatsapp: this.form3.whatsapp,
                    },
                    {
                        Youtube: this.form3.Youtube,
                    }
                );
                this.owneerform.push({
                    AssociationInformation: this.testform3,
                });

                const arr = document.querySelectorAll(
                    ".v-slide-group__content .v-btn"
                )[3];
                arr.click();

                this.v$.$reset();
                this.form3.nameassociation = "";
                this.form3.theaddress = "";
                this.form3.Associationnumber = "";
                this.form3.Facebook = "";
                this.form3.Twitter = "";
                this.form3.whatsapp = "";
                this.form3.Youtube = "";

                this.testform3 = [];
            }
        },
        async validateForm4() {
            const res = await this.v$.form4.$validate();
            if (res) {
                this.testform4.push(
                    { FirstPerson: this.form4.FirstPerson },
                    { TwoPerson: this.form4.TwoPerson },
                    { ThreePerson: this.form4.ThreePerson },
                    { FourPerson: this.form4.FourPerson }
                );
                // if (this.showDiv1) {
                //     this.testform4.push({
                //         DescriptionRoom2: this.form4.DescriptionRoom2,
                //     });
                // }
                this.owneerform.push({ Helpers: this.testform4 });
                const arr = document.querySelectorAll(
                    ".v-slide-group__content .v-btn"
                )[4];
                arr.click();

                this.v$.$reset();
                this.form4.FirstPerson = "";
                this.form4.TwoPerson = "";
                this.form4.ThreePerson = "";
                this.form4.FourPerson = "";
            }

            this.testform4 = [];
        },
        async validateForm5() {
            const res = await this.v$.form5.$validate();
            if (res) {
                this.testform5.push(
                    {
                        togglecard:
                            this.form5.togglecard == 0
                                ? 5000
                                : this.form5.togglecard == 1
                                ? 1000
                                : 3000,
                    },
                    { cardnumber: this.form5.cardnumber }
                );
                this.owneerform.push({ Subscription: this.testform5 });

                console.log(this.testform5);
                console.log(this.owneerform);
                this.v$.$reset();
                this.form5.togglecard = "";
                this.form5.cardnumber = "";

                this.testform5 = [];
                this.owneerform = [];
            }
        },
        async validate() {
            const { valid } = await this.$refs.form.validate();

            if (valid) alert("Form is valid");
        },
        reset() {
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        },
        reloadPage() {
            window.location.reload();
        },
    },
    mounted() {
        console.log(this.items[0].select1);
        console.log(this.items[1].select1);
    },
};
</script>

<style>
/* Start Friends Page */
.friends-page {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
@media (max-width: 767px) {
    .friends-page {
        grid-template-columns: minmax(200px, 1fr);
        margin-left: 10px;
        margin-right: 10px;
        gap: 10px;
    }
}
.friends-page .contact {
    position: absolute;
    left: 10px;
    top: 10px;
}
.friends-page .contact i {
    background-color: #eee;
    padding: 10px;
    border-radius: 50%;
    color: #666;
    font-size: 13px;
    cursor: pointer;
    transition: 0.3s;
}
.friends-page .contact i:hover {
    background-color: var(--blue-color);
    color: white;
}
.friends-page .friend .icons {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-top: 15px;
    margin-bottom: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
}
.friends-page .friend .icons i {
    margin-right: 5px;
}
.friends-page .friend .icons .vip {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 40px;
    opacity: 0.2;
}
/* End Friends Page */
</style>
     

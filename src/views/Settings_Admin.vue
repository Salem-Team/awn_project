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
                            ></v-tab>
                        </v-tabs>

                        <v-window
                            v-model="tab"
                            style="width: 100%; margin-right: 40px"
                        >
                            <v-window-item value="option-1" style="width: 100%">
                                <div
                                    class="btn-dufult"
                                    style="
                                        display: flex;
                                        justify-content: end;
                                        margin: 14px;
                                    "
                                >
                                    <v-btn
                                        class="text-end"
                                        icon
                                        @click="isEditing = !isEditing"
                                    >
                                        <v-fade-transition leave-absolute>
                                            <v-icon v-if="isEditing"
                                                >mdi-close</v-icon
                                            >

                                            <v-icon v-else>mdi-pencil</v-icon>
                                        </v-fade-transition>
                                    </v-btn>
                                </div>
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
                                                        :disabled="!isEditing"
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
                                                        :disabled="!isEditing"
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
                                                        :disabled="!isEditing"
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
                                                        :disabled="!isEditing"
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
                                                    :disabled="!isEditing"
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
                                <div
                                    class="btn-dufult"
                                    style="
                                        display: flex;
                                        justify-content: end;
                                        margin: 14px;
                                    "
                                >
                                    <v-btn
                                        class="text-end"
                                        icon
                                        @click="isEditing2 = !isEditing2"
                                    >
                                        <v-fade-transition leave-absolute>
                                            <v-icon v-if="isEditing2"
                                                >mdi-close</v-icon
                                            >

                                            <v-icon v-else>mdi-pencil</v-icon>
                                        </v-fade-transition>
                                    </v-btn>
                                </div>
                                <v-sheet class="mx-auto" style="width: 100%">
                                    <form @submit.prevent="validateForm2">
                                        <div class="form">
                                            <div>
                                                <div
                                                    class="mt-2 d-flex flex-column"
                                                    style="width: 100%"
                                                >
                                                    <v-text-field
                                                        :disabled="!isEditing2"
                                                        :append-inner-icon="
                                                            showPassword
                                                                ? 'mdi-eye'
                                                                : 'mdi-eye-off'
                                                        "
                                                        @click:append-inner="
                                                            toggleShowPassword
                                                        "
                                                        :rules="[
                                                            rules.required,
                                                            rules.min,
                                                        ]"
                                                        :type="inputType"
                                                        hint="At least 8 characters"
                                                        v-model="form2.password"
                                                        label=" الباسورد القديم"
                                                        name="input-10-1"
                                                        placeholder="ادخل كلمة سر من 8 حروف أرقام وحرف واحد كبير على الأقل"
                                                        counter
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
                                                    <v-text-field
                                                        :disabled="!isEditing2"
                                                        :append-inner-icon="
                                                            showPassword2
                                                                ? 'mdi-eye'
                                                                : 'mdi-eye-off'
                                                        "
                                                        @click:append-inner="
                                                            toggleShowPassword2
                                                        "
                                                        :rules="[
                                                            rules.required,
                                                            rules.min,
                                                        ]"
                                                        :type="inputType2"
                                                        hint="At least 8 characters"
                                                        v-model="
                                                            form2.Newpassword
                                                        "
                                                        label="الباسورد الجديد"
                                                        name="input-10-1"
                                                        placeholder="ادخل كلمة سر من 8 حروف أرقام وحرف واحد كبير على الأقل"
                                                        counter
                                                    ></v-text-field>
                                                    <span
                                                        v-if="
                                                            passwordsMatchError
                                                        "
                                                        style="color: red"
                                                        >كلمة المرور الجديدة
                                                        مشابهة لكلمة المرور
                                                        القديمة.</span
                                                    >
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
                                                                'Newpassword'
                                                            "
                                                            >{{
                                                                err.$message
                                                            }}</span
                                                        >
                                                    </span>
                                                    <v-text-field
                                                        :disabled="!isEditing2"
                                                        :append-inner-icon="
                                                            showPassword3
                                                                ? 'mdi-eye'
                                                                : 'mdi-eye-off'
                                                        "
                                                        @click:append-inner="
                                                            toggleShowPassword3
                                                        "
                                                        :rules="[
                                                            rules.required,
                                                            rules.min,
                                                        ]"
                                                        :type="inputType3"
                                                        hint="At least 8 characters"
                                                        v-model="
                                                            form2.Newpassword2
                                                        "
                                                        label="تاكيد الباسورد الجديد"
                                                        name="input-10-1"
                                                        placeholder="ادخل كلمة سر من 8 حروف أرقام وحرف واحد كبير على الأقل"
                                                        counter
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
                                                                'Newpassword2'
                                                            "
                                                            >{{
                                                                err.$message
                                                            }}</span
                                                        >
                                                    </span>
                                                    <span
                                                        v-if="
                                                            passwordsMatchError2
                                                        "
                                                        style="
                                                            color: red;
                                                            margin-bottom: 5px;
                                                        "
                                                        >كلمتا المرور غير
                                                        متطابقتين</span
                                                    >
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
                                                    :disabled="!isEditing2"
                                                >
                                                    التالي
                                                </v-btn>
                                            </div>
                                        </div>
                                    </form>
                                </v-sheet>
                            </v-window-item>
                            <v-window-item value="option-3" style="width: 100%">
                                <div
                                    class="btn-dufult"
                                    style="
                                        display: flex;
                                        justify-content: end;
                                        margin: 14px;
                                    "
                                >
                                    <v-btn
                                        class="text-end"
                                        icon
                                        @click="isEditing3 = !isEditing3"
                                    >
                                        <v-fade-transition leave-absolute>
                                            <v-icon v-if="isEditing3"
                                                >mdi-close</v-icon
                                            >

                                            <v-icon v-else>mdi-pencil</v-icon>
                                        </v-fade-transition>
                                    </v-btn>
                                </div>
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

                                                            <!--phone input-->
                                                            <!-- <v-text-field
                                                                v-model="
                                                                    form3.title
                                                                "
                                                                label="اسم الجمعية"
                                                                placeholder="اسم الجمعيه"
                                                                type="tel"
                                                                variant="outlined"
                                                                :disabled="
                                                                    !isEditing3
                                                                "
                                                            ></v-text-field> -->
                                                            <v-text-field
                                                                v-model="
                                                                    form3.title
                                                                "
                                                                label=" اسم الجمعيه"
                                                                type="tel"
                                                                variant="outlined"
                                                                :disabled="
                                                                    !isEditing3
                                                                "
                                                            ></v-text-field>
                                                            <v-text-field
                                                                v-model="
                                                                    form3.phone
                                                                "
                                                                label="تليفون الجمعية"
                                                                type="tel"
                                                                variant="outlined"
                                                                :disabled="
                                                                    !isEditing3
                                                                "
                                                            ></v-text-field>
                                                            <!--describetion input-->
                                                            <v-textarea
                                                                row-height="25"
                                                                auto-grow
                                                                rows="4"
                                                                :disabled="
                                                                    !isEditing3
                                                                "
                                                                variant="outlined"
                                                                v-model="
                                                                    form3.descripetion
                                                                "
                                                                label="وصف قصير للجمعية"
                                                            ></v-textarea>
                                                            <!--address input-->
                                                            <v-text-field
                                                                variant="outlined"
                                                                label="العنوان"
                                                                :disabled="
                                                                    !isEditing3
                                                                "
                                                                v-model="
                                                                    form3.address
                                                                "
                                                            ></v-text-field>
                                                            <div
                                                                class="d-flex align-center flex-wrap !w-full"
                                                            >
                                                                <!--Fame_number input-->
                                                                <v-text-field
                                                                    variant="outlined"
                                                                    v-model="
                                                                        form3.Fame_number
                                                                    "
                                                                    label="رقم الشهره"
                                                                    :disabled="
                                                                        !isEditing3
                                                                    "
                                                                ></v-text-field>
                                                                <!--year input-->

                                                                <v-select
                                                                    variant="outlined"
                                                                    name="year"
                                                                    style="
                                                                        margin-right: 20px;
                                                                    "
                                                                    v-model="
                                                                        form3.Fame_year
                                                                    "
                                                                    :items="[
                                                                        '2000',
                                                                        '2001',
                                                                        '2002',
                                                                        '2003',
                                                                        '2004',
                                                                        '2005',
                                                                        '2006',
                                                                        '2007',
                                                                        '2008',
                                                                        '2009',
                                                                        '2010',
                                                                        '2011',
                                                                        '2012',
                                                                        '2013',
                                                                        '2014',
                                                                        '2015',
                                                                        '2016',
                                                                        '2017',
                                                                        '2018',
                                                                        '2019',
                                                                        '2020',
                                                                        '2021',
                                                                        '2022',
                                                                        '2023',
                                                                        '2024',
                                                                    ]"
                                                                    :disabled="
                                                                        !isEditing3
                                                                    "
                                                                    label="لسنة"
                                                                ></v-select>
                                                            </div>
                                                            <div style="d-flex">
                                                                <h2
                                                                    class="text-primary"
                                                                >
                                                                    انشطه
                                                                    الجمعيه
                                                                </h2>
                                                                <v-chip-group
                                                                    :disabled="
                                                                        !isEditing3
                                                                    "
                                                                    selected-class="bg-grey-lighten-1"
                                                                    multiple
                                                                    mandatory
                                                                    class="text-right"
                                                                >
                                                                    <v-chip
                                                                        elevation="2"
                                                                        v-for="(
                                                                            activity,
                                                                            index
                                                                        ) in activities"
                                                                        :key="
                                                                            index
                                                                        "
                                                                        class="ma-2"
                                                                        rounded="lg"
                                                                        size="x-large"
                                                                        :value="
                                                                            activity
                                                                        "
                                                                        filter
                                                                        >{{
                                                                            activity
                                                                        }}</v-chip
                                                                    >
                                                                </v-chip-group>
                                                            </div>
                                                        </div>
                                                        <!-- <v-text-field
                                                                :disabled="
                                                                    !isEditing3
                                                                "
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
                                                                :disabled="
                                                                    !isEditing3
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
                                                        </div> -->
                                                    </div>
                                                    <!-- <div>
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
                                                                :disabled="
                                                                    !isEditing3
                                                                "
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
                                                    </div> -->
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
                                                                        :disabled="
                                                                            !isEditing3
                                                                        "
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        label="Facebook Username"
                                                                        variant="outlined"
                                                                        append-inner-icon="mdi-facebook"
                                                                        placeholder="Facebook Username"
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
                                                                        :disabled="
                                                                            !isEditing3
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
                                                                        :disabled="
                                                                            !isEditing3
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
                                                                        :disabled="
                                                                            !isEditing3
                                                                        "
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
                                                    :disabled="!isEditing3"
                                                >
                                                    التالي
                                                </v-btn>
                                            </div>
                                        </div>
                                    </form>
                                </v-sheet></v-window-item
                            >
                            <v-window-item value="option-4" style="width: 100%">
                                <div
                                    class="btn-dufult"
                                    style="
                                        display: flex;
                                        justify-content: end;
                                        margin: 14px;
                                    "
                                >
                                    <v-btn
                                        class="text-end"
                                        icon
                                        @click="isEditing4 = !isEditing4"
                                    >
                                        <v-fade-transition leave-absolute>
                                            <v-icon v-if="isEditing4"
                                                >mdi-close</v-icon
                                            >

                                            <v-icon v-else>mdi-pencil</v-icon>
                                        </v-fade-transition>
                                    </v-btn>
                                    <v-dialog max-width="500">
                                        <template
                                            v-slot:activator="{
                                                props: activatorProps,
                                            }"
                                        >
                                            <v-btn
                                                class="ms-2"
                                                icon
                                                v-bind="activatorProps"
                                                @click="
                                                    isEditing6 = !isEditing6
                                                "
                                            >
                                                <v-fade-transition
                                                    leave-absolute
                                                >
                                                    <v-icon v-if="isEditing6"
                                                        >mdi-plus</v-icon
                                                    >

                                                    <v-icon v-else
                                                        >mdi-plus</v-icon
                                                    >
                                                </v-fade-transition>
                                            </v-btn>
                                        </template>

                                        <template v-slot:default="{ isActive }">
                                            <v-card
                                                class="text-center"
                                                title="اضافه مساعد"
                                            >
                                                <v-sheet
                                                    class="bg-deep-purple pa-12"
                                                    rounded
                                                >
                                                    <v-card
                                                        class="mx-auto px-6 py-8"
                                                        max-width="344"
                                                    >
                                                        <v-form
                                                            v-model="form"
                                                            @submit.prevent="
                                                                onSubmit
                                                            "
                                                        >
                                                            <v-text-field
                                                                v-model="
                                                                    AssistantName
                                                                "
                                                                :readonly="
                                                                    loading
                                                                "
                                                                :rules="[
                                                                    required,
                                                                ]"
                                                                class="mb-2"
                                                                label="الاسم"
                                                                placeholder="الاسم"
                                                                clearable
                                                            ></v-text-field>
                                                            <v-text-field
                                                                v-model="
                                                                    AssistantEmail
                                                                "
                                                                :rules="[
                                                                    required,
                                                                ]"
                                                                type="email"
                                                                placeholder="example@gmail.com"
                                                                label="الايميل"
                                                                class="mt-2"
                                                            ></v-text-field>

                                                            <v-text-field
                                                                v-model="
                                                                    nationalNumberAssistant
                                                                "
                                                                :readonly="
                                                                    loading
                                                                "
                                                                :rules="[
                                                                    required,
                                                                ]"
                                                                label="الرقم القومي"
                                                                placeholder="الرقم القومي"
                                                                clearable
                                                            ></v-text-field>
                                                            <v-text-field
                                                                v-model="
                                                                    AssistantPhoneNumber
                                                                "
                                                                :readonly="
                                                                    loading
                                                                "
                                                                :rules="[
                                                                    required,
                                                                ]"
                                                                label="رقم التليفون"
                                                                placeholder="رقم التليفون"
                                                                clearable
                                                            ></v-text-field>
                                                            <v-text-field
                                                                v-model="
                                                                    this
                                                                        .randomPassword
                                                                "
                                                                label="باسورد"
                                                                placeholder="باسورد"
                                                                clearable
                                                                disabled
                                                            ></v-text-field>

                                                            <br />

                                                            <v-btn
                                                                :disabled="
                                                                    !form
                                                                "
                                                                :loading="
                                                                    loading
                                                                "
                                                                @click="
                                                                    isActive.value = false
                                                                "
                                                                color="deep-purple"
                                                                size="large"
                                                                type="submit"
                                                                variant="elevated"
                                                                block
                                                            >
                                                                اضافه
                                                            </v-btn>
                                                        </v-form>
                                                    </v-card>
                                                </v-sheet>

                                                <v-card-actions>
                                                    <v-spacer></v-spacer>

                                                    <v-btn
                                                        text="اغلاق"
                                                        color="deep-purple"
                                                        @click="
                                                            isActive.value = false
                                                        "
                                                    ></v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </template>
                                    </v-dialog>
                                </div>
                                <form @submit.prevent="validateForm4">
                                    <div style="display: flex">
                                        <v-row class="mb-5">
                                            <v-col
                                                v-for="(
                                                    item, index
                                                ) in storedArray"
                                                :key="index"
                                                cols="6"
                                                dot-color="indigo-lighten-2"
                                                icon="mdi-star"
                                                style="padding: 22px"
                                            >
                                                <v-card>
                                                    <v-card-title
                                                        style="
                                                            justify-content: space-between;
                                                            background: rgb(
                                                                121,
                                                                134,
                                                                203
                                                            );
                                                        "
                                                        class="text-h6 w-100 bg-indigo-lighten-2 d-flex"
                                                    >
                                                        <h4
                                                            style="color: white"
                                                        >
                                                            {{
                                                                item.Assistantname
                                                            }}
                                                        </h4>
                                                        <v-icon
                                                            @click="
                                                                removeItem(
                                                                    index
                                                                )
                                                            "
                                                            >mdi-close-circle</v-icon
                                                        >
                                                    </v-card-title>
                                                    <v-card-text
                                                        class="bg-white text--primary text-center"
                                                        style="
                                                            margin-right: 0px !important;
                                                            padding-top: 17px;
                                                        "
                                                    >
                                                        <div>
                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    :v-model="
                                                                        this.s1
                                                                    "
                                                                    label="اضافه الحالات من الفورم"
                                                                    value="اضافه الحالات من الفورم"
                                                                    color="indigo-lighten-2"
                                                                ></v-checkbox>
                                                            </div>

                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    :v-model="
                                                                        this.s2
                                                                    "
                                                                    label="اضافه الحالات من الاكسيل"
                                                                    value="اضافه الحالات من الاكسيل"
                                                                    color="indigo-lighten-2"
                                                                ></v-checkbox>
                                                            </div>

                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    :v-model="
                                                                        this.s3
                                                                    "
                                                                    label="الاطلاع علي تقارير"
                                                                    value="الاطلاع علي تقارير"
                                                                    color="indigo-lighten-2"
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
                                            :disabled="!isEditing4"
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
                        </v-window>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import useVuelidate from "@vuelidate/core";
// import {
//     required,
//     minLength,
//     maxLength,
//     // alpha,
//     numeric,
//     // regex,
//     // between,
//     helpers,
// } from "@vuelidate/validators";
export default {
    data: () => ({
        s1: null,
        s2: null,
        s3: null,
        randomPassword: "",
        passwordsMatchError: false,
        passwordsMatchError2: false,
        showPassword: false,
        showPassword2: false,
        showPassword3: false,
        owneer: true,
        owneerform: [],
        isEditing: null,
        isEditing2: null,
        isEditing3: null,
        isEditing4: null,
        isEditing5: null,
        isEditing6: true,
        form: false,
        storedArray: [],
        namemosed1: null,
        namemosed2: null,
        namemosed3: null,
        namemosed4: null,
        namemosed5: null,
        namemosed6: null,
        formmosed2: [],
        AssistantName: null,
        AssistantEmail: null,
        nationalNumberAssistant: null,
        AssistantPhoneNumber: null,
        numbercardmosed: null,
        loading: false,
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
            Newpassword: "",
            Newpassword2: "",
        },

        form3: {
            title: "",
            Social_media: [],
            phone: "",
            descripetion: "",
            address: "",
            Fame_number: "",
            Charities_specialty: [],
            Package_type: "     ",
            Fame_year: "",
            Facebook: "",
            Twitter: "",
            whatsapp: "",
            Youtube: "",
        },

        form4: {
            AssistantPowers: {
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
        activities: ["إطعام", "كفالة", "زواج", "علاج"],

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
        Charities: {},
    }),
    setup() {
        return { v$: useVuelidate() };
    },
    validations() {
        return {
            form1: {
                name: {},
                email: {},
                phoneNumber: {},
                cardNumber: {},
            },
            form2: {
                password: {},
                Newpassword: {
                    // required: helpers.withMessage("حقل مطلوب", required),
                    // numeric: helpers.withMessage(
                    //     "  يجب ان تكون ارقام فقط",
                    //     numeric
                    // ),
                },
                Newpassword2: {
                    // required: helpers.withMessage("حقل مطلوب", required),
                    // numeric: helpers.withMessage(
                    //     "  يجب ان تكون ارقام فقط",
                    //     numeric
                    // ),
                },
            },
            form3: {
                title: {},
                phone: {},
                address: {},
                descripetion: {},
                Fame_number: {},
                Charities_specialty: {},
                Fame_year: {},
                Facebook: {
                    // required: helpers.withMessage("حقل مطلوب", required),
                },

                Twitter: {
                    // required: helpers.withMessage("حقل مطلوب", required),
                },
                whatsapp: {
                    // required: helpers.withMessage("حقل مطلوب", required),
                    // numeric: helpers.withMessage("ارقام فقط", numeric),
                },
                Youtube: {
                    // required: helpers.withMessage("حقل مطلوب", required),
                },
            },
            form4: {
                FirstPerson: {},
                TwoPerson: {},
                ThreePerson: {},
                FourPerson: {},
            },
        };
    },
    computed: {
        // Define a computed property to determine the input type based on showPassword
        inputType() {
            return this.showPassword ? "text" : "password";
        },
        inputType2() {
            return this.showPassword2 ? "text" : "password";
        },
        inputType3() {
            return this.showPassword3 ? "text" : "password";
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
        toggleShowPassword2() {
            this.showPassword2 = !this.showPassword2;
        },
        toggleShowPassword3() {
            this.showPassword3 = !this.showPassword3;
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
            if (this.form2.password === this.form2.Newpassword) {
                this.passwordsMatchError = true;
                return;
            } else if (this.form2.Newpassword !== this.form2.Newpassword2) {
                this.passwordsMatchError2 = true;
                return;
            }
            if (res) {
                this.testform2.push(
                    { password: this.form2.password },
                    { Newpassword: this.form2.Newpassword },
                    { Newpassword2: this.form2.Newpassword2 }
                );

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
                    { Charities_title: this.form3.title },
                    { Charities_Social_media: this.form3.Social_media },
                    { Charities_phone: this.form3.phone },
                    { Charities_descripetion: this.form3.descripetion },
                    { Charities_address: this.form3.address },
                    {
                        Charities_Charities_specialty:
                            this.form3.Charities_specialty,
                    },
                    { Charities_Package_type: this.form3.Package_type },
                    { Charities_Fame_year: this.form3.Fame_year },
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
                this.form3.title = "";
                this.form3.Social_media = "";
                this.form3.phone = "";
                this.form3.descripetion = "";
                this.form3.address = "";
                this.form3.Charities_specialty = "";
                this.form3.Package_type = "";
                this.form3.Fame_year = "";
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
                this.testform4.push(this.storedArray);

                this.owneerform.push({ Helpers: this.testform4 });
                console.log(this.testform4);

                this.v$.$reset();
                this.form4.AssistantPowers = "";
            }

            this.testform4 = [];
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

        onSubmit() {
            if (!this.form) return;

            const oldData =
                JSON.parse(localStorage.getItem("formmosed2")) || [];

            // إضافة القيمة الجديدة إلى القيمة القديمة
            oldData.push(
                this.namemosed != ""
                    ? {
                          Assistantname: this.AssistantName,
                          AssistantEmail: this.AssistantEmail,
                          nationalNumberAssistant: this.nationalNumberAssistant,
                          AssistantPhoneNumber: this.AssistantPhoneNumber,
                          randomPassword: this.randomPassword,
                          AssistantPowers: {
                              select1: this.s1,
                              select2: this.s2,
                              select3: this.s3,
                          },
                      }
                    : ""
            );

            // حفظ القيمة المحدثة في localStorage
            localStorage.setItem("formmosed2", JSON.stringify(oldData));
            this.storedArray = oldData;
            this.AssistantName = "";
            this.AssistantEmail = "";
            this.nationalNumberAssistant = "";
            this.AssistantPhoneNumber = "";
            this.randomPassword = this.generateRandomPassword();
            console.log(this.s1);

            // window.location.reload();
        },
        required(v) {
            return !!v || "الحقل مطلوب";
        },
        removeItem(index) {
            this.storedArray.splice(index, 1);
            localStorage.setItem(
                "formmosed2",
                JSON.stringify(this.storedArray)
            );
        },
        generateRandomPassword() {
            // توليد كلمة مرور عشوائية
            const characters =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            let password = "";
            for (let i = 0; i < 8; i++) {
                password += characters.charAt(
                    Math.floor(Math.random() * characters.length)
                );
            }
            // تحديث حالة المكون لعرض الكلمة المرور الجديدة
            this.randomPassword = password;
            return this.randomPassword;
        },
    },
    mounted() {
        const oldData = JSON.parse(localStorage.getItem("formmosed2")) || [];
        localStorage.setItem("formmosed2", JSON.stringify(oldData));
        this.storedArray = oldData;
        this.generateRandomPassword();
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
.v-input__control {
    color: black !important;
}
/* End Friends Page */
</style>

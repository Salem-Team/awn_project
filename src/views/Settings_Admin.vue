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
                    <div class="d-flex flex-row">
                        <v-tabs
                            v-model="tab"
                            color="primary"
                            direction="vertical"
                        >
                            <v-tab
                                prepend-icon="mdi-account"
                                text="معلومات العامه"
                                value="option-1"
                                style="font-size: 40px"
                                class="my-2"
                            ></v-tab>
                            <v-tab
                                prepend-icon="mdi-lock"
                                text="معلومات الحمايه"
                                value="option-2"
                                style="font-size: 40px"
                                class="my-2"
                            ></v-tab>
                            <v-tab
                                prepend-icon="mdi-access-point"
                                text=" الجمعيه"
                                v-if="owneer"
                                value="option-3"
                                style="font-size: 40px"
                                class="my-2"
                            ></v-tab>
                            <v-tab
                                prepend-icon="mdi-account-box"
                                text=" اضافه مساعدين"
                                v-if="owneer"
                                value="option-4"
                                style="font-size: 40px"
                                class="my-2"
                            ></v-tab
                            ><v-tab
                                prepend-icon="mdi-plus"
                                text="  الاشتراك"
                                v-if="owneer"
                                value="option-5"
                                style="font-size: 40px"
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
                                                    append-icon="$vuetify"
                                                    variant="outlined"
                                                    type="submit"
                                                    color="primary"
                                                    style="
                                                        font-size: 35px;
                                                        padding: 34px;
                                                    "
                                                    block
                                                >
                                                    حفظ
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
                                                        v-model="form2.password"
                                                        :append-inner-icon="
                                                            showPassword
                                                                ? 'mdi-eye-off'
                                                                : 'mdi-eye'
                                                        "
                                                        @click:append-inner="
                                                            toggleShowPassword
                                                        "
                                                        color="deep-purple"
                                                        counter="6"
                                                        label="الباسورد"
                                                        placeholder="ادخل كلمة سر من 8 حروف أرقام وحرف واحد كبير على الأقل"
                                                        style="min-height: 96px"
                                                        :type="inputType"
                                                        variant="outlined"
                                                        :class="[
                                                            `${
                                                                v$.form1.$errors.find(
                                                                    (err) =>
                                                                        err.$property ==
                                                                        'password'
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
                                                    <v-select
                                                        v-model="form1.nameb"
                                                        :items="numberRooms"
                                                        class="mt-2"
                                                        style="width: 100%"
                                                        label=" نوع الجهاز "
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
                                                                'nameb'
                                                            "
                                                            >{{
                                                                err.$message
                                                            }}</span
                                                        >
                                                    </span>
                                                </div>
                                            </div>
                                            <div
                                                class="card text-start w-25 p-4"
                                                style="margin-right: auto"
                                            >
                                                <v-btn
                                                    append-icon="$vuetify"
                                                    variant="outlined"
                                                    type="submit"
                                                    color="primary"
                                                    style="
                                                        font-size: 35px;
                                                        padding: 34px;
                                                    "
                                                    block
                                                >
                                                    حفظ
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
                                            <div>
                                                <div
                                                    class="mt-2 d-flex flex-column"
                                                    style="width: 100%"
                                                >
                                                    <v-text-field
                                                        v-model="
                                                            form3.nameassociation
                                                        "
                                                        label="اسم الجمعيه"
                                                        variant="outlined"
                                                        style="width: 100%"
                                                        placeholder="الاسم "
                                                        :class="[
                                                            `${
                                                                v$.form1.$errors.find(
                                                                    (err) =>
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
                                                                'namea'
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
                                                        v-model="
                                                            form3.theaddress
                                                        "
                                                        label="العنوان"
                                                        variant="outlined"
                                                        style="width: 100%"
                                                        placeholder=" الايميل"
                                                        :class="[
                                                            `${
                                                                v$.form1.$errors.find(
                                                                    (err) =>
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
                                                    class="mt-2 d-flex flex-column"
                                                    style="width: 100%"
                                                >
                                                    <v-text-field
                                                        v-model="
                                                            form3.Associationnumber
                                                        "
                                                        label="رقم الجمعيه "
                                                        variant="outlined"
                                                        class="mt-2"
                                                        style="width: 100%"
                                                        placeholder=" رقم الجمعيه"
                                                        :class="[
                                                            `${
                                                                v$.form1.$errors.find(
                                                                    (err) =>
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
                                            <div>
                                                <div
                                                    class="mt-2 d-flex flex-column"
                                                    style="width: 100%"
                                                >
                                                    <v-text-field
                                                        v-model="
                                                            form3.Communicationlinks
                                                        "
                                                        style="width: 100%"
                                                        label=" لينكات التواصل"
                                                        variant="outlined"
                                                        placeholder="لينكات التواصل "
                                                        :class="[
                                                            `${
                                                                v$.form1.$errors.find(
                                                                    (err) =>
                                                                        err.$property ==
                                                                        'Communicationlinks'
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
                                                                'Communicationlinks'
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
                                                    append-icon="$vuetify"
                                                    variant="outlined"
                                                    type="submit"
                                                    color="primary"
                                                    style="
                                                        font-size: 35px;
                                                        padding: 34px;
                                                    "
                                                    block
                                                >
                                                    حفظ
                                                </v-btn>
                                            </div>
                                        </div>
                                    </form>
                                </v-sheet></v-window-item
                            >
                            <v-window-item value="option-4" style="width: 100%">
                                <v-sheet class="mx-auto" style="width: 100%">
                                    <form @submit.prevent="validateForm4">
                                        <div style="display: flex">
                                            <v-row>
                                                <v-col>
                                                    <v-card
                                                        class="my-2 mx-2"
                                                        style="padding: 20px"
                                                    >
                                                        <h2
                                                            class="mx-auto w-100 text-center mb-5 text-primary"
                                                        >
                                                            اسلام ابوسيف
                                                        </h2>
                                                        <div
                                                            style="
                                                                display: flex;
                                                                justify-content: space-between;
                                                            "
                                                        >
                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    label="اضافه الحالات من الفورم"
                                                                    value="اضافه الحالات من الفورم"
                                                                ></v-checkbox>
                                                            </div>

                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    label="اضافه الحالات من الاكسيل"
                                                                    value="اضافه الحالات من الاكسيل"
                                                                ></v-checkbox>
                                                            </div>

                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    label="الاطلاع علي تقارير"
                                                                    value="الاطلاع علي تقارير"
                                                                ></v-checkbox>
                                                            </div></div
                                                    ></v-card>
                                                    <v-card
                                                        class="my-2 mx-2"
                                                        style="padding: 20px"
                                                    >
                                                        <h2
                                                            class="mx-auto w-100 text-center mb-5 text-primary"
                                                        >
                                                            اسلام ابوسيف
                                                        </h2>
                                                        <div
                                                            style="
                                                                display: flex;
                                                                justify-content: space-between;
                                                            "
                                                        >
                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    label="اضافه الحالات من الفورم"
                                                                    value="اضافه الحالات من الفورم"
                                                                ></v-checkbox>
                                                            </div>

                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    label="اضافه الحالات من الاكسيل"
                                                                    value="اضافه الحالات من الاكسيل"
                                                                ></v-checkbox>
                                                            </div>

                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    label="الاطلاع علي تقارير"
                                                                    value="الاطلاع علي تقارير"
                                                                ></v-checkbox>
                                                            </div></div
                                                    ></v-card>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col
                                                    style="margin-top: -23px"
                                                >
                                                    <v-card
                                                        class="my-2 mx-2"
                                                        style="padding: 20px"
                                                    >
                                                        <h2
                                                            class="mx-auto w-100 text-center mb-5 text-primary"
                                                        >
                                                            اسلام ابوسيف
                                                        </h2>
                                                        <div
                                                            style="
                                                                display: flex;
                                                                justify-content: space-between;
                                                            "
                                                        >
                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    label="اضافه الحالات من الفورم"
                                                                    value="اضافه الحالات من الفورم"
                                                                ></v-checkbox>
                                                            </div>

                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    label="اضافه الحالات من الاكسيل"
                                                                    value="اضافه الحالات من الاكسيل"
                                                                ></v-checkbox>
                                                            </div>

                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    label="الاطلاع علي تقارير"
                                                                    value="الاطلاع علي تقارير"
                                                                ></v-checkbox>
                                                            </div></div
                                                    ></v-card>
                                                    <v-card
                                                        class="my-2 mx-2"
                                                        style="padding: 20px"
                                                    >
                                                        <h2
                                                            class="mx-auto w-100 text-center mb-5 text-primary"
                                                        >
                                                            اسلام ابوسيف
                                                        </h2>
                                                        <div
                                                            style="
                                                                display: flex;
                                                                justify-content: space-between;
                                                            "
                                                        >
                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    label="اضافه الحالات من الفورم"
                                                                    value="اضافه الحالات من الفورم"
                                                                ></v-checkbox>
                                                            </div>

                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    label="اضافه الحالات من الاكسيل"
                                                                    value="اضافه الحالات من الاكسيل"
                                                                ></v-checkbox>
                                                            </div>

                                                            <div
                                                                class="card d-flex"
                                                            >
                                                                <v-checkbox
                                                                    label="الاطلاع علي تقارير"
                                                                    value="الاطلاع علي تقارير"
                                                                ></v-checkbox>
                                                            </div></div></v-card
                                                ></v-col>
                                            </v-row>
                                        </div>

                                        <div
                                            class="card w-25 text-start p-4"
                                            style="margin-right: auto"
                                        >
                                            <v-btn
                                                append-icon="$vuetify"
                                                variant="outlined"
                                                type="submit"
                                                color="primary"
                                                style="
                                                    font-size: 35px;
                                                    padding: 34px;
                                                "
                                                block
                                            >
                                                حفظ
                                            </v-btn>
                                        </div>
                                    </form>
                                </v-sheet>
                            </v-window-item>
                            <v-window-item value="option-5" style="width: 100%">
                                <v-sheet class="mx-auto" style="width: 100%">
                                    <form @submit.prevent="validateForm1">
                                        <v-item-group mandatory>
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
                                                                        ? 'primary'
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
                                                                        ? 'primary'
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
                                                                        ? 'primary'
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
                                        <!-- <v-row style="margin-top: 50px">
                                            <v-col>
                                                <v-card
                                                    class="p-5 mx-2 my-2"
                                                    style="cursor: pointer"
                                                >
                                                    <h1
                                                        class="mx-auto w-100 text-center my-5 text-primary"
                                                    >
                                                        5000
                                                    </h1>
                                                    <h3
                                                        class="mx-auto w-100 text-center my-5"
                                                    >
                                                        الحاله
                                                    </h3>
                                                </v-card>
                                            </v-col>
                                            <v-col>
                                                <v-card
                                                    class="p-5 mx-2 my-2"
                                                    style="cursor: pointer"
                                                    @click="togglecard"
                                                >
                                                    <h1
                                                        class="mx-auto w-100 text-center my-5 text-primary"
                                                    >
                                                        5000
                                                    </h1>
                                                    <h3
                                                        class="mx-auto w-100 text-center my-5"
                                                    >
                                                        الحاله
                                                    </h3>
                                                </v-card></v-col
                                            >
                                            <v-col>
                                                <v-card
                                                    class="p-5 mx-2 my-2"
                                                    style="cursor: pointer"
                                                >
                                                    <h1
                                                        class="mx-auto w-100 text-center my-5 text-primary"
                                                    >
                                                        5000
                                                    </h1>
                                                    <h3
                                                        class="mx-auto w-100 text-center my-5"
                                                    >
                                                        الحاله
                                                    </h3>
                                                </v-card></v-col
                                            >
                                        </v-row> -->
                                        <v-row>
                                            <v-col>
                                                <v-text-field
                                                    v-model="form1.HouseNumber"
                                                    style="width: 100%"
                                                    label="البطاقات "
                                                    variant="outlined"
                                                    placeholder=" البطاقات"
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
                                            </v-col>
                                        </v-row>

                                        <div
                                            class="card w-25 text-start p-4"
                                            style="margin-right: auto"
                                        >
                                            <v-btn
                                                append-icon="$vuetify"
                                                variant="outlined"
                                                type="submit"
                                                color="primary"
                                                style="
                                                    font-size: 35px;
                                                    padding: 34px;
                                                "
                                                block
                                            >
                                                حفظ
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
        isEditing: null,
        tab: "option-1",
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
            Communicationlinks: "",
        },
        form4: {
            FirstPerson: {
                id: "",
                name: "",
                select1: "",
                select2: "",
                select3: "",
            },
            TwoPerson: {
                id: "",
                name: "",
                select1: "",
                select2: "",
                select3: "",
            },
            ThreePerson: {
                id: "",
                name: "",
                select1: "",
                select2: "",
                select3: "",
            },
            FourPerson: {
                id: "",
                name: "",
                select1: "",
                select2: "",
                select3: "",
            },
        },
        form5: {
            toggle1: "",
            toggle2: "",
            toggle3: "",
            Cards: "",
        },
        numberRooms: ["تليفون", "كمبيوتر"],
        select: null,
        items: ["Item 1", "Item 2", "Item 3", "Item 4"],
        checkbox: false,
        theme: "",
        modtheme: true,
        testform1: [],
        testform2: [],
        testform3: [],
        testform4: [],
        testform5: [],
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
                        "يجب أن تحتوي على حروف عربية فقط",
                        /[\u0600-\u06FF\s]+/
                    ),
                },
                theaddress: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    regex: helpers.withMessage(
                        "يجب أن تحتوي على حروف عربية فقط",
                        /[\u0600-\u06FF\s]+/
                    ),
                },
                Associationnumber: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    regex: helpers.withMessage(
                        "يجب أن تحتوي على حروف عربية فقط",
                        /[\u0600-\u06FF\s]+/
                    ),
                },
                Communicationlinks: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    regex: helpers.withMessage(
                        "يجب أن تحتوي على حروف عربية فقط",
                        /[\u0600-\u06FF\s]+/
                    ),
                },
            },
            // form4: {
            //     numberRooms: {
            //         required: helpers.withMessage("حقل مطلوب", required),
            //         numeric: helpers.withMessage(
            //             "  يجب ان تكون ارقام فقط",
            //             numeric
            //         ),
            //     },
            //     ApartmentType: {
            //         required: helpers.withMessage("حقل مطلوب", required),
            //     },
            //     BathroomType: {
            //         required: helpers.withMessage("حقل مطلوب", required),
            //     },
            //     FloorType: {
            //         required: helpers.withMessage("حقل مطلوب", required),
            //     },
            //     Descriptionkitchen: {
            //         required: helpers.withMessage("حقل مطلوب", required),
            //         regex: helpers.withMessage(
            //             "يجب أن تحتوي على حروف عربية فقط",
            //             /[\u0600-\u06FF\s]+/
            //         ),
            //     },
            //     DescriptionRoom1: {
            //         required: helpers.withMessage("حقل مطلوب", required),
            //         regex: helpers.withMessage(
            //             "حقل مطلوب",
            //             /[\u0600-\u06FF\s]+/
            //         ),
            //     },
            //     DescriptionRoom2: {
            //         regex: helpers.withMessage(
            //             "حقل مطلوب",
            //             /[\u0600-\u06FF\s]+/
            //         ),
            //     },
            //     DescriptionRoom3: {
            //         regex: helpers.withMessage(
            //             "يجب أن تحتوي على حروف عربية فقط",
            //             /[\u0600-\u06FF\s]+/
            //         ),
            //     },
            //     DescriptionRoom4: {
            //         regex: helpers.withMessage(
            //             "يجب أن تحتوي على حروف عربية فقط",
            //             /[\u0600-\u06FF\s]+/
            //         ),
            //     },
            //     DescriptionRoom5: {
            //         regex: helpers.withMessage(
            //             "يجب أن تحتوي على حروف عربية فقط",
            //             /[\u0600-\u06FF\s]+/
            //         ),
            //     },
            // },
            form5: {
                Cards: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    numeric: helpers.withMessage(
                        "  يجب ان تكون ارقام فقط",
                        numeric
                    ),
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
                console.log(this.testform1);
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
                console.log(this.testform2);

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
                        Communicationlinks: this.form3.Communicationlinks,
                    }
                );
                this.e1++;
                console.log(this.testform3);
                this.v$.$reset();
                this.form3.nameassociation = "";
                this.form3.theaddress = "";
                this.form3.Associationnumber = "";
                this.form3.Communicationlinks = "";

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
    },
};
</script>

<style></style>

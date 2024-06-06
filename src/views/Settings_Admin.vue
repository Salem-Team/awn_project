<template>
    <div class="setting">
        <Side_Bar />
        <v-container style="direction: rtl">
            <v-row>
                <v-col>
                    <v-card style="padding: 50px">
                        <h1 class="mx-auto w-100 text-center mb-5 text-primary">
                            الاعدادات
                        </h1>

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
                                    v-if="User_Type === 'owner'"
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
                                    v-if="User_Type === 'owner'"
                                    value="option-4"
                                    style="font-size: 20px"
                                    class="my-2"
                                ></v-tab>
                            </v-tabs>

                            <v-window
                                v-model="tab"
                                style="width: 100%; margin-right: 40px"
                            >
                                <v-window-item
                                    value="option-1"
                                    style="width: 100%"
                                >
                                    <v-sheet
                                        class="mx-auto"
                                        style="width: 100%"
                                    >
                                        <form @submit.prevent="validateForm1">
                                            <div class="form">
                                                <div>
                                                    <div
                                                        class="mt-2 d-flex flex-column"
                                                        style="width: 100%"
                                                    >
                                                        <v-text-field
                                                            v-model="
                                                                User_Data.name
                                                            "
                                                            label="الاسم "
                                                            variant="outlined"
                                                            style="width: 100%"
                                                            placeholder="الاسم "
                                                            @input="
                                                                updateFormChanges
                                                            "
                                                        ></v-text-field>
                                                    </div>
                                                    <div
                                                        class="mt-2 d-flex flex-column"
                                                        style="width: 100%"
                                                    >
                                                        <v-text-field
                                                            v-model="
                                                                User_Data.email
                                                            "
                                                            @input="
                                                                updateFormChanges
                                                            "
                                                            label="الايميل"
                                                            variant="outlined"
                                                            style="width: 100%"
                                                            placeholder=" الايميل"
                                                        >
                                                        </v-text-field>
                                                    </div>
                                                </div>

                                                <div
                                                    v-for="(
                                                        phone, index
                                                    ) in User_Data.phones"
                                                    :key="phone"
                                                >
                                                    <div
                                                        class="mt-2 d-flex flex-column"
                                                        style="width: 100%"
                                                    >
                                                        <v-text-field
                                                            v-model="
                                                                User_Data
                                                                    .phones[
                                                                    index
                                                                ]
                                                            "
                                                            @input="
                                                                updateFormChanges
                                                            "
                                                            label="التليفون "
                                                            variant="outlined"
                                                            class="mt-2"
                                                            style="width: 100%"
                                                            placeholder=" التليفون"
                                                        ></v-text-field>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div
                                                        class="mt-2 d-flex flex-column"
                                                        style="width: 100%"
                                                    >
                                                        <v-text-field
                                                            v-model="
                                                                User_Data.nationalID
                                                            "
                                                            @input="
                                                                updateFormChanges
                                                            "
                                                            style="width: 100%"
                                                            label="الرقم القومي"
                                                            variant="outlined"
                                                            placeholder="الرقم القومي"
                                                        ></v-text-field>
                                                    </div>
                                                </div>
                                                <div
                                                    class="w-25 text-start p-4"
                                                    style="margin-right: auto"
                                                >
                                                    <v-btn
                                                        variant="outlined"
                                                        type="submit"
                                                        color="primary"
                                                        style="
                                                            font-size: 35px;
                                                            padding: 34px;
                                                        "
                                                        block
                                                        :disabled="
                                                            !isFormChanged
                                                        "
                                                    >
                                                        حفظ
                                                    </v-btn>
                                                </div>
                                            </div>
                                        </form>
                                    </v-sheet>
                                </v-window-item>

                                <v-window-item
                                    value="option-2"
                                    style="width: 100%"
                                >
                                    <v-sheet
                                        class="mx-auto"
                                        style="width: 100%"
                                    >
                                        <form @submit.prevent="validateForm2">
                                            <div class="form">
                                                <div>
                                                    <div
                                                        class="mt-2 d-flex flex-column"
                                                        style="width: 100%"
                                                    >
                                                        <v-text-field
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
                                                            v-model="
                                                                form2.password
                                                            "
                                                            label=" الباسورد القديم"
                                                            name="input-10-1"
                                                            placeholder="ادخل كلمة سر من 8 حروف أرقام وحرف واحد كبير على الأقل"
                                                            counter
                                                        ></v-text-field>
                                                        <v-text-field
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
                                                        <v-text-field
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
                                                    </div>
                                                    <div
                                                        class="mt-2 d-flex flex-column"
                                                        style="width: 100%"
                                                    >
                                                        <h2
                                                            class="mt-0 mb-5 text-primary"
                                                        >
                                                            الاجهزه
                                                        </h2>
                                                        <h2
                                                            class="text-disabled"
                                                        >
                                                            07952572059 : id
                                                        </h2>
                                                    </div>
                                                </div>
                                                <div
                                                    class="text-start w-25 p-4"
                                                    style="margin-right: auto"
                                                >
                                                    <v-btn
                                                        variant="outlined"
                                                        type="submit"
                                                        color="primary"
                                                        style="
                                                            font-size: 35px;
                                                            padding: 34px;
                                                        "
                                                        block
                                                        :disabled="isFormEmpty2"
                                                    >
                                                        حفظ
                                                    </v-btn>
                                                </div>
                                            </div>
                                        </form>
                                    </v-sheet>
                                </v-window-item>
                                <v-window-item
                                    value="option-3"
                                    style="width: 100%"
                                >
                                    <v-sheet
                                        class="mx-auto"
                                        style="width: 100%"
                                    >
                                        <form @submit.prevent="validateForm3">
                                            <div class="form">
                                                <v-row>
                                                    <v-col>
                                                        <div>
                                                            <div
                                                                class="mt-2 d-flex flex-column"
                                                                style="
                                                                    width: 100%;
                                                                "
                                                            >
                                                                <h2
                                                                    class="mt-0 mb-10 text-primary"
                                                                >
                                                                    معلومات
                                                                    الجمعيه
                                                                </h2>
                                                                <v-text-field
                                                                    v-model="
                                                                        User_Charity.title
                                                                    "
                                                                    @input="
                                                                        updateFormChanges3
                                                                    "
                                                                    label=" اسم الجمعيه"
                                                                    placeholder=" اسم الجمعيه"
                                                                    type="tel"
                                                                    variant="outlined"
                                                                ></v-text-field>
                                                                <v-text-field
                                                                    v-model="
                                                                        User_Charity.phone
                                                                    "
                                                                    @input="
                                                                        updateFormChanges3
                                                                    "
                                                                    placeholder="تليفون الجمعية"
                                                                    label="تليفون الجمعية"
                                                                    type="tel"
                                                                    variant="outlined"
                                                                ></v-text-field>
                                                                <!--describetion input-->
                                                                <v-textarea
                                                                    row-height="25"
                                                                    auto-grow
                                                                    rows="4"
                                                                    variant="outlined"
                                                                    v-model="
                                                                        User_Charity.description
                                                                    "
                                                                    @input="
                                                                        updateFormChanges3
                                                                    "
                                                                    placeholder="وصف قصير للجمعية"
                                                                    label="وصف قصير للجمعية"
                                                                ></v-textarea>
                                                                <!--address input-->
                                                                <v-text-field
                                                                    variant="outlined"
                                                                    label="العنوان"
                                                                    placeholder="العنوان"
                                                                    v-model="
                                                                        User_Charity.address
                                                                    "
                                                                    @input="
                                                                        updateFormChanges3
                                                                    "
                                                                ></v-text-field>
                                                                <div
                                                                    class="d-flex align-center flex-wrap !w-full"
                                                                >
                                                                    <!--Fame_number input-->
                                                                    <v-text-field
                                                                        variant="outlined"
                                                                        v-model="
                                                                            User_Charity.Fame_number
                                                                        "
                                                                        @input="
                                                                            updateFormChanges3
                                                                        "
                                                                        placeholder="رقم الشهره"
                                                                        label="رقم الشهره"
                                                                    ></v-text-field>
                                                                    <v-text-field
                                                                        variant="outlined"
                                                                        style="
                                                                            margin-right: 20px;
                                                                        "
                                                                        v-model="
                                                                            User_Charity.Fame_year
                                                                        "
                                                                        @input="
                                                                            updateFormChanges3
                                                                        "
                                                                        placeholder="السنه"
                                                                        label="السنه"
                                                                    ></v-text-field>
                                                                    <!--year input-->
                                                                </div>
                                                                <div
                                                                    style="d-flex"
                                                                >
                                                                    <h2
                                                                        class="text-primary"
                                                                    >
                                                                        انشطه
                                                                        الجمعيه
                                                                    </h2>
                                                                    <v-chip-group
                                                                        selected-class="bg-grey-lighten-1"
                                                                        multiple
                                                                        mandatory
                                                                        class="text-right"
                                                                        v-model="
                                                                            User_Charity.Charities_specialty
                                                                        "
                                                                        @input="
                                                                            updateFormChanges3
                                                                        "
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
                                                        </div>
                                                    </v-col>
                                                    <v-col>
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

                                                                <!-- Facebook Field -->
                                                                <div
                                                                    class="d-flex align-center"
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            facebookRule[0]
                                                                        "
                                                                        @input="
                                                                            updateFormChanges3
                                                                        "
                                                                        v-if="
                                                                            this
                                                                                .facebookRules
                                                                        "
                                                                        :rules="
                                                                            validationRules.facebookRule
                                                                        "
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        label="Facebook Link"
                                                                        variant="outlined"
                                                                        append-inner-icon="mdi-facebook"
                                                                        placeholder="Enter Facebook Link"
                                                                    ></v-text-field>
                                                                </div>

                                                                <!-- Twitter Field -->
                                                                <div
                                                                    class="d-flex align-center"
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            twitterRule[0]
                                                                        "
                                                                        @input="
                                                                            updateFormChanges3
                                                                        "
                                                                        v-if="
                                                                            twitterRules
                                                                        "
                                                                        :rules="
                                                                            validationRules.twitterRule
                                                                        "
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        label="Twitter Link"
                                                                        variant="outlined"
                                                                        append-inner-icon="mdi-twitter"
                                                                        placeholder="Enter Twitter Link"
                                                                    ></v-text-field>
                                                                </div>

                                                                <!-- WhatsApp Field -->
                                                                <div
                                                                    class="d-flex align-center"
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            whatsappRule[0]
                                                                        "
                                                                        @input="
                                                                            updateFormChanges3
                                                                        "
                                                                        :rules="
                                                                            validationRules.whatsappRule
                                                                        "
                                                                        v-if="
                                                                            whatsappRules
                                                                        "
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        label="WhatsApp Link"
                                                                        variant="outlined"
                                                                        append-inner-icon="mdi-whatsapp"
                                                                        placeholder="Enter WhatsApp Link"
                                                                    ></v-text-field>
                                                                </div>

                                                                <!-- YouTube Field -->
                                                                <div
                                                                    class="d-flex align-center"
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            youtubeRule[0]
                                                                        "
                                                                        @input="
                                                                            updateFormChanges3
                                                                        "
                                                                        :rules="
                                                                            validationRules.youtubeRule
                                                                        "
                                                                        v-if="
                                                                            youtubeRules
                                                                        "
                                                                        style="
                                                                            width: 50%;
                                                                        "
                                                                        label="YouTube Link"
                                                                        variant="outlined"
                                                                        append-inner-icon="mdi-youtube"
                                                                        placeholder="Enter YouTube Link"
                                                                    ></v-text-field>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </v-col>
                                                </v-row>
                                                <div
                                                    class="w-25 text-start p-4"
                                                    style="margin-right: auto"
                                                >
                                                    <v-btn
                                                        variant="outlined"
                                                        type="submit"
                                                        color="primary"
                                                        style="
                                                            font-size: 35px;
                                                            padding: 34px;
                                                        "
                                                        block
                                                        :disabled="
                                                            !isFormChanged3
                                                        "
                                                    >
                                                        حفظ
                                                    </v-btn>
                                                </div>
                                            </div>
                                        </form>
                                    </v-sheet></v-window-item
                                >
                                <v-window-item
                                    value="option-4"
                                    style="width: 100%"
                                >
                                    <div
                                        class="btn-dufult"
                                        style="
                                            display: flex;
                                            justify-content: end;
                                            margin: 14px;
                                        "
                                    >
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
                                                        <v-icon
                                                            v-if="isEditing6"
                                                            >mdi-plus</v-icon
                                                        >

                                                        <v-icon v-else
                                                            >mdi-plus</v-icon
                                                        >
                                                    </v-fade-transition>
                                                </v-btn>
                                            </template>

                                            <template
                                                v-slot:default="{ isActive }"
                                            >
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
                                                                        required1,
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
                                                                        required3,
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
                                                                        required4,
                                                                    ]"
                                                                    label="الرقم القومي"
                                                                    placeholder="الرقم القومي"
                                                                    clearable
                                                                ></v-text-field>
                                                                <v-select
                                                                    chips
                                                                    :rules="[
                                                                        required,
                                                                    ]"
                                                                    v-model="
                                                                        AssistantPowerss
                                                                    "
                                                                    label="الصلاحيات"
                                                                    :items="[
                                                                        'اضافه الحالات من الفورم',
                                                                        'اضافه الحالات من الاكسيل',
                                                                        'الاطلاع علي تقارير',
                                                                    ]"
                                                                    variant="solo-filled"
                                                                ></v-select>
                                                                <v-text-field
                                                                    v-model="
                                                                        AssistantPhoneNumber
                                                                    "
                                                                    :readonly="
                                                                        loading
                                                                    "
                                                                    :rules="[
                                                                        required2,
                                                                    ]"
                                                                    label="رقم التليفون"
                                                                    placeholder="رقم التليفون"
                                                                    clearable
                                                                ></v-text-field>
                                                                <v-text-field
                                                                    v-model="
                                                                        randomPassword
                                                                    "
                                                                    label="باسورد"
                                                                    placeholder="باسورد"
                                                                    :append-inner-icon="
                                                                        visible
                                                                            ? 'mdi-eye-off'
                                                                            : 'mdi-eye'
                                                                    "
                                                                    :type="
                                                                        visible
                                                                            ? 'text'
                                                                            : 'password'
                                                                    "
                                                                    density="compact"
                                                                    prepend-inner-icon="mdi-content-copy"
                                                                    variant="outlined"
                                                                    @click:prepend-inner="
                                                                        copyPassword
                                                                    "
                                                                    @click:append-inner="
                                                                        toggleVisibility
                                                                    "
                                                                >
                                                                </v-text-field>

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
                                                    icon="mdi-star"
                                                    style="padding: 22px"
                                                >
                                                    <v-card>
                                                        <v-card-title
                                                            style="
                                                                justify-content: space-between;
                                                            "
                                                            class="text-h6 w-100 bg-indigo-lighten-2 d-flex"
                                                        >
                                                            <h4
                                                                style="
                                                                    color: white;
                                                                "
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
                                                                >mdi-delete</v-icon
                                                            >
                                                        </v-card-title>
                                                        <v-card-text
                                                            class="bg-white text-primary"
                                                            style="
                                                                margin-right: 0px !important;
                                                                padding-top: 17px;
                                                            "
                                                        >
                                                            <div>
                                                                <div
                                                                    style="
                                                                        display: flex;
                                                                        justify-content: center;
                                                                        align-items: center;
                                                                    "
                                                                >
                                                                    <h5
                                                                        class="mb-5 text-primary"
                                                                    >
                                                                        الصلاحيات
                                                                    </h5>
                                                                </div>
                                                                <v-select
                                                                    v-model="
                                                                        item.AssistantPowers
                                                                    "
                                                                    :items="[
                                                                        'اضافه الحالات من الفورم',
                                                                        'اضافه الحالات من الاكسيل',
                                                                        'الاطلاع علي تقارير',
                                                                    ]"
                                                                    color="primary"
                                                                    variant="solo"
                                                                ></v-select>
                                                            </div>
                                                        </v-card-text>
                                                    </v-card>
                                                </v-col>
                                            </v-row>
                                        </div>

                                        <div
                                            class="w-25 text-start p-4"
                                            style="margin-right: auto"
                                        >
                                            <v-btn
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
                                </v-window-item>
                            </v-window>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import Side_Bar from "@/components/Side_Bar.vue";
import { useToast } from "vue-toastification";

import useVuelidate from "@vuelidate/core";
// import {
//     required,
//     minLength,
//     // maxLength,
//     // alpha,
//     numeric,
//     // regex,
//     // between,
//     helpers,
// } from "@vuelidate/validators";
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
import {
    getDocs,
    getFirestore,
    collection,
    getDoc,
    doc,
} from "@firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default {
    data: () => ({
        originalData: {},
        originalCharityData: {},
        isFormChanged: false,
        isFormChanged3: false,
        visible: false,
        User_Charity: "",
        facebookRule: [],
        twitterRule: [],
        whatsappRule: [],
        youtubeRule: [],
        facebookRules: false,
        twitterRules: false,
        whatsappRules: false,
        youtubeRules: false,
        User_Data: "",

        randomPassword: "",
        passwordsMatchError: false,
        passwordsMatchError2: false,
        showPassword: false,
        showPassword2: false,
        showPassword3: false,
        User_Type: null,
        owneerform: [],
        isEditing: null,
        isEditing2: null,
        isEditing3: null,
        isEditing4: null,
        isEditing5: null,
        isEditing6: true,
        form: false,
        Social_media: [],
        storedArray: [],
        namemosed2: null,
        formmosed2: [],
        AssistantName: null,
        AssistantEmail: null,
        nationalNumberAssistant: null,
        AssistantPhoneNumber: null,
        numbercardmosed: null,
        AssistantPowerss: null,
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
        isFormEmpty1: true,
        isFormEmpty2: true,
        isFormEmpty3: true,
        isFormEmpty4: true,
        isFormEmpty5: true,
        form3: {
            title: "",
            Social_media: [],
            phone: "",
            description: "",
            address: "",
            Fame_number: "",
            Charities_specialty: [],
            Package_type: "",
            Fame_year: "",
            Facebook: "",
            Twitter: "",
            whatsapp: "",
            Youtube: "",
        },
        validationRules: {
            facebookRule: [
                (v) =>
                    /^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/i.test(v) ||
                    "Enter a valid Facebook link",
            ],
            twitterRule: [
                (v) =>
                    /^(https?:\/\/)?((w{3}\.)?)twitter.com\/.*/i.test(v) ||
                    "Enter a valid Twitter link",
            ],
            whatsappRule: [
                (v) =>
                    /^(https?:\/\/)?((w{3}\.)?)wa.me\/.*/i.test(v) ||
                    "Enter a valid WhatsApp link",
            ],
            youtubeRule: [
                (v) =>
                    /^(https?:\/\/)?((w{3}\.)?)youtube.com\/.*/i.test(v) ||
                    "Enter a valid YouTube link",
            ],
        },
        form4: {},

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
            },
            {
                color: "purple-lighten-2",
            },
            {
                color: "green-lighten-1",
            },
            {
                color: "indigo-lighten-2",
            },
        ],
        Charities: {},
        Cases: [],
        Cases_length: 0,
    }),
    setup() {
        return { v$: useVuelidate() };
    },
    components: { Side_Bar },
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
                Newpassword: {},
                Newpassword2: {},
            },
            form3: {
                title: {},
                phone: {},
                address: {},
                description: {},
                Fame_number: {},
                Charities_specialty: {},
                Fame_year: {},
                activitiesc_chertes: {},
                Facebook: {},
                Twitter: {},
                whatsapp: {},
                Youtube: {},
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
    watch: {
        storedArray: {
            deep: true, // تتبع التغييرات في القيم داخل الكائن
            handler(newValue) {
                localStorage.setItem("storedArray", JSON.stringify(newValue));
            },
        },
        "User_Data.name": function () {
            this.updateFormEmpty1();
        },
        "User_Data.email": function () {
            this.updateFormEmpty1();
        },
        "User_Data.cardNumber": function () {
            this.updateFormEmpty1();
        },
        "User_Data.phoneNumber": function () {
            this.updateFormEmpty1();
        },

        "form2.password": function () {
            this.updateFormEmpty2();
        },
        "form2.Newpassword": function () {
            this.updateFormEmpty2();
        },
        "form2.Newpassword2": function () {
            this.updateFormEmpty2();
        },

        "User_Charity.title": function () {
            this.updateFormEmpty3();
        },
        "User_Charity.phone": function () {
            this.updateFormEmpty3();
        },
        "User_Charity.address": function () {
            this.updateFormEmpty3();
        },

        "User_Charity.description": function () {
            this.updateFormEmpty3();
        },
        "User_Charity.Fame_number": function () {
            this.updateFormEmpty3();
        },
        "User_Charity.Charities_specialty": function () {
            this.updateFormEmpty3();
        },
        "User_Charity.Fame_year": function () {
            this.updateFormEmpty3();
        },

        "User_Charity.activitiesc_chertes": function () {
            this.updateFormEmpty3();
        },
        "User_Charity.Facebook": function () {
            this.updateFormEmpty3();
        },
        "User_Charity.Twitter": function () {
            this.updateFormEmpty3();
        },
        "User_Charity.whatsapp": function () {
            this.updateFormEmpty3();
        },
        "User_Charity.Youtube": function () {
            this.updateFormEmpty3();
        },
    },
    methods: {
        updateFormChanges() {
            // تحقق من التغييرات في النموذج
            this.isFormChanged = this.hasFormChanged();
        },
        updateFormChanges3() {
            // تحقق من التغييرات في النموذج
            this.isFormChanged3 = this.hasFormChanged3();
        },
        hasFormChanged() {
            // قارن القيم الحالية بالقيم الأصلية
            return (
                this.User_Data.name !== this.originalData.name ||
                this.User_Data.email !== this.originalData.email ||
                JSON.stringify(this.User_Data.phones) !==
                    JSON.stringify(this.originalData.phones) ||
                this.User_Data.nationalID !== this.originalData.nationalID
            );
        },

        hasFormChanged3() {
            // قارن القيم الحالية بالقيم الأصلية
            return (
                this.User_Charity.title !== this.originalCharityData.title ||
                this.User_Charity.phone !== this.originalCharityData.phone ||
                this.User_Charity.description !==
                    this.originalCharityData.description ||
                this.User_Charity.address !==
                    this.originalCharityData.address ||
                this.User_Charity.Fame_number !==
                    this.originalCharityData.Fame_number ||
                this.User_Charity.Fame_year !==
                    this.originalCharityData.Fame_year ||
                JSON.stringify(this.User_Charity.Charities_specialty) !==
                    JSON.stringify(
                        this.originalCharityData.Charities_specialty
                    ) ||
                this.User_Charity.facebookLink !==
                    this.originalCharityData.facebookLink ||
                this.User_Charity.twitterLink !==
                    this.originalCharityData.twitterLink ||
                this.User_Charity.whatsappLink !==
                    this.originalCharityData.whatsappLink ||
                this.User_Charity.youtubeLink !==
                    this.originalCharityData.youtubeLink
            );
        },
        toggleVisibility() {
            this.visible = !this.visible;
        },
        async copyPassword() {
            try {
                await navigator.clipboard.writeText(this.randomPassword);
                const toast = useToast();
                toast.success("تم نسخ الباسورد!");
            } catch (err) {
                console.error("Failed to copy text: ", err);
                const toast = useToast();
                toast.error("فشل في نسخ الباسورد");
            }
        },
        async Check_User() {
            if (localStorage.getItem("id")) {
                const docRef = doc(db, "Users", localStorage.getItem("id"));
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    this.User_Data = docSnap.data();
                    if (docSnap.data().type === "owner") {
                        this.User_Type = "owner";
                        const docRef_Charities = doc(
                            db,
                            "Charities",
                            docSnap.data().charity_ID
                        );
                        const docSnap_Charities = await getDoc(
                            docRef_Charities
                        );
                        console.log("Charitie =>  ", docSnap_Charities.data());
                        console.log(this.User_Type);
                        this.User_Charity = docSnap_Charities.data();
                        this.Social_media =
                            docSnap_Charities.data().Social_media;
                        console.log(this.Social_media);
                        this.Social_media.forEach((s) => {
                            console.log(s);

                            if (
                                s.match(
                                    /^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/i
                                )
                            ) {
                                this.facebookRule.push(s);
                                this.facebookRules = true;
                            } else if (
                                s.match(
                                    /^(https?:\/\/)?((w{3}\.)?)twitter.com\/.*/i
                                )
                            ) {
                                this.twitterRule.push(s);
                                this.twitterRules = true;
                            } else if (
                                s.match(/^(https?:\/\/)?((w{3}\.)?)wa.me\/.*/i)
                            ) {
                                this.whatsappRule.push(s);
                                this.whatsappRules = true;
                            } else if (
                                s.match(
                                    /^(https?:\/\/)?((w{3}\.)?)youtube.com\/.*/i
                                )
                            ) {
                                this.youtubeRule.push(s);
                                this.youtubeRules = true;
                            }
                        });
                    } else if (docSnap.data().type === "admin") {
                        this.User_Type = "admin";
                    } else if (docSnap.data().type === "assistant") {
                        this.User_Type = "assistant";
                    }
                } else {
                    // docSnap.data() will be undefined in this case
                    console.log("No such document!");
                }
            }
        },
        async Get_data() {
            this.loading = true; // Set loading to true before fetching data
            this.Cases = [];
            const querySnapshot = await getDocs(collection(db, "Cases"));
            querySnapshot.forEach((doc) => {
                this.Cases.push(doc.data());
            });
            console.log("this.Cases", this.Cases);

            // Assuming you have a way to determine which case to use for form3
            if (this.Cases.length > 0) {
                // Example: Using the first case to update form3
                const firstCase = this.Cases[0];
                this.User_Charity = {
                    Facebook: firstCase.Facebook || "",
                    Twitter: firstCase.Twitter || "",
                    whatsapp: firstCase.whatsapp || "",
                    Youtube: firstCase.Youtube || "",
                };
            }

            this.Cases_length = this.Cases.length;
            // this.sumFinancialData();
            this.$emit("child-result", this.Cases_length);
            this.loading = false; // Set loading to false after data is loaded
        },
        triggerToggleTheme() {
            this.$emit("execute-toggle-theme"); // إرسال حدث لتنفيذ دالة toggleTheme
        },
        updateFormEmpty1() {
            // تحقق من إذا كان أي حقل فارغ
            this.isFormEmpty1 = !(
                this.User_Data.name ||
                this.User_Data.email ||
                this.User_Data.cardNumber ||
                this.User_Data.phoneNumber
            );
        },
        updateFormEmpty2() {
            // تحقق من إذا كان أي حقل فارغ
            this.isFormEmpty2 = !(
                this.form2.password ||
                this.form2.Newpassword ||
                this.form2.Newpassword2
            );
        },
        updateFormEmpty3() {
            this.isFormEmpty3 = !(
                this.User_Charity.title ||
                this.User_Charity.phone ||
                this.User_Charity.password ||
                this.User_Charity.address ||
                this.User_Charity.description ||
                this.User_Charity.description ||
                this.User_Charity.Fame_number ||
                this.User_Charity.Charities_specialty ||
                this.User_Charity.Fame_year ||
                this.User_Charity.activitiesc_chertes ||
                this.User_Charity.Facebook ||
                this.User_Charity.Twitter ||
                this.User_Charity.whatsapp ||
                this.User_Charity.Youtube
            );
        },
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
                    { Charities_Social_media: this.User_Charity.Social_media },
                    { Charities_Social_media: this.User_Charity.Social_media },
                    { Charities_phone: this.form3.phone },
                    { Charities_descripetion: this.form3.description },
                    { Charities_descripetion: this.form3.description },
                    { Charities_address: this.form3.address },
                    {
                        Charities_Charities_specialty:
                            this.form3.Charities_specialty,
                    },
                    { Charities_Package_type: this.form3.Package_type },
                    { Charities_Fame_year: this.form3.Fame_year },
                    {
                        Facebook: this.User_Charity.Facebook,
                    },
                    {
                        Twitter: this.User_Charity.Twitter,
                    },
                    {
                        whatsapp: this.User_Charity.whatsapp,
                    },
                    {
                        Youtube: this.User_Charity.Youtube,
                    }
                );
                this.owneerform.push({
                    AssociationInformation: this.testform3,
                });

                const arr = document.querySelectorAll(
                    ".v-slide-group__content .v-btn"
                )[3];
                arr.click();
                console.log(this.testform3);

                this.v$.$reset();
                this.form3.title = "";
                this.User_Charity.Social_media = "";
                this.User_Charity.Social_media = "";
                this.form3.phone = "";
                this.form3.description = "";
                this.form3.description = "";
                this.form3.address = "";
                this.form3.Charities_specialty = "";
                this.form3.Package_type = "";
                this.form3.Fame_year = "";
                this.form3.activitiesc_chertes = "";
                this.User_Charity.Facebook = "";
                this.User_Charity.Twitter = "";
                this.User_Charity.whatsapp = "";
                this.User_Charity.Youtube = "";
                this.User_Charity.Facebook = "";
                this.User_Charity.Twitter = "";
                this.User_Charity.whatsapp = "";
                this.User_Charity.Youtube = "";

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
                          AssistantPowers: this.AssistantPowerss,
                          AssistantPhoneNumber: this.AssistantPhoneNumber,
                          randomPassword: this.randomPassword,
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
            this.AssistantPowerss = "";
            this.randomPassword = this.generateRandomPassword();
            console.log(this.s1);
        },
        required(v) {
            return !!v || "الحقل مطلوب";
        },
        required1(v) {
            return (
                (!!v && /^[\u0600-\u06FF\s]+$/.test(v)) ||
                "الحقل مطلوب ويجب أن يحتوي على حروف عربية فقط"
            );
        },
        required2(v) {
            return (
                (!!v && /^\d+$/.test(v)) ||
                "الحقل مطلوب ويجب أن يحتوي على أرقام فقط"
            );
        },
        required3(v) {
            return (
                (!!v && /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v)) ||
                "الحقل مطلوب ويجب أن يحتوي على بريد إلكتروني صالح"
            );
        },
        required4(v) {
            return (
                (!!v && /^\d{14,}$/.test(v)) ||
                "الحقل مطلوب ويجب أن يحتوي على أرقام فقط ولا يقل عن 14 رقمًا"
            );
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
        saveToLocalStorage() {
            // حفظ البيانات في localStorage عند التغيير
            // localStorage.setItem(
            //     "storedData",
            //     JSON.stringify(this.storedArray)
            // );
            console.log("movosv");
        },
    },

    mounted() {
        const oldData = JSON.parse(localStorage.getItem("formmosed2")) || [];
        localStorage.setItem("formmosed2", JSON.stringify(oldData));
        this.storedArray = oldData;
        this.generateRandomPassword();
        this.Get_data();
        this.Check_User();
        const savedData = JSON.parse(localStorage.getItem("storedArray"));
        if (savedData) {
            this.storedArray = savedData;
        }
        // تخزين القيم الأصلية عند تحميل النموذج
        this.originalData = JSON.parse(JSON.stringify(this.User_Data));
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

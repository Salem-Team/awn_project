<template>
    <div style="width: 100%">
        <!-- Old Table -->
        <!-- <v-container style="direction: rtl">
            <v-row>
                <v-col>
                    <v-card>
                        <v-text-field
                            v-model="search"
                            label="أبحث"
                            hide-details
                            style="
                                font-family: 'Inter', sans-serif;
                                font-weight: 500;
                                line-height: 18px;
                                text-align: center;
                            "
                        ></v-text-field>
                        <v-table
                            height="82vh"
                            hover
                            fixed-header
                            style="
                                font-family: 'Inter', sans-serif;
                                font-weight: 500;
                                line-height: 18px;
                                text-align: center;
                            "
                        >
                            <thead>
                                <tr style="font-size: 30px">
                                    <th
                                        v-for="head in headers"
                                        :key="head.title"
                                    >
                                        {{ head.title }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    style="font-size: 25px"
                                    v-for="vege in filteredVegetables"
                                    :key="vege.id"
                                >
                                    <td style="text-align: start">
                                        {{ vege.id }}
                                    </td>
                                    <td style="text-align: start">
                                        {{ vege.name }}
                                    </td>
                                    <td style="text-align: start">
                                        {{ vege.calories }}
                                    </td>
                                    <td style="text-align: start">
                                        {{ vege.fat }}
                                    </td>
                                    <td style="text-align: start">
                                        {{ vege.carbs }}
                                    </td>
                                    <td style="text-align: start">
                                        <v-btn
                                            @click="openStatusInformation(vege)"
                                            style="
                                                font-family: 'Inter', sans-serif;
                                                font-weight: 600;
                                                line-height: 18px;
                                                text-align: center;
                                                font-size: 25px;
                                            "
                                            >عرض التفاصيل</v-btn
                                        >
                                    </td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-card>
                </v-col>
            </v-row>
        </v-container> -->
        <v-container>
            <v-text-field
                v-model="search"
                label="أبحث"
                hide-details
                style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 500;
                    line-height: 18px;
                    text-align: center;
                "
            ></v-text-field>

            <div class="Table" v-if="!isGridView">
                <div class="Title"></div>
                <div class="Heading">
                    <div class="Cell" v-for="head in headers" :key="head.title">
                        <p>{{ head.title }}</p>
                    </div>
                </div>
                <div
                    class="Row"
                    v-for="vege in filteredVegetables"
                    :key="vege.id"
                >
                    <div class="Cell">
                        <p>{{ vege.id }}</p>
                    </div>
                    <div class="Cell">
                        <p>{{ vege.name }}</p>
                    </div>
                    <div class="Cell">
                        <p>{{ vege.calories }}</p>
                    </div>
                    <div class="Cell">
                        <p>{{ vege.fat }}</p>
                    </div>
                    <div class="Cell">
                        <p>{{ vege.carbs }}</p>
                    </div>
                    <div class="Cell">
                        <v-btn color="" @click="openStatusInformation(vege)"
                            >عرض التفاصيل</v-btn
                        >
                    </div>
                </div>
            </div>

            <div class="grid" v-else>
                <div class="grid-item">
                    <div
                        class="grid-Cell"
                        v-for="head in headers"
                        :key="head.title"
                    >
                        <p>{{ head.title }}</p>
                    </div>
                </div>
                <div
                    class="grid-item"
                    v-for="vege in filteredVegetables"
                    :key="vege.id"
                >
                    <div class="grid-cell">
                        <p>{{ vege.id }}</p>
                    </div>
                    <div class="grid-cell">
                        <p>{{ vege.name }}</p>
                    </div>
                    <div class="grid-cell">
                        <p>{{ vege.calories }}</p>
                    </div>
                    <div class="grid-cell">
                        <p>{{ vege.fat }}</p>
                    </div>
                    <div class="grid-cell">
                        <p>{{ vege.carbs }}</p>
                    </div>
                    <div class="grid-cell">
                        <v-btn color="" @click="openStatusInformation(vege)"
                            >عرض التفاصيل</v-btn
                        >
                    </div>
                </div>
            </div>
        </v-container>
    </div>
</template>
<script>
export default {
    inject: ["Emitter"],
    data: () => ({
        isGridView: false,
        search: "",
        newVegetables: [],
        Byasc: [],
        props: ["filteredVegetables"],
        headers: [
            { title: "الترتيب", key: "id" },
            { title: "الاسم", key: "name" },
            { title: "مطلوب", key: "calories" },
            { title: "داخل", key: "fat" },
            { title: "عجز", key: "carbs" },
            { title: "التفاصيل", key: "protein" },
        ],
        vegetables: [
            {
                id: 1,
                name: "اسلام ابوسيف",
                calories: 5,
                fat: 0.4,
                carbs: 1000,
                protein: 2.9,
                iron: "15%",
                personalInformation: [
                    { namea: "اسلام ابوسيف" },
                    { nameb: "اسلام ابوسيف" },
                    { cardNumber: 124445788987 },
                    { Region: "البحيره" },
                    { HouseNumber: 4 },
                    { FloorNumber: 2 },
                    { theAddress: "دوله مصر - محافظه البحيره - مركز ابوحمص" },
                    { SocialStatus: "اعزب" },
                    { phoneNumber: "01201253897" },
                ],
                FinancialInformation: [
                    { Required: 2000 },
                    { Inside: 1000 },
                    { Impotence: 500 },
                    { TreatmentExpenses: 200 },
                ],
                SickCases: [
                    { PatientName: "اسلام علاء" },
                    { theDisease: "السكري" },
                    { treatment: "المستشفي" },
                    { Reasontreatment: "عدم القدره الماليه" },
                ],
                HousingCondition: [
                    { numberRooms: 3 },
                    { ApartmentType: "ايجار" },
                    { BathroomType: "مشترك" },
                    { FloorType: "بلاط" },
                    { Descriptionkitchen: "صغير" },
                    { DescriptionRoom1: "صغر" },
                    { DescriptionRoom2: "صغر" },
                    { DescriptionRoom3: "صفر" },
                ],
                FamilyNeeds: [
                    { medical: "صفر" },
                    { Husband: "صفر" },
                    { clothes: "صفر" },
                    { salaries: "صفر" },
                    { Blankets: "صفر" },
                    { FoodBag: "صفر" },
                    { MonthlyWarranty: "صفر" },
                    { Appliances: "صفر" },
                ],
            },
            {
                id: 2,
                name: "بهاء احمد",
                calories: 3,
                fat: 300,
                carbs: 2000,
                protein: 2.9,
                iron: "15%",
                personalInformation: [
                    { namea: " محمد احمد " },
                    { nameb: "اسلام ابوسيف" },
                    { cardNumber: 124445788987 },
                    { Region: "Albuhayra" },
                    { HouseNumber: 4 },
                    { FloorNumber: 2 },
                    { theAddress: "دوله مصر - محافظه البحيره - مركز ابوحمص" },
                    { SocialStatus: "اعزب" },
                    { phoneNumber: "01201253897" },
                ],
                FinancialInformation: [
                    { Required: 2000 },
                    { Inside: 1000 },
                    { Impotence: 500 },
                    { TreatmentExpenses: 200 },
                ],
                SickCases: [
                    { PatientName: "اسلام علاء" },
                    { theDisease: "السكري" },
                    { treatment: "المستشفي" },
                    { Reasontreatment: "عدم القدره الماليه" },
                ],
                HousingCondition: [
                    { numberRooms: 3 },
                    { ApartmentType: "ايجار" },
                    { BathroomType: "مشترك" },
                    { FloorType: "بلاط" },
                    { Descriptionkitchen: "صغير" },
                    { DescriptionRoom1: "صغر" },
                    { DescriptionRoom2: "صغر" },
                    { DescriptionRoom3: "صفر" },
                ],
                FamilyNeeds: [
                    { medical: "صفر" },
                    { Husband: "صفر" },
                    { clothes: "صفر" },
                    { salaries: "صفر" },
                    { Blankets: "صفر" },
                    { FoodBag: "صفر" },
                    { MonthlyWarranty: "صفر" },
                    { Appliances: "صفر" },
                ],
            },
            {
                id: 3,
                name: "جمال علي",
                calories: 23,
                fat: 400,
                carbs: 3000,
                protein: 2.9,
                iron: "15%",
                personalInformation: [
                    { namea: "خالد علي" },
                    { nameb: "اسلام ابوسيف" },
                    { cardNumber: 124445788987 },
                    { Region: "Albuhayra" },
                    { HouseNumber: 4 },
                    { FloorNumber: 2 },
                    { theAddress: "دوله مصر - محافظه البحيره - مركز ابوحمص" },
                    { SocialStatus: "اعزب" },
                    { phoneNumber: "01201253897" },
                ],
                FinancialInformation: [
                    { Required: 2000 },
                    { Inside: 1000 },
                    { Impotence: 500 },
                    { TreatmentExpenses: 200 },
                ],
                SickCases: [
                    { PatientName: "خالد علي" },
                    { theDisease: "السكري" },
                    { treatment: "المستشفي" },
                    { Reasontreatment: "عدم القدره الماليه" },
                ],
                HousingCondition: [
                    { numberRooms: 3 },
                    { ApartmentType: "ايجار" },
                    { BathroomType: "مشترك" },
                    { FloorType: "بلاط" },
                    { Descriptionkitchen: "صغير" },
                    { DescriptionRoom1: "صغر" },
                    { DescriptionRoom2: "صغر" },
                    { DescriptionRoom3: "صفر" },
                ],
                FamilyNeeds: [
                    { medical: "صفر" },
                    { Husband: "صفر" },
                    { clothes: "صفر" },
                    { salaries: "صفر" },
                    { Blankets: "صفر" },
                    { FoodBag: "صفر" },
                    { MonthlyWarranty: "صفر" },
                    { Appliances: "صفر" },
                ],
            },
            {
                id: 4,
                name: "على ابراهيم",
                calories: 32,
                fat: 500,
                carbs: 4000,
                protein: 2.9,
                iron: "15%",
                personalInformation: [
                    { namea: "محمد ابراهيم " },
                    { nameb: "اسلام ابوسيف" },
                    { cardNumber: 124445788987 },
                    { Region: "Albuhayra" },
                    { HouseNumber: 4 },
                    { FloorNumber: 2 },
                    { theAddress: "دوله مصر - محافظه البحيره - مركز ابوحمص" },
                    { SocialStatus: "اعزب" },
                    { phoneNumber: "01201253897" },
                ],
                FinancialInformation: [
                    { Required: 2000 },
                    { Inside: 1000 },
                    { Impotence: 500 },
                    { TreatmentExpenses: 200 },
                ],
                SickCases: [
                    { PatientName: "اسلام علاء" },
                    { theDisease: "السكري" },
                    { treatment: "المستشفي" },
                    { Reasontreatment: "عدم القدره الماليه" },
                ],
                HousingCondition: [
                    { numberRooms: 3 },
                    { ApartmentType: "ايجار" },
                    { BathroomType: "مشترك" },
                    { FloorType: "بلاط" },
                    { Descriptionkitchen: "صغير" },
                    { DescriptionRoom1: "صغر" },
                    { DescriptionRoom2: "صغر" },
                    { DescriptionRoom3: "صفر" },
                ],
                FamilyNeeds: [
                    { medical: "صفر" },
                    { Husband: "صفر" },
                    { clothes: "صفر" },
                    { salaries: "صفر" },
                    { Blankets: "صفر" },
                    { FoodBag: "صفر" },
                    { MonthlyWarranty: "صفر" },
                    { Appliances: "صفر" },
                ],
            },
            {
                id: 5,
                name: "كريم محمود",
                calories: 50,
                fat: 600,
                carbs: 5000,
                protein: 2.9,
                iron: "15%",
                personalInformation: [
                    { namea: "خالد محمود" },
                    { nameb: "اسلام ابوسيف" },
                    { cardNumber: 124445788987 },
                    { Region: "Albuhayra" },
                    { HouseNumber: 4 },
                    { FloorNumber: 2 },
                    { theAddress: "دوله مصر - محافظه البحيره - مركز ابوحمص" },
                    { SocialStatus: "اعزب" },
                    { phoneNumber: "01201253897" },
                ],
                FinancialInformation: [
                    { Required: 2000 },
                    { Inside: 1000 },
                    { Impotence: 500 },
                    { TreatmentExpenses: 200 },
                ],
                SickCases: [
                    { PatientName: "اسلام علاء" },
                    { theDisease: "السكري" },
                    { treatment: "المستشفي" },
                    { Reasontreatment: "عدم القدره الماليه" },
                ],
                HousingCondition: [
                    { numberRooms: 3 },
                    { ApartmentType: "ايجار" },
                    { BathroomType: "مشترك" },
                    { FloorType: "بلاط" },
                    { Descriptionkitchen: "صغير" },
                    { DescriptionRoom1: "صغر" },
                    { DescriptionRoom2: "صغر" },
                    { DescriptionRoom3: "صفر" },
                ],
                FamilyNeeds: [
                    { medical: "صفر" },
                    { Husband: "صفر" },
                    { clothes: "صفر" },
                    { salaries: "صفر" },
                    { Blankets: "1" },
                    { FoodBag: "صفر" },
                    { MonthlyWarranty: "صفر" },
                    { Appliances: "صفر" },
                ],
            },
            {
                id: 6,
                name: "سعيد محمود",
                calories: 20,
                fat: 700,
                carbs: 6000,
                protein: 2.9,
                iron: "15%",
                personalInformation: [
                    { namea: " محمد محمود" },
                    { nameb: "اسلام ابوسيف" },
                    { cardNumber: 124445788987 },
                    { Region: "Albuhayra" },
                    { HouseNumber: 4 },
                    { FloorNumber: 2 },
                    { theAddress: "دوله مصر - محافظه البحيره - مركز ابوحمص" },
                    { SocialStatus: "اعزب" },
                    { phoneNumber: "01201253897" },
                ],
                FinancialInformation: [
                    { Required: 2000 },
                    { Inside: 1000 },
                    { Impotence: 500 },
                    { TreatmentExpenses: 200 },
                ],
                SickCases: [
                    { PatientName: "اسلام علاء" },
                    { theDisease: "السكري" },
                    { treatment: "المستشفي" },
                    { Reasontreatment: "عدم القدره الماليه" },
                ],
                HousingCondition: [
                    { numberRooms: 3 },
                    { ApartmentType: "ايجار" },
                    { BathroomType: "مشترك" },
                    { FloorType: "بلاط" },
                    { Descriptionkitchen: "صغير" },
                    { DescriptionRoom1: "صغر" },
                    { DescriptionRoom2: "صغر" },
                    { DescriptionRoom3: "صفر" },
                ],
                FamilyNeeds: [
                    { medical: "صفر" },
                    { Husband: "صفر" },
                    { clothes: "صفر" },
                    { salaries: "صفر" },
                    { Blankets: "1" },
                    { FoodBag: "صفر" },
                    { MonthlyWarranty: "صفر" },
                    { Appliances: "صفر" },
                ],
            },
            {
                id: 7,
                name: "عبد الرحمن شاهين",
                calories: 8,
                fat: 700,
                carbs: 7000,
                protein: 2.9,
                iron: "15%",
                personalInformation: [
                    { namea: "محمد شاهين" },
                    { nameb: "اسلام ابوسيف" },
                    { cardNumber: 124445788987 },
                    { Region: "Albuhayra" },
                    { HouseNumber: 4 },
                    { FloorNumber: 2 },
                    { theAddress: "دوله مصر - محافظه البحيره - مركز ابوحمص" },
                    { SocialStatus: "اعزب" },
                    { phoneNumber: "01201253897" },
                ],
                FinancialInformation: [
                    { Required: 2000 },
                    { Inside: 1000 },
                    { Impotence: 500 },
                    { TreatmentExpenses: 200 },
                ],
                SickCases: [
                    { PatientName: "اسلام علاء" },
                    { theDisease: "السكري" },
                    { treatment: "المستشفي" },
                    { Reasontreatment: "عدم القدره الماليه" },
                ],
                HousingCondition: [
                    { numberRooms: 3 },
                    { ApartmentType: "ايجار" },
                    { BathroomType: "مشترك" },
                    { FloorType: "بلاط" },
                    { Descriptionkitchen: "صغير" },
                    { DescriptionRoom1: "صغر" },
                    { DescriptionRoom2: "صغر" },
                    { DescriptionRoom3: "صفر" },
                ],
                FamilyNeeds: [
                    { medical: "صفر" },
                    { Husband: "صفر" },
                    { clothes: "صفر" },
                    { salaries: "صفر" },
                    { Blankets: "1" },
                    { FoodBag: "صفر" },
                    { MonthlyWarranty: "صفر" },
                    { Appliances: "صفر" },
                ],
            },
            {
                id: 8,
                name: "يزيد سمير",
                calories: 40,
                fat: 800,
                carbs: 8000,
                protein: 2.9,
                iron: "15%",
                personalInformation: [
                    { namea: "محمد سمير" },
                    { nameb: "اسلام ابوسيف" },
                    { cardNumber: 124445788987 },
                    { Region: "Albuhayra" },
                    { HouseNumber: 4 },
                    { FloorNumber: 2 },
                    { theAddress: "دوله مصر - محافظه البحيره - مركز ابوحمص" },
                    { SocialStatus: "اعزب" },
                    { phoneNumber: "01201253897" },
                ],
                FinancialInformation: [
                    { Required: 2000 },
                    { Inside: 1000 },
                    { Impotence: 500 },
                    { TreatmentExpenses: 200 },
                ],
                SickCases: [
                    { PatientName: "اسلام علاء" },
                    { theDisease: "السكري" },
                    { treatment: "المستشفي" },
                    { Reasontreatment: "عدم القدره الماليه" },
                ],
                HousingCondition: [
                    { numberRooms: 3 },
                    { ApartmentType: "ايجار" },
                    { BathroomType: "مشترك" },
                    { FloorType: "بلاط" },
                    { Descriptionkitchen: "صغير" },
                    { DescriptionRoom1: "صغر" },
                    { DescriptionRoom2: "صغر" },
                    { DescriptionRoom3: "صفر" },
                ],
                FamilyNeeds: [
                    { medical: "صفر" },
                    { Husband: "صفر" },
                    { clothes: "صفر" },
                    { salaries: "صفر" },
                    { Blankets: "1" },
                    { FoodBag: "صفر" },
                    { MonthlyWarranty: "صفر" },
                    { Appliances: "صفر" },
                ],
            },
            {
                id: 9,
                name: "انس علي",
                calories: 30,
                fat: 900,
                carbs: 2000,
                protein: 2.9,
                iron: "15%",
                personalInformation: [
                    { namea: "محمد علي " },
                    { nameb: "اسلام ابوسيف" },
                    { cardNumber: 124445788987 },
                    { Region: "Albuhayra" },
                    { HouseNumber: 4 },
                    { FloorNumber: 2 },
                    { theAddress: "دوله مصر - محافظه البحيره - مركز ابوحمص" },
                    { SocialStatus: "اعزب" },
                    { phoneNumber: "01201253897" },
                ],
                FinancialInformation: [
                    { Required: 2000 },
                    { Inside: 1000 },
                    { Impotence: 500 },
                    { TreatmentExpenses: 200 },
                ],
                SickCases: [
                    { PatientName: "اسلام علاء" },
                    { theDisease: "السكري" },
                    { treatment: "المستشفي" },
                    { Reasontreatment: "عدم القدره الماليه" },
                ],
                HousingCondition: [
                    { numberRooms: 3 },
                    { ApartmentType: "ايجار" },
                    { BathroomType: "مشترك" },
                    { FloorType: "بلاط" },
                    { Descriptionkitchen: "صغير" },
                    { DescriptionRoom1: "صغر" },
                    { DescriptionRoom2: "صغر" },
                    { DescriptionRoom3: "صفر" },
                ],
                FamilyNeeds: [
                    { medical: "صفر" },
                    { Husband: "صفر" },
                    { clothes: "صفر" },
                    { salaries: "صفر" },
                    { Blankets: "1" },
                    { FoodBag: "صفر" },
                    { MonthlyWarranty: "صفر" },
                    { Appliances: "66" },
                ],
            },

            {
                id: 10,
                name: "محمد سمير",
                calories: 28,
                fat: 500,
                carbs: 900,
                protein: 2.9,
                iron: "15%",
                personalInformation: [
                    { namea: "محمد سمير" },
                    { nameb: "اسلام ابوسيف" },
                    { cardNumber: 124445788987 },
                    { Region: "Albuhayra" },
                    { HouseNumber: 4 },
                    { FloorNumber: 2 },
                    { theAddress: "دوله مصر - محافظه البحيره - مركز ابوحمص" },
                    { SocialStatus: "اعزب" },
                    { phoneNumber: "01201253897" },
                ],
                FinancialInformation: [
                    { Required: 2000 },
                    { Inside: 1000 },
                    { Impotence: 500 },
                    { TreatmentExpenses: 200 },
                ],
                SickCases: [
                    { PatientName: "اسلام علاء" },
                    { theDisease: "السكري" },
                    { treatment: "المستشفي" },
                    { Reasontreatment: "عدم القدره الماليه" },
                ],
                HousingCondition: [
                    { numberRooms: 3 },
                    { ApartmentType: "ايجار" },
                    { BathroomType: "مشترك" },
                    { FloorType: "بلاط" },
                    { Descriptionkitchen: "صغير" },
                    { DescriptionRoom1: "صغر" },
                    { DescriptionRoom2: "صغر" },
                    { DescriptionRoom3: "صفر" },
                ],
                FamilyNeeds: [
                    { medical: "صفر" },
                    { Husband: "صفر" },
                    { clothes: "صفر" },
                    { salaries: "صفر" },
                    { Blankets: "1" },
                    { FoodBag: "صفر" },
                    { MonthlyWarranty: "صفر" },
                    { Appliances: "صفر" },
                ],
            },
            {
                id: 11,
                name: "   اكرم علي",
                calories: 33,
                fat: 300,
                carbs: 300,
                protein: 2.9,
                iron: "15%",
                personalInformation: [
                    { namea: "محمد علي " },
                    { nameb: "اسلام ابوسيف" },
                    { cardNumber: 124445788987 },
                    { Region: "Albuhayra" },
                    { HouseNumber: 4 },
                    { FloorNumber: 2 },
                    { theAddress: "دوله مصر - محافظه البحيره - مركز ابوحمص" },
                    { SocialStatus: "اعزب" },
                    { phoneNumber: "01201253897" },
                ],
                FinancialInformation: [
                    { Required: 2000 },
                    { Inside: 1000 },
                    { Impotence: 500 },
                    { TreatmentExpenses: 200 },
                ],
                SickCases: [
                    { PatientName: "اسلام علاء" },
                    { theDisease: "السكري" },
                    { treatment: "المستشفي" },
                    { Reasontreatment: "عدم القدره الماليه" },
                ],
                HousingCondition: [
                    { numberRooms: 3 },
                    { ApartmentType: "ايجار" },
                    { BathroomType: "مشترك" },
                    { FloorType: "بلاط" },
                    { Descriptionkitchen: "صغير" },
                    { DescriptionRoom1: "صغر" },
                    { DescriptionRoom2: "صغر" },
                    { DescriptionRoom3: "صفر" },
                ],
                FamilyNeeds: [
                    { medical: "صفر" },
                    { Husband: "صفر" },
                    { clothes: "صفر" },
                    { salaries: "صفر" },
                    { Blankets: "1" },
                    { FoodBag: "صفر" },
                    { MonthlyWarranty: "صفر" },
                    { Appliances: "66" },
                ],
            },
        ],
    }),
    // Search Fun
    computed: {
        filteredVegetables() {
            return this.vegetables.filter((vege) => {
                return vege.name
                    .toLowerCase()
                    .includes(this.search.toLowerCase());
            });
        },
    },
    methods: {
        openStatusInformation(product) {
            this.Emitter.emit("openStatusInformation", product);
        },
        filterData() {
            const filteredData = this.vegetables.filter();

            this.vegetables = filteredData;
        },
    },
    mounted() {
        // Firts Function ordered By >>>> Swap Grid & Table
        this.Emitter.on("swapView", () => {
            this.isGridView = !this.isGridView;
        });
        // Firts Function ordered By >>>> Swap BT Latest && Oldest
        this.Emitter.on("FunLatest", () => {
            this.vegetables.sort((a, b) => (b[name] > a[name] ? 1 : -1));
        });
        // / Seconed  Function ordered By >>>> A To Z
        this.Emitter.on("FunATZ", () => {
            this.vegetables.sort((a, b) => (a.name > b.name ? 1 : -1));
        });
        // / Third  Function ordered By >>>> Z To A
        this.Emitter.on("FunZTA", () => {
            this.vegetables.sort((a, b) => (b.name > a.name ? 1 : -1));
        });
        // / Fourth  Function ordered By Cards >>>> S T L
        this.Emitter.on("CardsAscending", () => {
            this.newVegetables = this.vegetables.sort(
                (a, b) => a.carbs - b.carbs
            );
        });
        // / Fivth  Function ordered By Cards >>>> L T S
        this.Emitter.on("CardsDesaending", () => {
            this.newVegetables = this.vegetables.sort(
                (a, b) => b.carbs - a.carbs
            );
        });
        // / Sixth  Function ordered Fat >>>> S T L
        this.Emitter.on("FatAscending", () => {
            this.newVegetables = this.vegetables.sort((a, b) => a.fat - b.fat);
        });
        // / seventh  Function ordered Fat >>>> L T Z
        this.Emitter.on("fatDesaending", () => {
            this.newVegetables = this.vegetables.sort((a, b) => b.fat - a.fat);
        });
        // / Eight  Function ordered calories >>>>S T L
        this.Emitter.on("caloriesAscending", () => {
            this.newVegetables = this.vegetables.sort((a, b) => a.fat - b.fat);
        });
        // / nine  Function ordered calories >>>>S T L
        this.Emitter.on("caloriesDesaending", () => {
            this.newVegetables = this.vegetables.sort(
                (a, b) => b.calories - a.calories
            );
        });
    },
};
</script>
<style>
.Table {
    display: table;
    width: 100%;
}
.Title {
    display: table-caption;
    text-align: center;
    font-weight: bold;
    font-size: larger;
}
.Heading {
    display: table-row;
    font-weight: bold;
    text-align: center;
}
.Row {
    display: table-row;
}
.Cell {
    display: table-cell;
    border: solid;
    border-width: thin;
    padding-left: 5px;
    padding-right: 5px;
}
/* Grid */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 10px;
}

.grid-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
}

.grid-cell {
    padding: 5px;
}
</style>

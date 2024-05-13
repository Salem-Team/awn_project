<template>
    <!-- <Home_Nav /> -->
    <!-- <Section_One /> -->
    <div
        data-bs-offset="60"
        data-bs-spy="scroll"
        data-bs-target=".navbar"
        class="body"
    >
        <!--Navbar Start-->
        <!-- <v-app-bar app color="primary" fixed dark>
              <v-container>
                  LOGO 
                  <router-link to="/">
                      <v-img
                          src="../assets/images/awn-logo.svg"
                          max-width="50px"
                      ></v-img>
                  </router-link>
                  <h3 class="charity-name">عون</h3>
                  <v-app-bar-nav-icon
                      @click.stop="drawer = !drawer"
                  ></v-app-bar-nav-icon>
                  <v-navigation-drawer v-model="drawer" app>
                      <v-list-item-group>
                          <v-list-item
                              v-for="(item, index) in items"
                              :key="index"
                              link
                          >
                              <v-list-item-title>{{
                                  item.title
                              }}</v-list-item-title>
                          </v-list-item>
                      </v-list-item-group>
                  </v-navigation-drawer>
              </v-container>
          </v-app-bar> -->
        <!-- navbar end -->
        <!-- home-agency start -->
        <v-container fluid class="hero-agency mb-50" id="home">
            <v-row class="mr-10" align="center" justify="center">
                <v-col cols="12" lg="6">
                    <h1 class="hero-title fw-bold mb-4">منصة عون</h1>
                    <p
                        class="text-muted mb-5 fs-18"
                        style="font-size: 16px Tajwal"
                    >
                        منصة عون تقوم بإدارة حالات الجمعيات الخيرية وتعمل كمنصة
                        تواصل بين الجمعيات لإيجاد الحالات المشتركة بينهم. تهتم
                        منصة عون بمساعدة الفقراء والمحتاجين وذوي الاعاقة.تهدف
                        إلى توزيع ثروة بشكل عادل وضمان مساواة جميع الحالات
                        الانسانية في الحقوق.
                    </p>
                    <v-btn color="success" rounded large href="#contact">
                        اتصل بنا
                        <v-icon right>mdi-chevron-right</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="12" lg="6">
                    <img
                        src="../assets/images/Business deal-rafiki.svg"
                        alt=""
                        class="img-fluid"
                    />
                </v-col>
            </v-row>
        </v-container>
        <!-- home-agency end -->
        <!-- about start -->
        <section
            class="hero-6 bg-dark d-flex align-items-center position-relative"
            id="about"
        >
            <v-container class="container">
                <!-- <h1 class="hero-title d-none d-xl-block text-uppercase">We Grow</h1> -->
                <v-row
                    class="d-flex align-items-center justify-content-between"
                >
                    <v-col cols="12" lg="6">
                        <div
                            class="hero-content mb-lg-0 mb-md-5 mb-5 pb-lg-0 pb-md-5"
                        >
                            <!--<h1 class="text-light font-weight-medium">We Grow</h1>-->
                            <h1 class="text-light font-weight-medium mb-4 pb-1">
                                منصة تواصل للجمعيات الخيرية
                            </h1>
                            <p
                                class="hero-6-sub-title mb-4 pb-2"
                                style="font-size: 16px Tajwal"
                            >
                                منصة عون هي منصة لتواصل الجمعيات الخيرية
                                المختلفة بالمحتاجين، والوصول إلى الحالات
                                الانسانية المشتركة بين الجمعيات المختلفة. تقدم
                                هذه المنصة مساعدة للفقراء والمحتاجين وذوي
                                الاعاقة عن طريق تيسير التواصل والتعاون بين
                                الجمعيات الخيرية.
                            </p>
                            <v-btn color="primary" href="#contact"
                                >انضم الآن</v-btn
                            >
                        </div>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <img
                            class="img-fluid rounded"
                            style="width: 500px; height: 800px"
                            alt="hero"
                            src="data:image/svg+xml;utf8,%3Csvg%20id%3D%22bac3cfc7-b61b-48ce-8441-8100e40ddaa6%22%20data-name%3D%22Layer%201%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22797.5%22%20height%3D%22834.5%22%20viewBox%3D%220%200%20797.5%20834.5%22%3E%3Ctitle%3Evoid%3C/title%3E%3Cellipse%20cx%3D%22308.5%22%20cy%3D%22780%22%20rx%3D%22308.5%22%20ry%3D%2254.5%22%20fill%3D%22%233f3d56%22/%3E%3Ccircle%20cx%3D%22496%22%20cy%3D%22301.5%22%20r%3D%22301.5%22%20fill%3D%22%233f3d56%22/%3E%3Ccircle%20cx%3D%22496%22%20cy%3D%22301.5%22%20r%3D%22248.89787%22%20opacity%3D%220.05%22/%3E%3Ccircle%20cx%3D%22496%22%20cy%3D%22301.5%22%20r%3D%22203.99362%22%20opacity%3D%220.05%22/%3E%3Ccircle%20cx%3D%22496%22%20cy%3D%22301.5%22%20r%3D%22146.25957%22%20opacity%3D%220.05%22/%3E%3Cpath%20d%3D%22M398.42029%2C361.23224s-23.70394%2C66.72221-13.16886%2C90.42615%2C27.21564%2C46.52995%2C27.21564%2C46.52995S406.3216%2C365.62186%2C398.42029%2C361.23224Z%22%20transform%3D%22translate%28-201.25%20-32.75%29%22%20fill%3D%22%23d0cde1%22/%3E%3Cpath%20d%3D%22M398.42029%2C361.23224s-23.70394%2C66.72221-13.16886%2C90.42615%2C27.21564%2C46.52995%2C27.21564%2C46.52995S406.3216%2C365.62186%2C398.42029%2C361.23224Z%22%20transform%3D%22translate%28-201.25%20-32.75%29%22%20opacity%3D%220.1%22/%3E%3Cpath%20d%3D%22M415.10084%2C515.74682s-1.75585%2C16.68055-2.63377%2C17.55847.87792%2C2.63377%2C0%2C5.26754-1.75585%2C6.14547%2C0%2C7.02339-9.65716%2C78.13521-9.65716%2C78.13521-28.09356%2C36.8728-16.68055%2C94.81576l3.51169%2C58.82089s27.21564%2C1.75585%2C27.21564-7.90132c0%2C0-1.75585-11.413-1.75585-16.68055s4.38962-5.26754%2C1.75585-7.90131-2.63377-4.38962-2.63377-4.38962%2C4.38961-3.51169%2C3.51169-4.38962%2C7.90131-63.2105%2C7.90131-63.2105%2C9.65716-9.65716%2C9.65716-14.92471v-5.26754s4.38962-11.413%2C4.38962-12.29093%2C23.70394-54.43127%2C23.70394-54.43127l9.65716%2C38.62864%2C10.53509%2C55.3092s5.26754%2C50.04165%2C15.80262%2C69.356c0%2C0%2C18.4364%2C63.21051%2C18.4364%2C61.45466s30.72733-6.14547%2C29.84941-14.04678-18.4364-118.5197-18.4364-118.5197L533.62054%2C513.991Z%22%20transform%3D%22translate%28-201.25%20-32.75%29%22%20fill%3D%22%232f2e41%22/%3E%3Cpath%20d%3D%22M391.3969%2C772.97846s-23.70394%2C46.53-7.90131%2C48.2858%2C21.94809%2C1.75585%2C28.97148-5.26754c3.83968-3.83968%2C11.61528-8.99134%2C17.87566-12.87285a23.117%2C23.117%2C0%2C0%2C0%2C10.96893-21.98175c-.463-4.29531-2.06792-7.83444-6.01858-8.16366-10.53508-.87792-22.826-10.53508-22.826-10.53508Z%22%20transform%3D%22translate%28-201.25%20-32.75%29%22%20fill%3D%22%232f2e41%22/%3E%3Cpath%20d%3D%22M522.20753%2C807.21748s-23.70394%2C46.53-7.90131%2C48.28581%2C21.94809%2C1.75584%2C28.97148-5.26754c3.83968-3.83969%2C11.61528-8.99134%2C17.87566-12.87285a23.117%2C23.117%2C0%2C0%2C0%2C10.96893-21.98175c-.463-4.29531-2.06792-7.83444-6.01857-8.16367-10.53509-.87792-22.826-10.53508-22.826-10.53508Z%22%20transform%3D%22translate%28-201.25%20-32.75%29%22%20fill%3D%22%232f2e41%22/%3E%3Ccircle%20cx%3D%22295.90488%22%20cy%3D%22215.43252%22%20r%3D%2236.90462%22%20fill%3D%22%23ffb8b8%22/%3E%3Cpath%20d%3D%22M473.43048%2C260.30832S447.07%2C308.81154%2C444.9612%2C308.81154%2C492.41%2C324.62781%2C492.41%2C324.62781s13.70743-46.39439%2C15.81626-50.61206Z%22%20transform%3D%22translate%28-201.25%20-32.75%29%22%20fill%3D%22%23ffb8b8%22/%3E%3Cpath%20d%3D%22M513.86726%2C313.3854s-52.67543-28.97148-57.943-28.09356-61.45466%2C50.04166-60.57673%2C70.2339%2C7.90131%2C53.55335%2C7.90131%2C53.55335%2C2.63377%2C93.05991%2C7.90131%2C93.93783-.87792%2C16.68055.87793%2C16.68055%2C122.90931%2C0%2C123.78724-2.63377S513.86726%2C313.3854%2C513.86726%2C313.3854Z%22%20transform%3D%22translate%28-201.25%20-32.75%29%22%20fill%3D%22%23d0cde1%22/%3E%3Cpath%20d%3D%22M543.2777%2C521.89228s16.68055%2C50.91958%2C2.63377%2C49.16373-20.19224-43.89619-20.19224-43.89619Z%22%20transform%3D%22translate%28-201.25%20-32.75%29%22%20fill%3D%22%23ffb8b8%22/%3E%3Cpath%20d%3D%22M498.50359%2C310.31267s-32.48318%2C7.02339-27.21563%2C50.91957%2C14.9247%2C87.79237%2C14.9247%2C87.79237l32.48318%2C71.11182%2C3.51169%2C13.16886%2C23.70394-6.14547L528.353%2C425.32067s-6.14547-108.86253-14.04678-112.37423A33.99966%2C33.99966%2C0%2C0%2C0%2C498.50359%2C310.31267Z%22%20transform%3D%22translate%28-201.25%20-32.75%29%22%20fill%3D%22%23d0cde1%22/%3E%3Cpolygon%20points%3D%22277.5%20414.958%20317.885%20486.947%20283.86%20411.09%20277.5%20414.958%22%20opacity%3D%220.1%22/%3E%3Cpath%20d%3D%22M533.896%2C237.31585l.122-2.82012%2C5.6101%2C1.39632a6.26971%2C6.26971%2C0%2C0%2C0-2.5138-4.61513l5.97581-.33413a64.47667%2C64.47667%2C0%2C0%2C0-43.1245-26.65136c-12.92583-1.87346-27.31837.83756-36.182%2C10.43045-4.29926%2C4.653-7.00067%2C10.57018-8.92232%2C16.60685-3.53926%2C11.11821-4.26038%2C24.3719%2C3.11964%2C33.40938%2C7.5006%2C9.18513%2C20.602%2C10.98439%2C32.40592%2C12.12114%2C4.15328.4%2C8.50581.77216%2C12.35457-.83928a29.721%2C29.721%2C0%2C0%2C0-1.6539-13.03688%2C8.68665%2C8.68665%2C0%2C0%2C1-.87879-4.15246c.5247-3.51164%2C5.20884-4.39635%2C8.72762-3.9219s7.74984%2C1.20031%2C10.062-1.49432c1.59261-1.85609%2C1.49867-4.559%2C1.70967-6.99575C521.28248%2C239.785%2C533.83587%2C238.70653%2C533.896%2C237.31585Z%22%20transform%3D%22translate%28-201.25%20-32.75%29%22%20fill%3D%22%232f2e41%22/%3E%3Ccircle%20cx%3D%22559%22%20cy%3D%22744.5%22%20r%3D%2243%22%20fill%3D%22%2301C1FF%22/%3E%3Ccircle%20cx%3D%2254%22%20cy%3D%22729.5%22%20r%3D%2243%22%20fill%3D%22%2301C1FF%22/%3E%3Ccircle%20cx%3D%2254%22%20cy%3D%22672.5%22%20r%3D%2231%22%20fill%3D%22%2301C1FF%22/%3E%3Ccircle%20cx%3D%2254%22%20cy%3D%22624.5%22%20r%3D%2222%22%20fill%3D%22%2301C1FF%22/%3E%3C/svg%3E"
                        />
                    </v-col>
                </v-row>
            </v-container>
        </section>
        <!-- about end -->
        <!-- serices start  -->
        <v-section class="powerful-tools-area" id="features">
            <div class="powerful-shape shape-2">
                <img
                    alt=""
                    class="spinner"
                    src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20viewBox%3D%220%200%201855.6%201132.14%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%2C.cls-3%7Bfill%3Anone%3B%7D.cls-2%7Bclip-path%3Aurl%28%23clip-path%29%3B%7D.cls-3%7Bstroke%3A%2301C1FF%3Bstroke-miterlimit%3A10%3Bstroke-width%3A6px%3B%7D%3C/style%3E%3CclipPath%20id%3D%22clip-path%22%20transform%3D%22translate%28503.78%2095.84%29%22%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M865.06%2C283.65s-25.3-8.93-100.9%2C12.67-233.55%2C105.3-294.3%2C33.75S401%2C154.57%2C361.86%2C88.42%2C287.61-4.73%2C189.06.67%2C0%2C104.62%2C0%2C199.12%2C6.81%2C343.57%2C144.51%2C408.37s62.1%2C182.25%2C20.25%2C216S19%2C731%2C35.16%2C830.92s98.55%2C187.65%2C224.1%2C145.8%2C155.19-148.5%2C174.79-213.3%2C103.31-101.25%2C207.26-68.85S878%2C740.23%2C951.81%2C673c82.35-75%2C79.19-160.71%2C53-255C976.74%2C317.32%2C898.56%2C287.77%2C865.06%2C283.65Z%22/%3E%3C/clipPath%3E%3C/defs%3E%3Cg%20id%3D%22Layer_2%22%20data-name%3D%22Layer%202%22%3E%3Cg%20id%3D%22Layer_3%22%20data-name%3D%22Layer%203%22%3E%3Cg%20class%3D%22cls-2%22%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22531.35%22%20y1%3D%221085.25%22%20x2%3D%221263.43%22%20y2%3D%22346.71%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22549.36%22%20y1%3D%221093.81%22%20x2%3D%221281.44%22%20y2%3D%22355.27%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22562.77%22%20y1%3D%221103.16%22%20x2%3D%221294.85%22%20y2%3D%22364.63%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22603.54%22%20y1%3D%221084.85%22%20x2%3D%221335.62%22%20y2%3D%22346.31%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22621.55%22%20y1%3D%221093.41%22%20x2%3D%221353.63%22%20y2%3D%22354.87%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22634.96%22%20y1%3D%221102.77%22%20x2%3D%221367.04%22%20y2%3D%22364.23%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22659.69%22%20y1%3D%221103.16%22%20x2%3D%221391.77%22%20y2%3D%22364.63%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22677.7%22%20y1%3D%221111.72%22%20x2%3D%221409.78%22%20y2%3D%22373.18%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22691.1%22%20y1%3D%221121.08%22%20x2%3D%221423.18%22%20y2%3D%22382.54%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22724.48%22%20y1%3D%221112.12%22%20x2%3D%221456.56%22%20y2%3D%22373.58%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22742.49%22%20y1%3D%221120.68%22%20x2%3D%221474.57%22%20y2%3D%22382.14%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22755.9%22%20y1%3D%221130.03%22%20x2%3D%221487.97%22%20y2%3D%22391.49%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22881.69%22%20y1%3D%221020.5%22%20x2%3D%221613.77%22%20y2%3D%22281.96%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22899.7%22%20y1%3D%221029.06%22%20x2%3D%221631.78%22%20y2%3D%22290.52%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22913.1%22%20y1%3D%221038.42%22%20x2%3D%221645.18%22%20y2%3D%22299.88%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22943.42%22%20y1%3D%221029.46%22%20x2%3D%221675.5%22%20y2%3D%22290.92%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22961.44%22%20y1%3D%221038.02%22%20x2%3D%221693.51%22%20y2%3D%22299.48%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22974.84%22%20y1%3D%221047.37%22%20x2%3D%221706.92%22%20y2%3D%22308.83%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22987.59%22%20y1%3D%221065.19%22%20x2%3D%221719.67%22%20y2%3D%22326.65%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%221017.92%22%20y1%3D%221056.24%22%20x2%3D%221750%22%20y2%3D%22317.7%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%221035.93%22%20y1%3D%221064.79%22%20x2%3D%221768.01%22%20y2%3D%22326.25%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%221049.33%22%20y1%3D%221074.15%22%20x2%3D%221781.41%22%20y2%3D%22335.61%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%221059.65%22%20y1%3D%221085.25%22%20x2%3D%221791.73%22%20y2%3D%22346.71%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%221089.97%22%20y1%3D%221076.3%22%20x2%3D%221822.05%22%20y2%3D%22337.76%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%221107.98%22%20y1%3D%221084.85%22%20x2%3D%221840.06%22%20y2%3D%22346.31%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%221121.39%22%20y1%3D%221094.21%22%20x2%3D%221853.47%22%20y2%3D%22355.67%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22139.84%22%20y1%3D%22843.56%22%20x2%3D%22871.92%22%20y2%3D%22105.02%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22157.85%22%20y1%3D%22852.12%22%20x2%3D%22889.93%22%20y2%3D%22113.58%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22171.25%22%20y1%3D%22861.47%22%20x2%3D%22903.33%22%20y2%3D%22122.93%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22212.03%22%20y1%3D%22843.16%22%20x2%3D%22944.11%22%20y2%3D%22104.62%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22230.04%22%20y1%3D%22851.72%22%20x2%3D%22962.12%22%20y2%3D%22113.18%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22243.44%22%20y1%3D%22861.07%22%20x2%3D%22975.52%22%20y2%3D%22122.53%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22268.17%22%20y1%3D%22861.47%22%20x2%3D%221000.25%22%20y2%3D%22122.93%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22286.18%22%20y1%3D%22870.03%22%20x2%3D%221018.26%22%20y2%3D%22131.49%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22299.59%22%20y1%3D%22879.38%22%20x2%3D%221031.67%22%20y2%3D%22140.84%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%2224.56%22%20y1%3D%22741.05%22%20x2%3D%22756.64%22%20y2%3D%222.51%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%222.13%22%20y1%3D%22742.45%22%20x2%3D%22734.21%22%20y2%3D%223.91%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%2242.57%22%20y1%3D%22749.61%22%20x2%3D%22774.65%22%20y2%3D%2211.07%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%2255.98%22%20y1%3D%22758.96%22%20x2%3D%22788.06%22%20y2%3D%2220.42%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%2296.75%22%20y1%3D%22740.65%22%20x2%3D%22828.83%22%20y2%3D%222.11%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22114.76%22%20y1%3D%22749.21%22%20x2%3D%22846.84%22%20y2%3D%2210.67%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22128.17%22%20y1%3D%22758.56%22%20x2%3D%22860.25%22%20y2%3D%2220.02%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22152.89%22%20y1%3D%22758.96%22%20x2%3D%22884.97%22%20y2%3D%2220.42%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22170.9%22%20y1%3D%22767.52%22%20x2%3D%22902.98%22%20y2%3D%2228.98%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22184.31%22%20y1%3D%22776.87%22%20x2%3D%22916.39%22%20y2%3D%2238.34%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22332.96%22%20y1%3D%22870.43%22%20x2%3D%221065.04%22%20y2%3D%22131.89%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22350.98%22%20y1%3D%22878.98%22%20x2%3D%221083.06%22%20y2%3D%22140.44%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22364.38%22%20y1%3D%22888.34%22%20x2%3D%221096.46%22%20y2%3D%22149.8%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22310.83%22%20y1%3D%22965.74%22%20x2%3D%221042.91%22%20y2%3D%22227.2%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22328.84%22%20y1%3D%22974.3%22%20x2%3D%221060.92%22%20y2%3D%22235.76%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22342.24%22%20y1%3D%22983.65%22%20x2%3D%221074.32%22%20y2%3D%22245.11%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22372.57%22%20y1%3D%22974.69%22%20x2%3D%221104.65%22%20y2%3D%22236.16%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22390.58%22%20y1%3D%22983.25%22%20x2%3D%221122.66%22%20y2%3D%22244.71%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22403.98%22%20y1%3D%22992.61%22%20x2%3D%221136.06%22%20y2%3D%22254.07%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22416.74%22%20y1%3D%221010.43%22%20x2%3D%221148.82%22%20y2%3D%22271.89%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22447.06%22%20y1%3D%221001.47%22%20x2%3D%221179.14%22%20y2%3D%22262.93%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22465.07%22%20y1%3D%221010.03%22%20x2%3D%221197.15%22%20y2%3D%22271.49%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22478.47%22%20y1%3D%221019.38%22%20x2%3D%221210.55%22%20y2%3D%22280.85%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22488.79%22%20y1%3D%221030.49%22%20x2%3D%221220.87%22%20y2%3D%22291.95%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22519.12%22%20y1%3D%221021.53%22%20x2%3D%221251.2%22%20y2%3D%22282.99%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22537.13%22%20y1%3D%221030.09%22%20x2%3D%221269.21%22%20y2%3D%22291.55%22/%3E%3Cline%20class%3D%22cls-3%22%20x1%3D%22550.53%22%20y1%3D%221039.44%22%20x2%3D%221282.61%22%20y2%3D%22300.9%22/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                />
            </div>
            <v-container>
                <v-row>
                    <v-col cols="12" lg="6">
                        <img
                            class="powerful-image mt-50"
                            src="../assets/images/Online connection-rafiki.svg"
                            alt="Feature Image"
                        />
                    </v-col>
                    <v-col cols="12" lg="6">
                        <div class="powerful-tools-content mt-50">
                            <v-container>
                                <div class="section-title">
                                    <p class="sub-title">المزايا</p>
                                    <h2 class="title">تواصل بين الجمعيات</h2>
                                </div>
                                <div class="powerful-content-wrapper">
                                    <p style="font-size: 16px Tajwal">
                                        توفر منصة عون وسيلة تواصل فعالة بين
                                        الجمعيات الخيرية المختلفة، مما يسهل
                                        تبادل المعلومات والتعاون في إيجاد
                                        الحالات المشتركة وتقديم المساعدة للفقراء
                                        والمحتاجين.
                                    </p>
                                    <v-btn
                                        color="primary"
                                        class="main-btn main-btn-2"
                                        href="#contact"
                                    >
                                        تعلم المزيد
                                    </v-btn>
                                </div>
                            </v-container>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-section>
        <!-- services end -->
        <!-- descoverd-aeria start -->
        <v-container>
            <v-row>
                <v-col cols="12" lg="6">
                    <div class="discover-content-wrapper">
                        <div class="section-title">
                            <p class="sub-title">المزايا</p>
                            <h2 class="title">إدارة حالات الجمعيات</h2>
                        </div>
                        <div class="discover-content">
                            <p style="font-size: 16px Tajwal">
                                تساعد منصة عون في إدارة حالات الجمعيات الخيرية
                                بشكل مركزي وفعال، مما يسهل على الجمعيات تنظيم
                                وتوزيع المساعدات بشكل أفضل وتحقيق تأثير إيجابي
                                في المجتمع.
                            </p>
                            <v-btn
                                color="primary"
                                class="main-btn main-btn-2"
                                href="#contact"
                            >
                                تعلم المزيد
                            </v-btn>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" lg="6">
                    <div class="powerful-image mt-50">
                        <img
                            class="feature2"
                            src="../assets/images/Office management-rafiki.svg"
                            alt="Feature Image"
                            transition="fade-left"
                            duration="1000"
                            delay="300"
                        />
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <!-- descoverd-aeria end -->
        <!-- charity-section start -->
        <div
            class="everything-shape shape-1 bg-primary"
            style="opacity: 0.2"
        ></div>
        <v-container
            class="everything-area"
            id="everything"
            style="background-color: transparent"
        >
            <v-row>
                <v-col cols="12" lg="6">
                    <div class="everything-image mt-50">
                        <img
                            class="feature3"
                            src="../assets/images/Charity-bro.svg"
                            alt="Feature Image"
                            transition="fade-left"
                            duration="1000"
                            delay="300"
                        />
                    </div>
                </v-col>
                <v-col cols="12" lg="6">
                    <div class="everything-content-wrapper mt-50">
                        <div class="section-title">
                            <p class="sub-title">المزايا</p>
                            <h2 class="title">مساعدة الفقراء والمحتاجين</h2>
                        </div>
                        <div class="everything-content">
                            <ul class="everything-items">
                                <li>
                                    <span>01</span>
                                    <p style="font-size: 16px Tajwal">
                                        تعمل منصة عون على مساعدة الفقراء
                                        والمحتاجين وذوي الاعاقة من خلال تيسير
                                        التواصل والتعاون بين الجمعيات الخيرية
                                        المختلفة، مما يساعد في تحسين حياتهم
                                        وتلبية احتياجاتهم الأساسية.
                                    </p>
                                </li>
                            </ul>
                            <v-btn
                                color="primary"
                                class="main-btn main-btn-2"
                                href="#contact"
                            >
                                تعلم المزيد
                            </v-btn>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <!-- charity-section end -->
        <!-- reviwes start -->
        <v-container class="section reviews bg-white" id="testimonial">
            <v-row justify="center">
                <v-col cols="12" sm="8" sm-offset="2" md="6" md-offset="3">
                    <div class="heading heading-1 mb-60 text--center">
                        <h2 class="heading--title">مراجعات المستخدمين</h2>
                        <p class="heading--desc" style="margin: 20px">
                            نحن نعرض فقط أفضل المواقع الإلكترونية والأرشيفات
                            وصفحات الهبوط التي تم بناؤها بالكامل بشغف وبساطة
                            وإبداع
                        </p>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <!-- Testimonial #1 -->
                <v-col cols="12" sm="4" md="4">
                    <v-card class="testimonial-panel">
                        <v-card-text>
                            <p>
                                منصة رائعة ومفيدة جدًا لتواصل الجمعيات الخيرية
                                وتقديم المساعدة للفقراء والمحتاجين.
                            </p>
                        </v-card-text>
                        <v-card-actions>
                            <div class="testimonial--author pl-3">
                                <h5>أحمد</h5>
                            </div>
                            <div class="testimonial--rating">
                                <v-icon>mdi-star</v-icon>
                                <v-icon>mdi-star</v-icon>
                                <v-icon>mdi-star</v-icon>
                                <v-icon>mdi-star-half-full</v-icon>
                                <v-icon>mdi-star-outline</v-icon>
                            </div>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <!-- Testimonial #2 -->
                <v-col cols="12" sm="4" md="4">
                    <v-card class="testimonial-panel">
                        <v-card-text class="testimonial--body">
                            <p id="review_2">
                                أنا سعيد جدًا بتجربتي مع منصة عون، حيث سهلت علي
                                تواصلي مع الجمعيات الخيرية وتقديم المساعدة
                                للفقراء.
                            </p>
                        </v-card-text>
                        <v-card-actions class="testimonial--meta">
                            <div class="testimonial--author pl-3">
                                <h5>فاطمة</h5>
                            </div>
                            <div class="testimonial--rating">
                                <v-icon>mdi-star</v-icon>
                                <v-icon>mdi-star</v-icon>
                                <v-icon>mdi-star</v-icon>
                                <v-icon>mdi-star</v-icon>
                                <v-icon>mdi-star</v-icon>
                            </div>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <!-- Testimonial #3 -->
                <v-col cols="12" sm="4" md="4">
                    <v-card class="testimonial-panel">
                        <v-card-text class="testimonial--body">
                            <p id="review_3">
                                منصة عون تعتبر حلاً رائعًا لتنظيم وإدارة حالات
                                الجمعيات الخيرية بشكل مركزي وفعال.
                            </p>
                        </v-card-text>
                        <v-card-actions>
                            <div class="testimonial--author pl-3">
                                <h5>محمد</h5>
                            </div>
                            <div class="testimonial--rating">
                                <v-icon>mdi-star</v-icon>
                                <v-icon>mdi-star</v-icon>
                                <v-icon>mdi-star</v-icon>
                                <v-icon>mdi-star</v-icon>
                                <v-icon>mdi-star-half-full</v-icon>
                            </div>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <!-- reviwes end -->
        <!-- footer start -->
        <div
            class="footer bg-blue-lighten-5 d-flex align-center justify-space-between"
            style="padding: 50px 20px; width: 100%"
        >
            <!-- Contact Info -->
            <div class="pb-0" id="contact">
                <div class="container" style="padding-bottom: 40px">
                    <div class="contact-item">
                        <div class="row align-items-center">
                            <div class="contact-info">
                                <div class="mb-4">
                                    <h2>لنتواصل</h2>
                                </div>
                                <v-divider></v-divider>
                                <v-row class="contact_details">
                                    <v-col cols="12">
                                        <v-row>
                                            <v-col cols="12">
                                                <h5>العنوان :</h5>
                                                <div class="d-flex mt-2">
                                                    <v-icon
                                                        >mdi-home-outline</v-icon
                                                    >
                                                    <div
                                                        class="icon-content ms-3"
                                                    >
                                                        <p class="mb-0 fs-15">
                                                            مصر
                                                        </p>
                                                    </div>
                                                </div>
                                            </v-col>
                                            <v-col cols="12">
                                                <h6>البريد الإلكتروني :</h6>
                                                <div class="d-flex mt-2">
                                                    <v-icon
                                                        >mdi-email-outline</v-icon
                                                    >
                                                    <div
                                                        class="icon-content ms-3"
                                                    >
                                                        <p class="mb-0 fs-15">
                                                            medafi2703@avonkin.com
                                                        </p>
                                                    </div>
                                                </div>
                                            </v-col>
                                            <v-col cols="12">
                                                <h6>رقم الهاتف :</h6>
                                                <div class="d-flex mt-2">
                                                    <v-icon
                                                        >mdi-phone-outline</v-icon
                                                    >
                                                    <div
                                                        class="icon-content ms-3"
                                                    >
                                                        <p class="mb-0 fs-15">
                                                            1555555555555
                                                        </p>
                                                    </div>
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Quick Links -->
            <div style="margin: 150px 0 0 150px">
                <v-row class="d-flex flex-column">
                    <v-col cols="12" lg="3" class="text-center text-lg-start">
                        <div class="footer-logo mb-4">
                            <a href="#">
                                <img
                                    alt=""
                                    src="../assets/images/awn-logo.svg"
                                    width="50px"
                                />
                            </a>
                        </div>
                        <a class="text-muted" href="#"
                            >medafi2703@avonkin.com</a
                        >
                        <p class="text-muted">1555555555555</p>
                    </v-col>
                    <v-col cols="12" lg="9">
                        <v-row>
                            <v-col cols="12" sm="6" md="3">
                                <h5 class="fs-22 mb-3 fw-semibold">
                                    روابط سريعة
                                </h5>
                                <ul
                                    class="list-unstyled footer-nav d-flex align-center"
                                >
                                    <li>
                                        <a class="footer-link" href="#home"
                                            >الرئيسية</a
                                        >
                                    </li>
                                    <li>
                                        <a class="footer-link" href="#about"
                                            >عنا</a
                                        >
                                    </li>
                                    <li>
                                        <a class="footer-link" href="#features"
                                            >المزايا</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            class="footer-link"
                                            href="#testimonial"
                                            >التعليقات</a
                                        >
                                    </li>
                                    <li>
                                        <a class="footer-link" href="#contact"
                                            >تواصل معنا</a
                                        >
                                    </li>
                                </ul>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </div>
        </div>
        <!-- footer end -->
    </div>
</template>

<script>
// import Home_Nav from "@/components/Home_Nav.vue";
// import Section_One from "@/components/Section_One.vue";
import animate from "../styles/animate.css";
import style from "../styles/style.css";
import bootstrap from "../styles/bootstrap.min.css";
export default {
    name: "HomeView",
    components: {
        // Home_Nav,
        // Section_One,
    },
    methods: {
        $style() {
            return animate, style, bootstrap.min;
        },
        //     toggleMobileMenu() {
        //         var navbarCollapse = document.getElementById("navbarCollapse");
        //         navbarCollapse.classList.toggle("open");
        //     },
        //     closeMenu() {
        //         var navbarCollapse = document.getElementById("navbarCollapse");
        //         // Check if the menu is open, if so, close it
        //         if (navbarCollapse.classList.contains("open")) {
        //             navbarCollapse.classList.remove("open");
        //         }
        //     },
        // },
        // mounted() {
        //     this.$style;
        //     // Add event listener to the toggle button
        //     var navbarToggler = document.querySelector(".navbar-toggler");
        //     navbarToggler.addEventListener("click", this.toggleMobileMenu);
        //     // Add event listener to each nav link
        //     var navLinks = document.querySelectorAll("#mySidenav a.nav-link");
        //     navLinks.forEach((link) => {
        //         link.addEventListener("click", this.closeMenu);
        //     });
        //     // Add event listener to close menu when clicking anywhere on the page
        //     document.body.addEventListener("click", (event) => {
        //         var navbarCollapse = document.getElementById("navbarCollapse");
        //         // Check if the clicked element is not inside the navbar and the menu is open
        //         if (
        //             !event.target.closest(".navbar") &&
        //             navbarCollapse.classList.contains("open")
        //         ) {
        //             navbarCollapse.classList.remove("open");
        //         }
        //     });
    },
    // data() {
    //     return {
    //         drawer: false,
    //         items: [
    //             { title: "الرئيسية", href: "#home" },
    //             { title: "عنا", href: "#about" },
    //             { title: "المزايا", href: "#features" },
    //             { title: "التعليقات", href: "#testimonial" },
    //             { title: "تواصل معنا", href: "#contact" },
    //         ],
    //     };
    // },
};
</script>
<style lang="scss" scoped>
//* //{
//  direction: rtl !important;
//}
//.info_stat .info {
//font-size: 20px;
// span {
//font-size: 25px;
// }
//}
//   * {
//     padding: 0;
//     margin: 0;
//   }
.body,
p,
h1,
h2,
h3,
h4,
h5,
h6,
a,
button {
    font-family: "Tajawal";
}
/* Add other CSS styles here */
.contact_details {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
}

@media (min-width: 768px) {
    .contact_details {
        flex-direction: row;
    }
}
.section-title .sub-title::before {
    right: 2px;
}
.testimonial-panel {
    margin-bottom: 20px;
}
.footer-logo {
    margin-bottom: 20px;
}
</style>

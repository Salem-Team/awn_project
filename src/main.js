import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "tailwindcss/tailwind.css";

// pinia config
import { createPinia } from "pinia";

// Emitter configuration
import mitt from "mitt";
const Emitter = mitt();

// Vuetify

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const vuetify = createVuetify({
  components,
  directives,
});

// Mdi_Fonts
import "@mdi/font/css/materialdesignicons.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(faCoffee);

// تسجيل مكون FontAwesomeIcon
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
library.add(fas);

createApp(App)
  //.use(store)
  .use(router)
  .use(vuetify)
  .component("font-awesome-icon", FontAwesomeIcon)
  .provide("Emitter", Emitter)
  .use(createPinia())
  .mount("#app");
